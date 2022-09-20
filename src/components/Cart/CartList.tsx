import { ActionIcon, Button } from '@mantine/core';
import { useShoppingCart } from 'use-shopping-cart';
import { BaseText } from 'src/components/Common/BaseText';
import Image from 'next/image';
import { IconTrash } from '@tabler/icons';
import Link from 'next/link';
import { CartDetails, CartEntry } from 'use-shopping-cart/core';

export const CartList = () => {
  const {
    cartDetails,
    removeItem,
    formattedTotalPrice,
    cartCount,
    clearCart,
  }: {
    cartDetails: CartDetails;
    removeItem: (id: string) => undefined;
    formattedTotalPrice: string;
    cartCount: number;
    clearCart: () => undefined;
  } = useShoppingCart();

  const checkSession = async () => {
    try {
      const session = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout_session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: Object.entries(cartDetails).map(([_id, detail]) => ({
              id: detail.id,
              quantity: detail.quantity,
            })),
          }),
        }
      ).then((response) => response.json());
      window.open(session.url);
      clearCart();
    } catch (e: unknown) {
      if (e instanceof Error) window.alert(e.message);
    }
  };
  if (cartCount !== void 0 && cartCount === 0) {
    return (
      <main>
        <BaseText align="center">商品が入っていません</BaseText>

        <div className="p-vw-24" />

        <Link scroll={false} href="/">
          <a className="block text-center">
            <Button color="gray">商品一覧</Button>
          </a>
        </Link>
      </main>
    );
  }
  return (
    <main>
      <ul>
        {Object.entries(cartDetails).map(([priceId, detail]) => {
          return (
            <div key={priceId}>
              <li className="flex">
                <div className="w-1/3">
                  {detail.image ? (
                    <Image
                      src={detail.image}
                      alt={detail.name}
                      width={250}
                      height={250}
                    />
                  ) : (
                    <Image
                      src="/noImage.webp"
                      alt="defaultImage"
                      width={500}
                      height={500}
                    />
                  )}
                </div>

                <div className="p-vw-8" />

                <div className="w-2/3">
                  <BaseText size="md">{detail.name}</BaseText>
                  <BaseText size="xs">
                    {detail.formattedPrice} * {detail.quantity} =
                    {detail.formattedValue}
                  </BaseText>
                  <ActionIcon onClick={() => removeItem(priceId)}>
                    <IconTrash />
                  </ActionIcon>
                </div>
              </li>
              <div className="p-vw-16" />
            </div>
          );
        })}
      </ul>
      <hr />
      <div className="flex justify-between">
        <BaseText>合計</BaseText>
        <BaseText>{formattedTotalPrice}</BaseText>
      </div>
      <div className="p-vw-16" />
      <div className="flex justify-center gap-6">
        <Button onClick={checkSession}>購入手続き</Button>
        <Link scroll={false} href="/">
          <a>
            <Button color="gray">商品一覧</Button>
          </a>
        </Link>
      </div>
    </main>
  );
};
