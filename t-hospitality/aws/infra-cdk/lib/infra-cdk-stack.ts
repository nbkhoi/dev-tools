import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ses from 'aws-cdk-lib/aws-ses';
import * as config from 'config';
export class InfraCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // t-hospitality-configs-bucket
    const tHospitalityConfigsBucket = new s3.Bucket(this, 'THospitalityConfigsBucket', {
      bucketName: `${config.get('environment')}-t-hospitality-configs-bucket`,
      removalPolicy: config.get('defaultRemovalPolicy'),
      autoDeleteObjects: true,
      blockPublicAccess: new s3.BlockPublicAccess({ blockPublicAcls: false, blockPublicPolicy: false, ignorePublicAcls: false, restrictPublicBuckets: false }),
    });
    tHospitalityConfigsBucket.grantPublicAccess();

    // t-hospitality-img-bucket
    const tHospitalityImgBucket = new s3.Bucket(this, 'THospitalityImgBucket', {
      bucketName: `${config.get('environment')}-t-hospitality-img-bucket`,
      removalPolicy: config.get('defaultRemovalPolicy'),
      autoDeleteObjects: true,
      blockPublicAccess: new s3.BlockPublicAccess({ blockPublicAcls: false, blockPublicPolicy: false, ignorePublicAcls: false, restrictPublicBuckets: false }),
    });
    tHospitalityImgBucket.grantPublicAccess();

    // t-hospitality-pdf-content-bucket
    const tHospitalityPdfContentBucket = new s3.Bucket(this, 'THospitalityPdfContentBucket', {
      bucketName: `${config.get('environment')}-t-hospitality-pdf-content-bucket`,
      removalPolicy: config.get('defaultRemovalPolicy'),
      autoDeleteObjects: true,
      blockPublicAccess: new s3.BlockPublicAccess({ blockPublicAcls: false, blockPublicPolicy: false, ignorePublicAcls: false, restrictPublicBuckets: false }),
    });
    tHospitalityPdfContentBucket.grantPublicAccess();

    // t-hospitality-resources-bucket
    const tHospitalityResourcesBucket = new s3.Bucket(this, 'THospitalityResourcesBucket', {
      bucketName: `${config.get('environment')}-t-hospitality-resources-bucket`,
      removalPolicy: config.get('defaultRemovalPolicy'),
      autoDeleteObjects: true,
      blockPublicAccess: new s3.BlockPublicAccess({ blockPublicAcls: false, blockPublicPolicy: false, ignorePublicAcls: false, restrictPublicBuckets: false }),
    });
    tHospitalityResourcesBucket.grantPublicAccess();

    // cognito-pre-sign-up lambda role
    const cognitoPreSignUpLambdaRole = new iam.Role(this, 'CognitoPreSignUpLambdaRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      roleName: `${config.get('environment')}-t-hospitality-cognito-pre-sign-up-lambda-role`,
    });
    // Allow lambda to create log groups
    cognitoPreSignUpLambdaRole.addToPolicy(new iam.PolicyStatement({
      actions: ['logs:CreateLogGroup'],
      resources: ['*'],
    }));
    // Allow lambda to create log streams
    cognitoPreSignUpLambdaRole.addToPolicy(new iam.PolicyStatement({
      actions: [
        'logs:CreateLogStream',
        'logs:PutLogEvents',
      ],
      resources: ['*'],
    }));
    // cognito-pre-sign-up lambda function
    const cognitoPreSignUpLambda = new lambda.Function(this, 'CognitoPreSignUpLambda', {
      functionName: `${config.get('environment')}-t-hospitality-cognito-pre-sign-up-lambda`,
      runtime: lambda.Runtime.PYTHON_3_12,
      handler: 'app.lambda_handler',
      code: lambda.Code.fromAsset('src/lambda/cognito_pre_sign_up'),
      role: cognitoPreSignUpLambdaRole
    });
    // cognito reset password lambda role
    const cognitoResetPasswordLambdaRole = new iam.Role(this, 'CognitoResetPasswordLambdaRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      roleName: `${config.get('environment')}-t-hospitality-cognito-reset-password-lambda-role`,
    });
    // Allow lambda to create log groups
    cognitoResetPasswordLambdaRole.addToPolicy(new iam.PolicyStatement({
      actions: ['logs:CreateLogGroup'],
      resources: ['*'],
    }));
    // Allow lambda to create log streams
    cognitoResetPasswordLambdaRole.addToPolicy(new iam.PolicyStatement({
      actions: [
        'logs:CreateLogStream',
        'logs:PutLogEvents',
      ],
      resources: ['*'],
    }));
    // cognito-reset-password lambda function
    const cognitoResetPasswordLambda = new lambda.Function(this, 'CognitoResetPasswordLambda', {
      functionName: `${config.get('environment')}-t-hospitality-cognito-reset-password-lambda`,
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('src/lambda/cognito-reset-password'),
      role: cognitoResetPasswordLambdaRole
    });
    // cognito user pool for t-hospitality service
    const tHospitalityUserPool = new cognito.UserPool(this, 'THospitalityUserPool', {
      userPoolName: `${config.get('environment')}-t-hospitality-user-pool`,
      selfSignUpEnabled: true,
      signInAliases: { email: true },
      autoVerify: { email: true },
      passwordPolicy: {
        minLength: 8,
        tempPasswordValidity: cdk.Duration.days(7),
        requireLowercase: true,
        requireDigits: true,
        requireUppercase: true,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      mfa: cognito.Mfa.OFF,
      customAttributes: {
        'language': new cognito.StringAttribute({
          minLen: 1,
          maxLen: 256,
          mutable: true
        }),
      },
      email: cognito.UserPoolEmail.withSES({
        fromEmail: 'thospitality.tma@gmail.com',
        sesRegion: 'ap-southeast-1'
      }),
      userVerification: {
        emailStyle: cognito.VerificationEmailStyle.LINK,
        emailSubject: 'Your verification link',
        emailBody: 'Please click the link below to verify your email address. {##Verify Email##}',
      },
      userInvitation: {
        emailSubject: 'Your temporary password',
        emailBody: 'Your username is {username} and temporary password is {####}.',
        smsMessage: 'Your username is {username} and temporary password is {####}.',
      },
      lambdaTriggers: {
        preSignUp: cognitoPreSignUpLambda,
        customMessage: cognitoResetPasswordLambda,
      },
    });
    tHospitalityUserPool.applyRemovalPolicy(config.get('defaultRemovalPolicy'));

    // Configure app client integration with user pool
    const tHospitalityUserPoolClient = tHospitalityUserPool.addClient('THospitalityUserPoolClient', {
      userPoolClientName: `${config.get('environment')}-t-hospitality-user-pool-client`,
      generateSecret: false,
      authFlows: {
        userPassword: true,
        userSrp: true,
        adminUserPassword: true,
        custom: true,
      },
      oAuth: {
        callbackUrls: ['http://localhost:8080'],
        logoutUrls: ['http://localhost:8080'],
      },
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
      ],
      preventUserExistenceErrors: true,
    });

    // Configure domain for user pool
    const tHospitalityUserPoolDomain = tHospitalityUserPool.addDomain('THospitalityUserPoolDomain', {
      cognitoDomain: {
        domainPrefix: `${config.get('environment')}-t-hospitality`,
      },
    });

    // Amazon SES SMTP user
    const sesSmtpUser = new iam.User(this, 'SesSmtpUser', {
      userName: `${config.get('environment')}.thospitality.ses.smtp`,
    });
    
    // Amazon SES SMTP user role
    const sesSmtpUserRole = new iam.Role(this, 'SesSmtpUserRole', {
      assumedBy: new iam.ServicePrincipal('ses.amazonaws.com'),
      roleName: `${config.get('environment')}-t-hospitality-ses-smtp-user-role`,
    });
    // Allow ses:SendRawEmail
    sesSmtpUserRole.addToPolicy(new iam.PolicyStatement({
      actions: ['ses:SendRawEmail'],
      resources: ['*'],
    }));
    // Attach SES SMTP user role to SES SMTP user
    sesSmtpUser.attachInlinePolicy(new iam.Policy(this, 'SesSmtpUserPolicy', {
      statements: [
        new iam.PolicyStatement({
          actions: ['ses:SendRawEmail'],
          resources: ['*'],
        }),
      ],
    }));
    // Amazon SES Identities
    // Sender identity
    const sesIdentities = new ses.EmailIdentity(this, 'SesIdentities', {
      identity: ses.Identity.email('thospitality.tma@gmail.com'),
    });
    sesIdentities.grantSendEmail(sesSmtpUser);

    // Reciever identities
    const vahao = new ses.EmailIdentity(this, 'VahaoSesRecieverIdentities', {
      identity: ses.Identity.email('vahao@tma.com.vn'),
    });
    const nbkhoi = new ses.EmailIdentity(this, 'NbkhoiSesRecieverIdentities', {
      identity: ses.Identity.email('nbkhoi@tma.com.vn'),
    });
    const nmduc1 = new ses.EmailIdentity(this, 'Nmduc1SesRecieverIdentities', {
      identity: ses.Identity.email('nmduc1@tma.com.vn'),
    });
    const vdtan = new ses.EmailIdentity(this, 'VdtanSesRecieverIdentities', {
      identity: ses.Identity.email('vdtan@tma.com.vn'),
    });
    const nbaokhoi = new ses.EmailIdentity(this, 'NbaokhoiSesRecieverIdentities', {
      identity: ses.Identity.email('nbaokhoi@icloud.com'),
    });
  }
}
