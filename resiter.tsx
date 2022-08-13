import { useState } from 'react';
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { AdminRegisterForm } from 'src/types';
import { supabase } from 'src/utils/supabase';
import { Layout } from 'src/components/Layout';
import {
  Alert,
  Button,
  Group,
  PasswordInput,
  TextInput,
  Anchor,
} from '@mantine/core';
import { ShieldCheckIcon } from '@heroicons/react/solid';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('メールアドレスの形式が正しくありません')
    .required('必須項目です'),
  password: Yup.string()
    .required('必須項目です')
    .min(8, 'パスワードは8文字以上です')
    .matches(/[a-z]+/, 'アルファベットの小文字が必要です')
    .matches(/[A-Z]+/, 'アルファベットの大文字が必要です'),
});

const AdminRegister = () => {
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const form = useForm<AdminRegisterForm>({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async () => {
    if (isRegister) {
      const { error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
      });

      if (error) {
        setError(error.message);
      }
      form.reset();
    } else {
      const { error } = await supabase.auth.signIn({
        email: form.values.email,
        password: form.values.password,
      });
      if (error) {
        setError(error.message);
      }
      form.reset();
    }
  };

  return (
    <Layout
      title={isRegister ? '管理者 | ログイン画面' : '管理者 | 新規作成画面'}
    >
      <Group direction="column" position="center">
        <h1>{isRegister? '管理者登録画面' : '管理者ログイン画面'}</h1>
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
            id="email"
            label="メールアドレス *"
            description="例)example@gmail.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            mt="md"
            id="password"
            label="パスワード *"
            description="8文字以上 アルファベットの大文字小文字を含む"
            {...form.getInputProps('password')}
          />
          <Group mt="lg" position="apart">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={() => {
                setIsRegister(!isRegister);
                setError('');
              }}
              size="sm"
            >
              {isRegister ? 'ログインはこちら' : '新規登録はこちら'}
            </Anchor>
            <Button type="submit">{isRegister ? '登録' : 'ログイン'}</Button>
          </Group>
        </form>
      </Group>
    </Layout>
  );
};

export default AdminRegister;