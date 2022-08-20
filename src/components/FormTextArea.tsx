import { Textarea } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import React from 'react';
import { CreateContact, Product } from 'src/types';

type Props = {
  idText: string;
  label: string;
  autosize: boolean;
  description?: string;
  required: boolean;
  minRows: number;
  form: UseFormReturnType<any>;
  formValue: string;
};
export const FormTextArea = ({
  idText,
  label,
  autosize,
  description,
  required,
  minRows,
  form,
  formValue,
}: Props) => {
  return (
    <Textarea
      id={idText}
      label={label}
      autosize={autosize}
      minRows={minRows}
      description={description}
      required={required}
      classNames={{
        input: 'bg-gray-800 border-gray-900 rounded',
      }}
      {...form.getInputProps(formValue)}
    />
  );
};
