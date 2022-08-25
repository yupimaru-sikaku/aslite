import { createStyles, Paper, Text, Title, Button, Badge } from '@mantine/core';
import { ProductBadge } from './ProductBadge';

interface ArticleCardImageProps {
  image: string;
  title: string;
  titleColor: string;
  category: string;
  isBudge: boolean;
}

export const ArticleCardImage = ({
  image,
  title,
  titleColor,
  category,
  isBudge,
}: ArticleCardImageProps) => {
  const useStyles = createStyles((theme) => ({
    card: {
      height: 440,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    title: {
      fontFamily: `Greycliff CF ${theme.fontFamily}`,
      fontWeight: 900,
      color: titleColor,
      lineHeight: 1.2,
      fontSize: 32,
      marginTop: theme.spacing.xs,
    },

    category: {
      color: titleColor,
      opacity: 0.7,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  }));

  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        {isBudge && (
          <div className="grid-col-3 mt-3 gap-2">
            <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
              熱帯魚
            </Badge>
            <Badge
              variant="gradient"
              gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            >
              水槽デザイン
            </Badge>
            <Badge
              variant="gradient"
              gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            >
              水槽の選定
            </Badge>
            <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
              レンタル・リース・販売
            </Badge>
          </div>
        )}
      </div>
    </Paper>
  );
};
