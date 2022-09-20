import { useForm } from '@mantine/form';
import React, { useEffect, useState } from 'react';
import { GradientText } from './GradientText';
import { AdminRegisterFormType } from 'src/types';
import { FormTextInput } from './FormTextInput';
import {
  ActionIcon,
  Button,
  CheckIcon,
  Loader,
  PasswordInput,
} from '@mantine/core';
import { IconLock } from '@tabler/icons';
import { supabase } from 'src/utils/supabase';
import { useRouter } from 'next/router';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link';
import { useFocusTrap } from '@mantine/hooks';
import { GetServerSideProps } from 'next';

export const AdminRegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const focusTrapRef = useFocusTrap();

  const form = useForm<AdminRegisterFormType>({
    initialValues: {
      email: '',
      password: '',
      password_confirm: '',
    },
    validate: {
      password_confirm: (value, values) =>
        value !== values.password && 'パスワードが一致しません',
    },
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email: form.values.email,
      password: form.values.password,
    });
    if (error) {
      alert('既に存在するEメールアドレスです');
      setIsLoading(false);
      return;
    }
    router.push('/admin/login');
    showNotification({
      title: '登録しました',
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
        <GradientText title="ADMIN REGISTER" />
      </h1>

      <div className="p-vw-8" />

      <form onSubmit={form.onSubmit(handleSubmit)} ref={focusTrapRef}>
        <div>
          <FormTextInput
            idText="email"
            label="アドレス"
            description="例）aslite@test.com"
            required={true}
            form={form}
            formValue="email"
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <PasswordInput
            id="password"
            label="パスワード"
            description="半角英数字8文字以上"
            icon={<IconLock size={16} />}
            classNames={{
              input: 'border-gray-900',
              innerInput: 'bg-gray-800 border-gray-900 rounded',
            }}
            {...form.getInputProps('password')}
          />
        </div>

        <div className="p-vw-8" />

        <div>
          <PasswordInput
            id="password_confirm"
            label="パスワード（確認用）"
            description="半角英数字8文字以上"
            icon={<IconLock size={16} />}
            classNames={{
              input: 'border-gray-900',
              innerInput: 'bg-gray-800 border-gray-900 rounded',
            }}
            {...form.getInputProps('password_confirm')}
          />
        </div>

        <div className="p-vw-12" />

        <div className="text-center">
          <Button
            className="w-32"
            type="submit"
            disabled={
              form.values.email == '' ||
              form.values.password == '' ||
              form.values.password_confirm == '' ||
              isLoading
            }
          >
            {isLoading ? <Loader color="teal" size="xs" /> : '登録する'}
          </Button>

          <div className="p-vw-4" />

          <div className="text-center">
            <Link scroll={false} href="/admin/login">
              <a>ログインはこちら</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
