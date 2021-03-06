import { Testing, TerraformStack } from 'cdktf';
import * as secure from '../src';

describe('secure all', () => {
  test('default', () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, 'test');

    new secure.BaseLine(stack, 'TestDefault', {
      vpcId: 'vpc-123456789',
    });

    expect(Testing.synth(stack)).toMatchSnapshot();
  });
});

