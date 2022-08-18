export type Product = {
  id: string;
  identification_number: string;
  product_name: string;
  description: string;
  genre: string;
  image_url: any;
  created_at: string;
};

export type EditedProduct = {
  id: string;
  identification_number: string;
  product_name: string;
  description: string;
  genre: string;
  image_url: string;
};

export type AdminRegisterForm = {
  email: string;
  password: string;
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
