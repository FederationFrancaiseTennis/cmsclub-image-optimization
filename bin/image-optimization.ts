#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';

const app = new cdk.App();

const stackName = app.node.tryGetContext('stackName')

new ImageOptimizationStack(app, 'ImgTransformationStack', {
    stackName: stackName
});

