import { Modal } from '@mantine/core';
import { ProductCarousel } from './ProductCarousel';
import { ProductBadge } from './ProductBadge';

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  product_name: string;
  description: string;
  genre: string;
  image_url: any;
};

export const ProductDialog = ({
  opened,
  setOpened,
  product_name,
  description,
  genre,
  image_url,
}: Props) => {
  return (
    <>
      <Modal
        size="xl"
        classNames={{
          modal: 'shadow-xl shadow-blue-500/50',
        }}
        title={product_name}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <div>
          <ProductCarousel image_url={image_url} />
          <div className="mt-3">
            <ProductBadge genre={genre} />
          </div>
          <p className="md:text-md mt-3 whitespace-pre-wrap break-words text-base leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </Modal>
    </>
  );
};
