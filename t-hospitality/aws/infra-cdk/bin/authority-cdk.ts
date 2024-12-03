#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AuthorityCdkStack } from '../lib/authority-cdk-stack';

const app = new cdk.App();
new AuthorityCdkStack(app, 'AuthorityCdkStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});