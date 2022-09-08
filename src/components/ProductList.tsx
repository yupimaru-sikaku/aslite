import React from 'react';
import { ProductCard } from 'src/components/ProductCard';
import { GradientText } from './GradientText';
import { Loader } from '@mantine/core';
import { useGetProductListQuery } from 'src/ducks/product/query';

export const ProductList = () => {
  const { data: productList, isLoading, isError } = useGetProductListQuery();

  if (isLoading) {
    return (
      <>
        <h1 className="text-center">
          <GradientText title="LINE UP" />
        </h1>
        <div className="p-vw-8" />
        <Loader sx={{ margin: 'auto' }} />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h1 className="text-center">
          <GradientText title="LINE UP" />
        </h1>
        <div className="p-vw-8" />
        <p className="text-center">エラーによりデータが取得できませんでした</p>
      </>
    );
  }

  if (!productList?.length) {
    return (
      <>
        <h1 className="text-center">
          <GradientText title="LINE UP" />
        </h1>
        <div className="p-vw-8" />
        <p className="text-center">データがありません</p>
      </>
    );
  }

  return (
    <div>
      <h1 className="text-center">
        <GradientText title="LINE UP" />
      </h1>

      <div className="p-vw-8" />

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {productList.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              identification_number={product.identification_number}
              product_name={product.product_name}
              description={product.description}
              genre={product.genre}
              image_url={product.image_url}
              is_display={product.is_display}
              updated_at={product.updated_at}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
