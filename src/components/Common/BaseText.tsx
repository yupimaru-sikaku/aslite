import { DefaultMantineColor, Text } from '@mantine/core';
import { NextPage } from 'next';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: DefaultMantineColor | 'dimmed';
  weight?: number;
  lineClamp?: number;
  align?: 'left' | 'center' | 'right';
};
export const BaseText: NextPage<Props> = ({
  children,
  size = 'xl',
  color = 'gray',
  weight = 900,
  lineClamp,
  align,
}) => {
  return (
    <Text
      size={size}
      color={color}
      weight={weight}
      lineClamp={lineClamp}
      align={align}
    >
      {children}
    </Text>
  );
};
