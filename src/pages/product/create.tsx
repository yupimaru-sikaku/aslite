import { NextPage } from 'next';
import { Layout } from 'src/components/Layout';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import {
  TextInput,
  Button,
  Group,
  Alert,
  Select,
  Textarea,
} from '@mantine/core';
import { supabase } from 'src/utils/supabase';
import { ProductCreateForm } from 'src/types';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { IconHash } from '@tabler/icons';
import useStore from 'src/store/index';

const schema = Yup.object().shape({
  identification_number: Yup.string().required('必須項目です'),
  product_name: Yup.string().required('必須項目です'),
  description: Yup.string().required('必須項目です'),
  genre: Yup.string().required('必須項目です'),
  image_url: Yup.string().required('必須項目です'),
});

const ProductCreate: NextPage = () => {
  const [error, setError] = useState('');

  const session = useStore((state) => state.session);
  const setSession = useStore((state) => state.setSession);
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);

  const form = useForm<ProductCreateForm>({
    schema: yupResolver(schema),
    initialValues: {
      identification_number: '',
      product_name: '',
      description: '',
      genre: '',
      image_url: '',
    },
  });

  const handleSubmit = async () => {
    const { data, error } = await supabase.from('product').insert({
      identification_number: form.values.identification_number,
      product_name: form.values.product_name,
      description: form.values.description,
      genre: form.values.genre,
      image_url: form.values.image_url,
    });

    if (error) {
      setError(error.message);
    }
    form.reset();
  };

  return (
    <Layout title={'投稿ページ'}>
      <Group direction="column" position="center">
        <h1 className="my-0">投稿ページ</h1>
        {error && (
          <Alert
            mt="md"
            icon={<ExclamationCircleIcon className="text-pink-500" />}
            title="認証エラー"
            color="red"
            radius="md"
          >
            {error}
          </Alert>
        )}
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            id="identification_number"
            label="識別番号 *"
            description="例)ご自由に"
            {...form.getInputProps('identification_number')}
          />
          <TextInput
            mt="md"
            id="product_name"
            label="名前 *"
            description="例)ご自由に"
            {...form.getInputProps('product_name')}
          />
          <Textarea
            id="description"
            label="説明 *"
            autosize
            minRows={2}
            description="例)ご自由に"
            {...form.getInputProps('description')}
          />
          <TextInput
            mt="md"
            id="genre"
            label="ジャンル *"
            description="例)ご自由に"
            {...form.getInputProps('genre')}
          />
          <Select
            label="Pick a hashtag"
            data={['植物', 'メダカ']}
            icon={<IconHash size={14} />}
          />
          <TextInput
            mt="md"
            id="image_url"
            label="画像 *"
            description="例)ご自由に"
            {...form.getInputProps('image_url')}
          />
          <Group mt="lg" position="center">
            <Button type="submit">登録</Button>
          </Group>
        </form>
      </Group>
    </Layout>
  );
};

export default ProductCreate;
