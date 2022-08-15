import { FC, useState, Suspense, memo } from 'react';
import Image from 'next/image';
import { Spinner } from 'src/components/Spinner';
import useStore from 'src/store';
import { Product } from 'src/types';
import { useDownloadUrl } from 'src/hooks/useDownloadUrl';

export const ProductItemMemo: FC<Omit<Product, 'created_at'>> = ({
  id,
  identification_number,
  product_name,
  description,
  genre,
  image_url,
}) => {
  const session = useStore((state) => state.session);
  const update = useStore((state) => state.updateEditedProduct);
  const { fullUrl: imageUrl, isLoading: isLoadingProduct } = useDownloadUrl(
    image_url,
    'product'
  );
  return (
    <div className="w-80">
      <div className="my-3 w-full border border-dashed border-gray-400" />
      <div className="my-3 flex justify-center">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Image"
            className="rounded-lg"
            width={300}
            height={220}
          />
        )}
        <ul>
          <li>{identification_number}</li>
          <li>{product_name}</li>
          <li>{description}</li>
          <li>{genre}</li>
        </ul>
      </div>
      <div className="my-3 flex justify-center">
        {isLoadingProduct && <Spinner />}
      </div>
    </div>
  );
};
export const ProductItem = memo(ProductItemMemo);
