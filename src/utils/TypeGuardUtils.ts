import { Contact } from 'src/types';

const isContact = (item: unknown): item is Contact => {
  const target = item as Contact;

  return (
    'name' in target &&
    typeof target.name === 'string' &&
    !!target.name &&
    'furigana' in target &&
    typeof target.furigana === 'string' &&
    !!target.furigana &&
    'email' in target &&
    typeof target.email === 'string' &&
    !!target.email &&
    'phoneNumber' in target &&
    typeof target.phoneNumber === 'string' &&
    !!target.phoneNumber &&
    'content' in target &&
    typeof target.content === 'string' &&
    !!target.content
  );
};

export { isContact };
