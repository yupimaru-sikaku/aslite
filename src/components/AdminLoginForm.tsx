import { useForm } from '@mantine/form';
import React, { useState } from 'react';
import { GradientText } from './GradientText';
import { AdminLoginFormType } from 'src/types/index';
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

export const AdminLoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const focusTrapRef = useFocusTrap();

  const form = useForm<AdminLoginFormType>({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signIn({
      email: form.values.email,
      password: form.values.password,
    });

    if (error) {
      alert('Eメールアドレスかパスワードが間違っています');
      setIsLoading(false);
      return;
    }

    router.push('/');
    showNotification({
      title: 'ログインしました',
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
        <GradientText title="ADMIN LOGIN" />
      </h1>

      <div className="p-vw-8" />

      <form onSubmit={form.onSubmit(handleSubmit)} ref={focusTrapRef}>
        <div>
          <FormTextInput
            idText="email"
            label="メールアドレス"
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

        <div className="p-vw-12" />

        <div className="text-center">
          <Button
            className="w-32"
            type="submit"
            disabled={
              form.values.email == '' || form.values.password == '' || isLoading
            }
          >
            {isLoading ? <Loader color="teal" size="xs" /> : 'ログイン'}
          </Button>
        </div>

        <div className="p-vw-4" />

        <div className="text-center">
          <Link href="/admin/register">
            <a>登録はこちら</a>
          </Link>
        </div>
      </form>
    </div>
  );
};
