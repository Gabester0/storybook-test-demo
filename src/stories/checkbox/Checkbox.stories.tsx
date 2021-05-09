import React from 'react';

import { Checkbox } from './Checkbox.tsx';

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    argTypes: {
    },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
