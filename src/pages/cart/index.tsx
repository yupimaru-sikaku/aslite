import React from 'react';
import { CartList } from 'src/components/Cart/CartList';
import { GradientText } from 'src/components/GradientText';
import { Layout } from 'src/components/Layout';
import { motion } from 'framer-motion';

const Cart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // 初期状態
      animate={{ opacity: 1, y: 0 }} // マウント時
      exit={{ opacity: 0, y: 10 }} // アンマウント時
      transition={{
        duration: 0.5,
      }}
    >
      <Layout title="カート内商品">
        <main>
          <h1 className="text-center">
            <GradientText title="カート内商品" />
          </h1>

          <div className="p-vw-8" />

          <CartList />
        </main>
      </Layout>
    </motion.div>
  );
};

export default Cart;
