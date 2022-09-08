import {
  ActionIcon,
  Button,
  CheckIcon,
  Loader,
  PasswordInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFocusTrap } from '@mantine/hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AdminResetPasswordFormType } from 'src/types';
import { supabase } from 'src/utils/supabase';
import { GradientText } from 'src/components/GradientText';
import { IconLock } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';

export const ResetPassword: NextPage = () => {
  const router = useRouter();
  const focusTrapRef = useFocusTrap();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<AdminResetPasswordFormType>({
    initialValues: {
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
    // 新パスワードを引数に入力
    const { error } = await supabase.auth.update({
      password: form.values.password,
    });
    router.push('/');
    showNotification({
      title: 'パスワードが変更されました',
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
        <GradientText title="PASSWORD RESET" />
      </h1>

      <div className="p-vw-8" />

      <form onSubmit={form.onSubmit(handleSubmit)} ref={focusTrapRef}>
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
              form.values.password == '' || form.values.password_confirm == ''
            }
          >
            {isLoading ? <Loader color="teal" size="xs" /> : '送信'}
          </Button>
        </div>
      </form>
    </div>
  );
};
