import React from 'react';
import { ContactForm } from 'src/components/ContactForm';
import { Layout } from 'src/components/Layout';

const ContactCreate = () => {
  return (
    <Layout title="お問い合わせ">
      <ContactForm />
    </Layout>
  );
};

export default ContactCreate;
