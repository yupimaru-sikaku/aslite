import Stripe from 'stripe';

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
  name: string;
  furigana: string;
  email: string;
  phoneNumber?: string;
  content: string;
};

export type StripeProduct = {
  id: string;
  description: string | null;
  name: string;
  images: string[];
  unit_label: string | null | undefined;
  metadata: Stripe.Metadata;
  prices: {
    id: string;
    currency: string;
    transform_quantity: Stripe.Price.TransformQuantity | null;
    unit_amount: number | null;
  }[];
  active: boolean;
};

export type StripePriceType = {
  id: string;
  currency: string;
  transform_quantity: Stripe.Price.TransformQuantity | null;
  unit_amount: number | null;
};
