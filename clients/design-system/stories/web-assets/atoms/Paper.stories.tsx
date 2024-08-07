import React from 'react';
import { Meta } from '@storybook/react';
import { Paper, PaperProps } from '../../../src/main';

export default {
  title: 'Web Assets/Atoms/Paper',
  component: Paper,
} as Meta<typeof Paper>;

export const Default = args => <Paper {...args}>Text</Paper>;

Default.args = {
  elevation: '3',
  children: 'Text',
} as PaperProps;
