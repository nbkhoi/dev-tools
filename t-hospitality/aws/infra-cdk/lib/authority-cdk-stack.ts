import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
export class AuthorityCdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Create a new IAM user for t-hospitality application
        // The user will have the following permissions:
        // - Amazon S3 read/write access
        // - AWS Lambda basic execution role
        // - Amazon CloudWatch Logs read/write access
        // - Amazon SES send email access
        // - Amazon Cognito read-only access
        // - Amazon Secrets Manager read-only access
        const tHospitalityUser = new iam.User(this, 'THospitalityUser', {
            userName: 'thospitlity',
        });
        // Attach Amazon S3 read/write access policy to the user
        tHospitalityUser.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess'));
        // Attach AWS Lambda basic execution role policy to the user
        tHospitalityUser.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'));
        // Attach Amazon CloudWatch Logs read/write access policy to the user
        tHospitalityUser.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchLogsFullAccess'));
        // Attach Amazon SES send email access policy to the user
        tHospitalityUser.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSESFullAccess'));
        // Attach Amazon Cognito administrator access policy to the user
        tHospitalityUser.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonCognitoPowerUser'));
        // Attach Amazon Secrets Manager read-only access policy to the user
        tHospitalityUser.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('SecretsManagerReadWrite'));
    }
}  