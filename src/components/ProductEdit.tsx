import {
  ActionIcon,
  Button,
  Center,
  CheckIcon,
  FileInput,
  FileInputProps,
  Group,
  Loader,
  SegmentedControl,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFocusTrap } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { IconPhoto } from '@tabler/icons';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDownloadUrl } from 'src/hooks/useDownloadUrl';
import { Product } from 'src/types';
import { supabase } from 'src/utils/supabase';
import { FormTextArea } from './FormTextArea';
import { FormTextInput } from './FormTextInput';
import { GradientText } from './GradientText';

export const ProductEdit = ({ product }: any) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const focusTrapRef = useFocusTrap();

  const form = useForm<Omit<Product, 'id' | 'created_at'>>({
    initialValues: {
      identification_number: product.identification_number,
      product_name: product.product_name,
      description: product.description,
      genre: product.genre,
      image_url: product.image_url,
    },
  });

  const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
    if (Array.isArray(value)) {
      return (
        <Group spacing="sm" py="xs">
          {value.map((file, index) => (
            <Value file={file} key={index} />
          ))}
        </Group>
      );
    }
    return value ? <Value file={value} /> : null;
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const filePathListStringArr =
      typeof form.values.image_url === 'string'
        ? form.values.image_url.replace('[', '').replace(']', '').split(',')
        : form.values.image_url;

    const imageUrlList = await Promise.all(
      filePathListStringArr.map(async (file: any) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        const { error } = await supabase.storage
          .from('product')
          .upload(filePath, file);
        if (error) {
          alert(error.message);
          setIsLoading(false);
          return;
        }
        return filePath;
      })
    );

    const { error } = await supabase
      .from('product')
      .update({
        identification_number: form.values.identification_number,
        product_name: form.values.product_name,
        description: form.values.description,
        genre: form.values.genre,
        image_url: imageUrlList,
      })
      .eq('id', product.id);

    if (error) {
      alert(error.message);
      setIsLoading(false);
      return;
    }

    router.push('/');
    setIsLoading(false);
    showNotification({
      title: '編集完了',
      message: '',
      icon: (
        <ActionIcon size="xs">
          <CheckIcon />
        </ActionIcon>
      ),
    });
  };

  return (
    <div className="mx-auto max-w-sm px-3">
      <h1 className="text-center">
        <GradientText title="EDIT PAGE" />
      </h1>

      <div className="p-vw-8" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div ref={focusTrapRef}>
          <FormTextInput
            idText="identification_number"
            label="識別番号"
            description="他と重複しない番号"
            required={true}
            form={form}
            formValue="identification_number"
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <FormTextInput
            idText="product_name"
            label="名前"
            description="例）「パーフェクト鳳凰」の有精卵20個+α"
            required={true}
            form={form}
            formValue="product_name"
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <FormTextArea
            idText="description"
            label="説明"
            autosize={true}
            minRows={2}
            required={true}
            form={form}
            formValue="description"
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <Text size="sm">
            ジャンル
            <span
              className="mantine-qrh19y mantine-TextInput-required ml-1 text-red-500"
              aria-hidden="true"
            >
              *
            </span>
          </Text>
          <SegmentedControl
            id="genre"
            radius="md"
            color="blue"
            aria-required
            classNames={{
              root: 'bg-gray-800 border-gray-900 rounded',
            }}
            data={[
              { label: '植物', value: '植物' },
              { label: 'メダカ', value: 'メダカ' },
              { label: 'その他', value: 'その他' },
            ]}
            {...form.getInputProps('genre')}
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <FileInput
            label="画像（複数可）"
            placeholder="クリックして登録"
            multiple
            required
            valueComponent={ValueComponent}
            classNames={{
              input: 'bg-gray-800 border-gray-900 rounded',
            }}
            {...form.getInputProps('image_url')}
          />
        </div>

        <div className="p-vw-12" />

        <div className="text-center">
          <Button
            className="w-32"
            type="submit"
            disabled={
              form.values.identification_number == '' ||
              form.values.product_name == '' ||
              form.values.description == '' ||
              form.values.genre == '' ||
              form.values.image_url == '' ||
              isLoading
            }
          >
            {isLoading ? <Loader color="teal" size="xs" /> : '編集する'}
          </Button>
        </div>
      </form>
    </div>
  );
};

const Value = ({ file }: { file: File }) => {
  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: '3px 7px',
        borderRadius: theme.radius.sm,
      })}
    >
      <IconPhoto size={14} style={{ marginRight: 5 }} />
      <span
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          maxWidth: 200,
          display: 'inline-block',
        }}
      >
        {file.name}
      </span>
    </Center>
  );
};