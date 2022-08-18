type linkType = {
  title: string;
  link: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const HeaderLink: linkType[] = [
  {
    title: "Instagram",
    link: 'https://www.instagram.com/accounts/login/?next=/asuright.llc/',
    src: '/instagram_logo.webp',
    alt: 'instagram_icon',
    width: 20,
    height: 20,
  },
  {
    title: "Yahooオークション",
    link: 'https://auctions.yahoo.co.jp/seller/aujlv92378?',
    src: '/yahoo_logo.webp',
    alt: 'yahoo_logo',
    width: 24,
    height: 24,
  },
  {
    title: "メルカリ",
    link: 'https://mercari-shops.com/shops/7NxZsW4KQtjVK9u7cyZVgH?source=shared_link&utm_source=shared_link',
    src: '/mercari_logo.webp',
    alt: 'mercari_logo',
    width: 32,
    height: 32,
  },
];
