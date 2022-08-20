import { ActionIcon, Button, CheckIcon, Loader, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CreateContact } from 'src/types';
import { supabase } from 'src/utils/supabase';
import { FormTextArea } from './FormTextArea';
import { FormTextInput } from './FormTextInput';
import { GradientText } from './GradientText';
import { init, send } from '@emailjs/browser';

export const ContactForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<CreateContact>({
    initialValues: {
      personal_name: '',
      furigana: '',
      email: '',
      phone_number: '',
      content: '',
    },
  });

  const handleSubmit = async () => {
    setIsLoading(true);

    const { error } = await supabase.from('contact').insert({
      personal_name: form.values.personal_name,
      furigana: form.values.furigana,
      email: form.values.email,
      phone_number: form.values.phone_number,
      content: form.values.content,
    });

    if (error) throw new Error(error.message);

    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    if (userID && serviceID && templateID) {
      // emailJS初期化
      console.log(123);
      init(userID);

      // emailJS送信データを定義
      const params = {
        personal_name: form.values.personal_name,
        furigana: form.values.furigana,
        email: form.values.email,
        content: form.values.content,
      };

      // emailJS送信
      try {
        await send(serviceID, templateID, params);
        alert('送信成功');
      } catch (error) {
        // 送信失敗したらalertで表示
        alert(error);
      }
    }

    router.push('/');
    setIsLoading(false);
    showNotification({
      title: '送信されました',
      message: '担当からご連絡があるまでお待ち下さい',
      icon: (
        <ActionIcon size="xs">
          <CheckIcon />
        </ActionIcon>
      ),
    });
  };

  return (
    <div className="mx-3 max-w-sm md:mx-auto">
      <h1 className="text-center">
        <GradientText title="CONTACT FORM" />
      </h1>

      <div className="p-vw-8" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div>
          <FormTextInput
            idText="personal_name"
            label="お名前"
            description="例）あすらいと　太郎"
            required={true}
            form={form}
            formValue="personal_name"
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <FormTextInput
            idText="furigana"
            label="ふりがな"
            description="例）あすらいと　たろう"
            required={true}
            form={form}
            formValue="furigana"
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <FormTextInput
            idText="email"
            label="Email"
            description="例）aslite@test.com"
            required={true}
            form={form}
            formValue="email"
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <FormTextInput
            idText="phone_number"
            label="電話番号"
            description="例）090-1234-5678"
            required={false}
            form={form}
            formValue="phone_number"
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <FormTextArea
            idText="content"
            label="ご相談内容"
            autosize={true}
            minRows={5}
            required={true}
            form={form}
            formValue="content"
          />
        </div>

        <div className="p-vw-12" />

        <div className="text-center">
          <Button
            className="w-32"
            type="submit"
            disabled={
              form.values.personal_name == '' ||
              form.values.furigana == '' ||
              form.values.email == '' ||
              form.values.content == ''
            }
          >
            {isLoading ? <Loader color="teal" size="xs" /> : '登録する'}
          </Button>
        </div>
      </form>
    </div>
  );
};
