import { Button, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  message: string;
  buttonTitle: string | ReactNode;
  fontColor?: string;
  labelColor?: string;
  buttonColor?: string;
  onConfirm?: any;
  onCancel?: any;
};

export const BaseAlert: FC<Props> = ({
  title,
  message,
  buttonTitle,
  fontColor,
  labelColor,
  buttonColor,
  onConfirm,
  onCancel,
}) => {
  const openDeleteModal = () =>
    openConfirmModal({
      title: title,
      centered: true,
      children: <Text size="sm">{message}</Text>,
      labels: { confirm: 'OK', cancel: 'CANCEL' },
      confirmProps: { color: buttonColor },
      onConfirm: onConfirm,
    });

  return (
    <Button
      onClick={openDeleteModal}
      color="red"
      classNames={{ label: labelColor }}
    >
      {buttonTitle}
    </Button>
  );
};
