import { Badge } from '@mantine/core';

type Props = {
  genre: string;
};
export const ProductBadge = ({ genre }: Props) => {
  return (
    <Badge
      color={genre === '植物' ? 'green' : genre === 'メダカ' ? 'blue' : 'gray'}
      variant="filled"
    >
      {genre}
    </Badge>
  );
};
