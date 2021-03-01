const { JsiiProject, Semver } = require('projen');

const cdktfVersion = Semver.caret('0.1.0')
const constructsVersion = Semver.caret('3.0.0')
const awsProviderVersion = Semver.caret('1.0.17')

const project = new JsiiProject({
  name: 'cdktf-aws-secure',
  authorName: 'Scott Liao',
  authorEmail: 'shazi7804@gmail.com',
  repository: 'https://github.com/shazi7804/cdktf-aws-secure-constructs.git',
  description: 'High level CDKTF construct to provision secure configurations with AWS',
  license: 'Apache-2.0',
  defaultReleaseBranch: 'main',
  python: {
    distName: 'cdktf-aws-secure',
    module: 'cdktf_aws_secure',
  },
  dependencies: {
    '@cdktf/provider-aws': awsProviderVersion
  },
  devDependencies: {
    '@cdktf/provider-aws': awsProviderVersion,
    'cdktf': cdktfVersion,
    'constructs': constructsVersion
  },
  peerDependencies: {
    'cdktf': cdktfVersion,
    'constructs': constructsVersion,
    '@cdktf/provider-aws': awsProviderVersion
  },
  gitignore: [
    '.DS_Store',
    '**/*.js',
    '**/*.d.ts',
    'package-lock.json',
    'yarn.lock',
    '/test/__snapshots__/'
  ]
});

project.synth();