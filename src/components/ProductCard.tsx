import { ActionIcon, CheckIcon, Loader, Popover } from '@mantine/core';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { Product } from 'src/types';
import { ProductBadge } from 'src/components/ProductBadge';
import { ProductDialog } from './ProductDialog';
import { IconAdjustments } from '@tabler/icons';
import { supabase } from 'src/utils/supabase';
import Link from 'next/link';
import {
  useDeleteProductMutation,
  useDeleteProudctImageMutation,
  useDownloadProductURLQuery,
} from 'src/ducks/product/query';
import { showNotification } from '@mantine/notifications';

export const ProductCard: FC<Omit<Product, 'created_at'>> = ({
  id,
  product_name,
  description,
  genre,
  image_url,
}) => {
  const [dialogOpened, dialogSetOpened] = useState<boolean>(false);
  const [popoverLoading, setPopoverLoading] = useState<boolean>(false);

  const { data: imageUrlList, isLoading } =
    useDownloadProductURLQuery(image_url);

  const [deleteProductMutation] = useDeleteProductMutation();
  const [deleteProductImageMutation] = useDeleteProudctImageMutation();

  const user = supabase.auth.user();

  const deleteProduct = async (id: string, image_url: any) => {
    try {
      setPopoverLoading(true);
      const is_ok = confirm('本当に削除しますか？');
      if (is_ok) {
        // Supabaseのストレージ削除
        await deleteProductImageMutation(image_url)
          .unwrap()
          .catch(() => {
            throw new Error('画像の削除に失敗しました');
          });
        await deleteProductMutation(id)
          .unwrap()
          .catch(() => {
            throw new Error('テーブルの削除に失敗しました');
          });

        window.location.reload();
        showNotification({
          title: '削除しました',
          message: '',
          icon: (
            <ActionIcon size="xs">
              <CheckIcon />
            </ActionIcon>
          ),
        });
      }
    } catch (error) {
      alert(error);
      setPopoverLoading(false);
      return;
    }
  };

  useEffect(() => {
    return () => setPopoverLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ProductDialog
        opened={dialogOpened}
        setOpened={dialogSetOpened}
        product_name={product_name}
        description={description}
        genre={genre}
        image_url={imageUrlList}
      />
      <div className="w-full p-4 xs:w-1/2 sm:w-1/2 md:w-1/3 xl:w-1/4">
        <div className="rounded-lg bg-gray-100 p-6">
          {imageUrlList ? (
            <Image
              src={imageUrlList[0]}
              onClick={() => dialogSetOpened(true)}
              className="cursor-pointer"
              alt="product"
              width={350}
              height={350}
              loading={'lazy'}
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
                    <div className="flex h-16 items-center justify-center">
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
                        onClick={() => deleteProduct(id, image_url)}
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
