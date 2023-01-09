import React from 'react';
import { ContactForm } from 'src/components/Contact/ContactForm';
import { Layout } from 'src/components/Layout/Layout';

const ContactCreate = () => {
  return (
    <Layout title="お問い合わせ | あすらいと">
      <div className="p-vw-12" />
      <ContactForm />
    </Layout>
  );
};

export default ContactCreate;
