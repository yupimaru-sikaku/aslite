import { Badge, Button, Card, Group, Text } from '@mantine/core';
import Image from 'next/image';
import React, { FC } from 'react';
import { useDownloadUrl } from 'src/hooks/useDownloadUrl';
import { Product } from 'src/types';
import { ProductBadge } from 'src/components/ProductBadge';

export const ProductCard: FC<Omit<Product, 'created_at'>> = ({
  product_name,
  description,
  genre,
  image_url,
}) => {
  const {
    fullUrlList: imageUrlList,
    isLoading,
    setFullUrlList,
  } = useDownloadUrl(image_url, 'product');

  return (
    <div className="w-full p-4 md:w-1/2 xl:w-1/4">
      <div className="rounded-lg bg-gray-100 p-6">
        {imageUrlList ? (
          <img src={imageUrlList[0]} alt="product" width={720} height={400} />
        ) : (
          ''
        )}
        <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
          <ProductBadge genre={genre} />
        </h3>
        <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
          {product_name}
        </h2>
        <p className="whitespace-pre-wrap break-words text-base leading-relaxed text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};
