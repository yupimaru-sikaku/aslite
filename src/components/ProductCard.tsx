import { Badge, Button, Card, Group, Text } from '@mantine/core';
import Image from 'next/image';
import React, { FC } from 'react';
import { useDownloadUrl } from 'src/hooks/useDownloadUrl';
import { Product } from 'src/types';

export const ProductCard: FC<Omit<Product, 'created_at'>> = ({
  id,
  identification_number,
  product_name,
  description,
  genre,
  image_url,
}) => {
  const { fullUrl: imageUrl, isLoading: isLoadingProduct } = useDownloadUrl(
    image_url,
    'product'
  );

  return (
    <div className="p-4 md:w-1/2 xl:w-1/4">
      <div className="rounded-lg bg-gray-100 p-6">
        {imageUrl ? (
          <img src={imageUrl} alt="product" width={720} height={400} />
        ) : (
          ''
        )}
        <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
          {product_name}
        </h3>
        <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
          Chichen Itza
        </h2>
        <p className="text-base leading-relaxed">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
        </p>
      </div>
    </div>
  );
};
