import { Badge, Button, Card, Group, Loader, Text } from '@mantine/core';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { useDownloadUrl } from 'src/hooks/useDownloadUrl';
import { Product } from 'src/types';
import { ProductBadge } from 'src/components/ProductBadge';
import { ProductDialog } from './ProductDialog';

export const ProductCard: FC<Omit<Product, 'created_at'>> = ({
  product_name,
  description,
  genre,
  image_url,
}) => {
  const { fullUrlList: imageUrlList, isLoading: isImageLoading } =
    useDownloadUrl(image_url, 'product');

  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <ProductDialog
        opened={opened}
        setOpened={setOpened}
        product_name={product_name}
        description={description}
        genre={genre}
        image_url={imageUrlList}
      />
      <div
        className="w-full p-4 md:w-1/2 xl:w-1/4"
        onClick={() => setOpened(true)}
      >
        <div className="rounded-lg bg-gray-100 p-6">
          {imageUrlList.length ? (
            <Image
              src={imageUrlList[0]}
              alt="product"
              width={720}
              height={400}
            />
          ) : (
            <div className="flex justify-center py-10">
              <Loader variant="dots" />
            </div>
          )}
          <div className="mt-3">
            <ProductBadge genre={genre} />
          </div>
          <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
            {product_name}
          </h2>
          <p className="md:text-md mt-3 whitespace-pre-wrap break-words text-base leading-relaxed text-gray-400 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
