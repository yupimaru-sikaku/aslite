import { Text } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from 'src/lib/mantine/useMediaQuery';

type Props = {
  title: string;
};

export const GradientText = ({ title }: Props) => {
  const lagerThanXs = useMediaQuery('xs');

  const fontSize = lagerThanXs ? 32 : 24;

  return (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: 'green', to: 'cyan', deg: 45 }}
      size={fontSize}
      classNames={{
        root: 'text-xl',
      }}
      weight={900}
    >
      {title}
    </Text>
  );
};
