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
  (args) => (
    <UserTile imageSrc={args.imageSrc} isFollowing={args.isFollowing} />
  );

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'images/thumb-1.png',
  isFollowing: true,
};
