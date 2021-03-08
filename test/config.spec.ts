import { Testing, TerraformStack } from 'cdktf';
import { EnableConfigRecorder } from '../src';

describe('secure of Config', () => {
  test('default enable config', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new EnableConfigRecorder(stack, 'TestDefault', {
      snsTopicName: 'topic',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

