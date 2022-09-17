type mainContentListType = {
  path: string;
  image: string;
  imageAlt: string;
  title: string;
};
export const mainContentList: mainContentListType[] = [
  {
    path: '/product/plant',
    image: '/plant.webp',
    imageAlt: '植物の画像',
    title: 'Plant',
  },
  {
    path: '/product/fish',
    image: '/fish.webp',
    imageAlt: '魚の画像',
    title: 'Fish',
  },
  {
    path: '/',
    image: '/other.webp',
    imageAlt: 'ねずみの画像',
    title: 'Other',
  },
];
