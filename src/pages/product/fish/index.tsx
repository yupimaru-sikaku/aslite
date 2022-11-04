import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BaseText } from 'src/components/Common/BaseText';
import { GradientText } from 'src/components/GradientText';
import { Layout } from 'src/components/Layout';
import { loadStripeProduct } from 'src/hooks/loadStripeProduct';
import { StripeProduct } from 'src/types';

type Props = {
  productFishList: StripeProduct[];
};

const ProductFish: NextPage<Props> = ({ productFishList }) => {
  return (
    <Layout title="魚類一覧">
      <div className="p-vw-24" />

      <h1 className="text-center">
        <GradientText title="魚類一覧" />
      </h1>

      <div className="p-vw-8" />

      <section className="text-center">
        <ul className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {productFishList.map((product) => {
            return (
              <li key={product.id} className="hover:opacity-80">
                <Link href={`/product/fish/${product.id}`}>
                  <a>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="transition-all ease-in group-hover:scale-110 group-hover:opacity-50"
                    />
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
  const productFishList: StripeProduct[] = productList.filter((product) => {
    if (product.unit_label === '魚') {
      return product;
    }
  });
  return {
    props: { productFishList },
    revalidate: 1 * 10, // 10秒
  };
};

export default ProductFish;
