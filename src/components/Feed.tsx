import { FC } from 'react';
import { useQueryProductList } from 'src/hooks/useQueryProductList';
import { useSubscribeProductList } from 'src/hooks/useSubscribeProductList';
import { ProductItem } from 'src/components/ProductItem';
import { ProductForm } from 'src/components/ProductForm';

export const Feed: FC = () => {
  const { data: productList } = useQueryProductList();
  useSubscribeProductList();

  return (
    <>
      <h1 className="mb-4 text-center">Feed</h1>
      <ProductForm />
      <ul data-testid="ul-post" className="my-5">
        {productList?.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            identification_number={product.identification_number}
            product_name={product.product_name}
            description={product.description}
            genre={product.genre}
            image_url={product.image_url}
          />
        ))}
      </ul>
    </>
  );
};
