import React, { useEffect, useState } from 'react';
import { ProductCard } from 'src/components/ProductCard';
import { GradientText } from './GradientText';
import { supabase } from 'src/utils/supabase';
import { Loader } from '@mantine/core';

export const ProductList = () => {
  const [productList, setIsProductList] = useState([{}]);

  useEffect(() => {
    const getProductList = async () => {
      const { data, error } = await supabase
        .from('product')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }
      setIsProductList(data);
    };
    getProductList();
  }, []);

  return (
    <>
      <h1 className="text-center">
        <GradientText title="LINE UP" />
      </h1>

      <div className="p-vw-8" />
      {productList.length > 1 ? (
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
              />
            ))}{' '}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
