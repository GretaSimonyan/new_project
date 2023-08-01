import {
  ComponentMeta, ComponentStory,
} from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: 'export default {\n' +
    "  title: 'pages/Code',\n" +
    '  component: Code,\n' +
    '  argTypes: {\n' +
    '    backgroundColor: {\n' +
    "      control: 'color',\n" +
    '    },\n' +
    '  },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
Normal.decorators = [StoreDecorator({})];
