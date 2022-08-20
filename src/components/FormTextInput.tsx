import { TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import React from 'react';
import { CreateContact, Product } from 'src/types';

type Props = {
  idText: string;
  label: string;
  description: string;
  required: boolean;
  form: UseFormReturnType<any>;
  formValue: string;
};
export const FormTextInput = ({
  idText,
  label,
  description,
  required,
  form,
  formValue,
}: Props) => {
  return (
    <TextInput
      id={idText}
      label={label}
      description={description}
      radius="lg"
      required={required}
      classNames={{
        input: 'bg-gray-800 border-gray-900 rounded',
      }}
      {...form.getInputProps(formValue)}
    />
  );
};
