import { Badge, Button, Loader } from '@mantine/core';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { Layout } from 'src/components/Layout';
import { StripePriceType, StripeProduct } from 'src/types';
import { IconShoppingCart } from '@tabler/icons';
import { useShoppingCart } from 'use-shopping-cart';
import { CartDetails, CartEntry, Product } from 'use-shopping-cart/core';
import { loadStripeProduct } from 'src/hooks/loadStripeProduct';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

type Props = {
  product: StripeProduct;
};

const ProductPlantIndex: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { addItem, cartDetails } = useShoppingCart<CartDetails>();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    Object.entries(cartDetails).map(([_, detail]) => {
      if (detail.product_data.id === product.id) {
        setIsSelected(true);
      }
    });
  }, [cartDetails]);

  const moveCart = async (price: StripePriceType) => {
    setIsLoading(true);
    addItem({
      id: price.id,
      product_data: { id: product.id },
      name: product.name,
      price: price.unit_amount!,
      currency: price.currency,
      image: product.images[0],
    });
    setTimeout(() => {
      router.push('/cart');
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // 初期状態
      animate={{ opacity: 1, y: 0 }} // マウント時
      exit={{ opacity: 0, y: 10 }} // アンマウント時
      transition={{
        duration: 0.5,
      }}
    >
      <Layout title={product.name}>
        <main className="flex flex-col justify-center p-3 xs:flex-row">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={400}
          />

          <div className="p-vw-8" />

          <div className="w-full xs:w-1/3">
            <h1>
              <BaseText>{product.name}</BaseText>
            </h1>
            <div className="p-vw-2" />
            <BaseText color="green">
              {`¥${product.prices.map(
                (price) =>
                  price.unit_amount && price.unit_amount.toLocaleString()
              )} -`}
            </BaseText>
            <Badge variant="gradient" gradient={{ from: 'blue', to: 'green' }}>
              一品限り
            </Badge>
            <div className="p-vw-2" />
            <hr></hr>
            <div className="p-vw-8" />
            <BaseText size="md">{product.description}</BaseText>
            <div className="p-vw-8" />
            <div className="text-center xs:text-start">
              {product.prices.map((price, index) => {
                return (
                  <Button
                    key={index}
                    color="green"
                    disabled={isSelected || isLoading}
                    loading={isLoading}
                    sx={{ width: '170px' }}
                    leftIcon={<IconShoppingCart />}
                    onClick={() => moveCart(price)}
                  >
                    カートに入れる
                  </Button>
                );
              })}
            </div>
          </div>
        </main>
        <div className="p-vw-24" />
      </Layout>
    </motion.div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const productList = await loadStripeProduct();

  const ids: string[] = productList.map(
    (product) => `/product/plant/${product.id}`
  );
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  const productList = await loadStripeProduct();
  const productArr: StripeProduct[] = productList.filter((item) => {
    if (ctx.params && item.id === ctx.params.id) {
      return item;
    }
  });
  const product: StripeProduct = productArr[0];
  return {
    props: { product },
    revalidate: false,
  };
};

export default ProductPlantIndex;
