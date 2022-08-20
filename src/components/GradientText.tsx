import { Text } from '@mantine/core';
import React from 'react';

type Props = {
  title: string;
};

export const GradientText = ({ title }: Props) => {
  return (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      size="xl"
      weight={900}
    >
      {title}
    </Text>
  );
};
