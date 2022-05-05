import {Meta, Story} from '@storybook/react';
import React from 'react';
import {
  UserTile,
  UserTileProps,
} from '../../../src/components/widgets/UserTile';

export default {
  title: 'components/widgets/UserTile',
  component: UserTile,
  argTypes: {},
} as Meta;

const Template: Story<UserTileProps> =
  () => <UserTile imageSrc="images/thumb-1.png" isFollowing={true} />;

export const Default = Template.bind({});
Default.args = {};
