export type Product = {
  id: string;
  identification_number: string;
  product_name: string;
  description: string;
  genre: string;
  image_url: any;
  is_display: boolean;
  created_at: string;
  updated_at: string;
};

export type AdminRegisterFormType = {
  email: string;
  password: string;
  password_confirm: string;
};

export type AdminLoginFormType = {
  email: string;
  password: string;
};

export type AdminResetPasswordByEmailFormType = {
  email: string;
};

export type AdminResetPasswordFormType = {
  password: string;
  password_confirm: string;
};

export type AdminResetEmailFormType = {
  email: string;
};

export type Profile = {
  id: string | undefined;
  created_at: string;
  username: string | undefined;
  avatar_url: string | undefined;
};

export type EditedProfile = {
  username: string | undefined;
  avatar_url: string | undefined;
};

export type Contact = {
  personal_name: string;
  furigana: string;
  email: string;
  phone_number: string;
  content: string;
};
