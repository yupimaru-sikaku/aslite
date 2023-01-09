import React, { useState } from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { useForm } from '@mantine/form';
import { FormTextInput } from 'src/components/Common/FormTextInput';
import { FormTextArea } from 'src/components/Common/FormTextArea';
import { ActionIcon, Button, CheckIcon } from '@mantine/core';
import { Contact } from 'src/types';
import { useRouter } from 'next/router';
import { showNotification } from '@mantine/notifications';

export const ContactForm = () => {
  const [isLoader, setIsLoader] = useState(false);
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: '',
      furigana: '',
      email: '',
      phoneNumber: '',
      content: '',
    },
    validate: {
      name: (value) => (value.length < 1 ? 'お名前を入力してください' : null),
      furigana: (value) =>
        value.length < 1 ? 'ふりがなを入力してください' : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'メールアドレスが不正です',
      content: (value) =>
        value.length < 1 ? 'お問い合わせ内容を入力してください' : null,
    },
  });

  const handleSubmit = async (contact: Contact): Promise<void> => {
    setIsLoader(true);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );
      if (res.ok) {
        router.push('/');
        showNotification({
          title: '送信されました',
          message: '担当からご連絡があるまでお待ち下さい',
          autoClose: false,
          icon: (
            <ActionIcon size="xs" color="cyan">
              <CheckIcon color="white" />
            </ActionIcon>
          ),
        });
      }
      setIsLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className="flex flex-col items-center">
        <BaseText
          size={100}
          color="gray"
          align="center"
          fontFamily="Dela Gothic One"
        >
          お問い合わせ
        </BaseText>
      </div>

      <div className="p-vw-12" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div>
          <FormTextInput
            idText="name"
            label="お名前"
            description="例）あすらいと 太郎"
            required={true}
            form={form}
            formValue="name"
          />
          <div className="p-vw-12" />
          <FormTextInput
            idText="furigana"
            label="ふりがな"
            description="例）あすらいと たろう"
            required={true}
            form={form}
            formValue="furigana"
          />
          <div className="p-vw-12" />
          <FormTextInput
            idText="email"
            label="メールアドレス"
            description="aslite-taro@gmail.com"
            required={true}
            form={form}
            formValue="email"
          />
          <div className="p-vw-12" />
          <FormTextInput
            idText="phoneNumber"
            label="電話番号"
            description="ハイフン無し 例）09011112222"
            required={false}
            form={form}
            formValue="phoneNumber"
          />
          <div className="p-vw-12" />
          <FormTextArea
            idText="content"
            label="お問い合わせ内容"
            description="○○の商品について"
            autosize={true}
            minRows={5}
            required={true}
            form={form}
            formValue="content"
            variant="filled"
          />
        </div>
        <div className="p-vw-12" />
        <div className="text-center">
          <Button
            className="w-32"
            type="submit"
            disabled={
              form.values.name == '' ||
              form.values.furigana == '' ||
              form.values.email == '' ||
              form.values.content == '' ||
              isLoader
            }
            loading={isLoader}
          >
            送信する
          </Button>
        </div>
      </form>

      <div className="p-vw-16" />
    </main>
  );
};
