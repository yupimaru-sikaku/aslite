import React from 'react';
import { CartList } from 'src/components/Cart/CartList';
import { BaseText } from 'src/components/Common/BaseText';
import { Layout } from 'src/components/Layout/Layout';

const Cart = () => {
  return (
    <Layout title="カート内商品">
      <div className="p-vw-12" />
      <BaseText
        size={100}
        color="gray"
        align="center"
        fontFamily="Dela Gothic One"
      >
        カート内商品
      </BaseText>

      <div className="p-vw-8" />

      <CartList />
      <div className="p-vw-12" />
    </Layout>
  );
};

export default Cart;
