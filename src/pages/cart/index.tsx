import React from 'react';
import { CartList } from 'src/components/Cart/CartList';
import { BaseText } from 'src/components/Common/BaseText';
import { Layout } from 'src/components/Layout/Layout';

const Cart = () => {
  return (
    <Layout title="カート内商品">
      <main className="p-3">
        <div className="p-vw-24" />
        <h1 className="text-center">
          <BaseText>カート内商品</BaseText>
        </h1>

        <div className="p-vw-8" />

        <CartList />
      </main>
      <div className="p-vw-24" />
    </Layout>
  );
};

export default Cart;
