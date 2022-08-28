import { ActionIcon, Loader, Popover } from '@mantine/core';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { useDownloadUrl } from 'src/hooks/useDownloadUrl';
import { Product } from 'src/types';
import { ProductBadge } from 'src/components/ProductBadge';
import { ProductDialog } from './ProductDialog';
import { IconAdjustments } from '@tabler/icons';
import { supabase } from 'src/utils/supabase';
import { deleteProduct } from 'src/hooks/useMutateProduct';
import Link from 'next/link';

export const ProductCard: FC<Omit<Product, 'created_at'>> = ({
  id,
  product_name,
  description,
  genre,
  image_url,
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [popoverLoading, setPopoverLoading] = useState<boolean>(false);

  const user = supabase.auth.user();

  const { fullUrlList: imageUrlList } = useDownloadUrl(image_url, 'product');

  useEffect(() => {
    return () => setPopoverLoading(false);
  }, []);

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
      <div className="w-full p-4 xs:w-1/2 sm:w-1/2 md:w-1/3 xl:w-1/4">
        <div className="rounded-lg bg-gray-100 p-6">
          {imageUrlList.length ? (
            <Image
              src={imageUrlList[0]}
              onClick={() => setOpened(true)}
              className="cursor-pointer"
              alt="product"
              width={720}
              height={400}
              loading={'lazy'}
              layout={'responsive'}
              objectFit="cover"
            />
          ) : (
            <div className="flex justify-center py-10">
              <Loader variant="dots" />
            </div>
          )}
          <div className="z-10 mt-3 flex justify-between">
            <ProductBadge genre={genre} />
            {user ? (
              <Popover width={100} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <ActionIcon color="dark">
                    <IconAdjustments size={18} />
                  </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                  {popoverLoading ? (
                    <div className="flex justify-center items-center h-16">
                      <Loader size="sm" />
                    </div>
                  ) : (
                    <div className="h-16">
                      <Link href={`/product/${id}/edit`}>
                        <a>
                          <p
                            className="cursor-pointer rounded text-center font-bold hover:text-gray-500 hover:shadow"
                            onClick={() => setPopoverLoading(true)}
                          >
                            編集
                          </p>
                        </a>
                      </Link>
                      <p
                        className="mt-3 cursor-pointer rounded text-center font-bold hover:text-gray-500 hover:shadow"
                        onClick={() => deleteProduct(id)}
                      >
                        削除
                      </p>
                    </div>
                  )}
                </Popover.Dropdown>
              </Popover>
            ) : null}
          </div>
          <p className="title-font mb-4 text-lg font-medium text-gray-900">
            {product_name}
          </p>
          <p className="md:text-md mt-3 whitespace-pre-wrap break-words text-base leading-relaxed text-gray-400 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
