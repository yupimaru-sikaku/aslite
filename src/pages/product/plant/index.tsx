import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BaseText } from 'src/components/Common/BaseText';
import { Layout } from 'src/components/Layout/Layout';
import { loadStripeProduct } from 'src/hooks/loadStripeProduct';
import { StripeProduct } from 'src/types';
import { Badge, Button } from '@mantine/core';

type Props = {
  productPlantList: StripeProduct[];
};

const ProductPlant: NextPage<Props> = ({ productPlantList }) => {
  return (
    <Layout title="植物一覧">
      <div className="p-vw-24" />

      <BaseText
        size={100}
        color="green"
        align="center"
        fontFamily="Dela Gothic One"
      >
        植物一覧
      </BaseText>

      <div className="p-vw-8" />

      <section className="px-10 text-center">
        {productPlantList.length ? (
          <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {productPlantList.map((product) => {
              return (
                <li
                  key={product.id}
                  className={`hover:opacity-80 ${
                    !product.active && `pointer-events-none`
                  }`}
                >
                  <Link href={`/product/plant/${product.id}`}>
                    <a className="relative">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={100}
                        height={100}
                        layout="responsive"
                        className="transition-all ease-in group-hover:scale-110 group-hover:opacity-50"
                      />
                      {!product.active && (
                        <Badge
                          color="red"
                          variant="filled"
                          classNames={{ root: 'absolute top-4 right-5' }}
                        >
                          SOLD OUT
                        </Badge>
                      )}
                      <BaseText>{product.name}</BaseText>
                      {product.prices.map((price, i) => {
                        return (
                          <div key={i}>
                            <BaseText>
                              {price.unit_amount &&
                                `¥${price.unit_amount.toLocaleString()}`}
                            </BaseText>
                          </div>
                        );
                      })}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <BaseText>売り切れです</BaseText>
        )}
        <div className="p-vw-24" />
        <Link href="/">
          <a>
            <Button color="gray">一覧へ戻る</Button>
          </a>
        </Link>
      </section>
      <div className="p-vw-24" />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const productList = await loadStripeProduct();
  const productPlantList: StripeProduct[] = productList.filter((product) => {
    if (product.unit_label === '植物' && product.active) {
      return product;
    }
  });
  return {
    props: { productPlantList },
    revalidate: 1 * 10, // 10秒
  };
};

export default ProductPlant;
