import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BaseText } from 'src/components/Common/BaseText';
import { GradientText } from 'src/components/GradientText';
import { Layout } from 'src/components/Layout';
import { loadStripeProduct } from 'src/hooks/loadStripeProduct';
import { StripeProduct } from 'src/types';
import { Badge } from '@mantine/core';

type Props = {
  productPlantList: StripeProduct[];
};

const ProductPlant: NextPage<Props> = ({ productPlantList }) => {
  return (
    <Layout title="植物一覧">
      <div className="p-vw-24" />

      <h1 className="text-center">
        <GradientText title="植物一覧" />
      </h1>

      <div className="p-vw-8" />

      <section className="px-10 text-center">
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
                    <BaseText size="md">{product.name}</BaseText>
                    {product.prices.map((price, i) => {
                      return (
                        <div key={i}>
                          <span>
                            {price.unit_amount &&
                              `¥${price.unit_amount.toLocaleString()}`}
                          </span>
                        </div>
                      );
                    })}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
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
