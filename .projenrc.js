// const { JsiiProject } = require('projen');

// const project = new JsiiProject({
//   name: 'cdktf-aws-secure',
//   authorName: 'Scott Liao',
//   authorEmail: 'shazi7804@gmail.com',
//   repository: 'https://github.com/shazi7804/cdktf-aws-secure-constructs.git',
//   description: 'High level CDKTF construct to provision secure configurations with AWS',
//   license: 'Apache-2.0',
//   defaultReleaseBranch: 'main',
//   autoDetectBin: false,
//   dependabot: false,
//   cdkDependencies: [
//     '@aws-cdk/core',
//     '@aws-cdk/aws-iam',
//   ],
//   python: {
//     distName: 'cdktf-aws-secure',
//     module: 'cdktf_aws_secure',
//   },
//   deps: [
//     'cdktf@0.1.0',
//     '@cdktf/provider-aws@^1.0.7',
//     'constructs@^3.0.0',
//     'projen',
//   ],
//   devDeps: [
//     'cdktf@0.1.0',
//     '@cdktf/provider-aws@^1.0.7',
//     'constructs@^3.0.0',
//   ],
//   peerDeps: [
//     'cdktf@0.1.0',
//     '@cdktf/provider-aws@^1.0.7',
//     'constructs@^3.0.0',
//     'projen',
//   ],
// });

// project.gitignore.exclude('**/*.js');
// project.gitignore.exclude('**/*.d.ts');
// project.gitignore.exclude('package-lock.json');

// project.synth();



const { JsiiProject, Semver } = require('projen');

const cdktfVersion = Semver.caret('0.0.16')
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
  }
});

project.gitignore.exclude('**/*.js')
project.gitignore.exclude('**/*.d.ts')
project.gitignore.exclude('package-lock.json')
project.gitignore.exclude('yarn.lock')

project.synth();