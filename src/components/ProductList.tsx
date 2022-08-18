import React from 'react';
import { useQueryProductList } from 'src/hooks/useQueryProductList';
import { useSubscribeProductList } from 'src/hooks/useSubscribeProductList';
import { ProductCard } from 'src/components/ProductCard';

export const ProductList = () => {
  const { data: productList } = useQueryProductList();
  useSubscribeProductList();
  return (
    <>
      <h1 className="mb-4 text-center">一覧</h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {productList?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              identification_number={product.identification_number}
              product_name={product.product_name}
              description={product.description}
              genre={product.genre}
              image_url={product.image_url}
              // created_at={product.created_at}
            />
          ))}
        </div>
      </div>
    </>
  );
};
