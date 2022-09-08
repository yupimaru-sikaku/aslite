import { ActionIcon, Button, CheckIcon, Loader } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFocusTrap } from '@mantine/hooks';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { AdminResetPasswordByEmailFormType } from 'src/types';
import { supabase } from 'src/utils/supabase';
import { FormTextInput } from 'src/components/FormTextInput';
import { GradientText } from 'src/components/GradientText';
import { useRouter } from 'next/router';
import { showNotification } from '@mantine/notifications';

export const SendEmailForm: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const focusTrapRef = useFocusTrap();
  const router = useRouter();

  const form = useForm<AdminResetPasswordByEmailFormType>({
    initialValues: {
      email: '',
    },
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.api.resetPasswordForEmail(
      form.values.email,
      {
        // 送信メールに埋め込まれるリンクのリダイレクト先のURL
        // reset-passwordへ遷移する
        redirectTo: `${process.env.NEXT_PUBLIC_BASEURL}/admin/reset-password`,
      }
    );
    if (error) {
      alert(error.message);
    }
    router.push('/');
    showNotification({
      title: '入力されたアドレスにメールを送信しました',
      message: '',
      icon: (
        <ActionIcon size="xs">
          <CheckIcon />
        </ActionIcon>
      ),
    });
    setIsLoading(false);
  };

  return (
    <div className="mx-auto max-w-sm px-3">
      <h1 className="text-center">
        <GradientText title="FORGOT PASSWORD?" />
      </h1>

      <div className="p-vw-8" />

      <form onSubmit={form.onSubmit(handleSubmit)} ref={focusTrapRef}>
        <div>
          <FormTextInput
            idText="email"
            label="メールアドレス"
            description="登録しているアドレスを入力してください"
            required={true}
            form={form}
            formValue="email"
          />
        </div>

        <div className="p-vw-12" />

        <div className="text-center">
          <Button
            className="w-32"
            type="submit"
            disabled={form.values.email == ''}
          >
            {isLoading ? <Loader color="teal" size="xs" /> : '送信'}
          </Button>
        </div>

        <div className="p-vw-4" />

        <div className="text-center">
          <Link href="/admin/register">
            <a className="hover:text-gray-500">登録はこちら</a>
          </Link>
        </div>

        <div className="p-vw-4" />

        <div className="text-center">
          <Link href="/admin/login">
            <a className="hover:text-gray-500">ログインはこちら</a>
          </Link>
        </div>
      </form>
    </div>
  );
};
