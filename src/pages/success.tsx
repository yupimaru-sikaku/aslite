import { Button } from '@mantine/core';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { Layout } from 'src/components/Layout';
import { IconCircleCheck } from '@tabler/icons';
import { useShoppingCart } from 'use-shopping-cart';

const Success = () => {
  const { clearCart }: { clearCart: () => undefined } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <Layout title="決済完了画面">
      <div className="p-vw-24" />
      <main className="mx-5 flex items-center justify-center">
        <div className="rounded p-4 shadow-lg ring ring-green-600/50">
          <div className="flex flex-col items-center space-y-2">
            <IconCircleCheck width={128} height={128} color="green" />
            <h1>
              <BaseText>決済が完了しました</BaseText>
            </h1>
            <BaseText size="sm">
              決済の詳細をメールにてお送りします。ご確認ください。
            </BaseText>
            <Link scroll={false} href="/">
              <a>
                <Button>トップに戻る</Button>
              </a>
            </Link>
          </div>
        </div>
      </main>
      <div className="p-vw-24" />
    </Layout>
  );
};

export default Success;
