const { JsiiProject } = require('projen');

const project = new JsiiProject({
  name: 'cdktf-aws-secure',
  authorName: 'Scott Liao',
  authorEmail: 'shazi7804@gmail.com',
  repository: 'https://github.com/shazi7804/cdktf-aws-secure-constructs.git',
  description: 'High level CDKTF construct to provision secure configurations with AWS',
  license: 'Apache-2.0',
  defaultReleaseBranch: 'main',
  autoDetectBin: false,
  dependabot: false,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-iam',
  ],
  python: {
    distName: 'cdktf-aws-secure',
    module: 'cdktf_aws_secure',
  },
  deps: [
    'cdktf@0.1.0',
    '@cdktf/provider-aws@^1.0.7',
    'constructs@3.0.4',
    'projen',
  ],
  devDeps: [
    'cdktf@0.1.0',
    '@cdktf/provider-aws@^1.0.7',
    'constructs@3.0.4',
  ],
  peerDeps: [
    'cdktf@0.1.0',
    '@cdktf/provider-aws@^1.0.7',
    'constructs@3.0.4',
    'projen',
    '@typescript-eslint/eslint-plugin@^4.15.2',
    '@typescript-eslint/parser@^4.15.2',
  ],
  jest: {
    testMatch: [
      'tests/*.ts',
    ],
  },
});

project.gitignore.exclude('**/*.js');
project.gitignore.exclude('**/*.d.ts');
project.gitignore.exclude('package-lock.json');

project.synth();