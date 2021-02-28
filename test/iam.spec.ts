import { Testing, TerraformStack } from 'cdktf';
import { CreateAccountPasswordPolicy } from '../src';

describe('secure of IAM', () => {
    test('default account password policy', () => {
        const app = Testing.app();
        const stack = new TerraformStack(app, 'test');

        new CreateAccountPasswordPolicy(stack, 'TestDefault', {});

        expect(Testing.synth(stack)).toMatchSnapshot();
    });
});
