import { FormEvent, FC, memo } from 'react';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/solid';
import useStore from 'src/store';
import { useMutateProduct } from 'src/hooks/useMutateProduct';
import { useDownloadUrl } from 'src/hooks/useDownloadUrl';
import { useUploadProductImg } from 'src/hooks/useUploadProductImg';
import { Spinner } from './Spinner';

export const ProductFormMemo: FC = () => {
  const session = useStore((state) => state.session);
  const editedProduct = useStore((state) => state.editedProduct);
  const update = useStore((state) => state.updateEditedProduct);
  const { createProductMutation, updateProductMutation } = useMutateProduct();
  const { useMutateUploadProductImg } = useUploadProductImg();
  const { fullUrl: imageUrl, setFullUrl } = useDownloadUrl(
    editedProduct.image_url,
    'product'
  );
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedProduct.id === '') {
      await createProductMutation.mutateAsync({
        identification_number: editedProduct.identification_number,
        product_name: editedProduct.product_name,
        description: editedProduct.description,
        genre: editedProduct.genre,
        image_url: editedProduct.image_url,
      });
      setFullUrl('');
    } else {
      await updateProductMutation.mutateAsync({
        id: editedProduct.id,
        identification_number: editedProduct.identification_number,
        product_name: editedProduct.product_name,
        description: editedProduct.description,
        genre: editedProduct.genre,
        image_url: editedProduct.image_url,
      });
      setFullUrl('');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="my-1 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        placeholder="identification_number ?"
        value={editedProduct.identification_number}
        onChange={(e) =>
          update({ ...editedProduct, identification_number: e.target.value })
        }
      />
      <input
        type="text"
        className="my-1 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        placeholder="product_name ?"
        value={editedProduct.product_name}
        onChange={(e) =>
          update({ ...editedProduct, product_name: e.target.value })
        }
      />
      <input
        type="text"
        className="my-1 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        placeholder="description ?"
        value={editedProduct.description}
        onChange={(e) =>
          update({ ...editedProduct, description: e.target.value })
        }
      />
      <input
        type="text"
        className="my-1 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        placeholder="genre ?"
        value={editedProduct.genre}
        onChange={(e) => update({ ...editedProduct, genre: e.target.value })}
      />
      <div className="my-3 flex justify-center">
        <button
          data-testid="btn-post"
          type="submit"
          className={`rounded ${
            useMutateUploadProductImg.isLoading ||
            !editedProduct.identification_number
              ? 'bg-gray-300'
              : 'bg-indigo-600'
          }  px-3 py-2 text-sm text-white`}
          disabled={
            useMutateUploadProductImg.isLoading ||
            !editedProduct.identification_number
          }
        >
          {editedProduct.id ? 'Update' : 'Create'}
        </button>
      </div>
      <div className="flex justify-center">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Image"
            className="rounded"
            width={150}
            height={150}
          />
        )}
      </div>
      <div className="flex justify-center">
        {useMutateUploadProductImg.isLoading && <Spinner />}
      </div>
      <div className="flex justify-center">
        <label htmlFor="post">
          <CameraIcon className="mt-2 h-7 w-7 cursor-pointer text-gray-500" />
        </label>
        <input
          className="hidden"
          type="file"
          id="post"
          accept="image/*"
          onChange={async (e) => {
            await useMutateUploadProductImg.mutateAsync(e);
            e.target.value = '';
          }}
        />
      </div>
    </form>
  );
};
export const ProductForm = memo(ProductFormMemo);
