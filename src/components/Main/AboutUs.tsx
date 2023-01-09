import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { DataTable } from 'mantine-datatable';
import aboutUsList from 'src/utils/aboutUsList.json';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';

export const AboutUs = () => {
  const largerThanSm = useMediaQuery('sm');

  return (
    <div className="mx-auto">
      <BaseText size={100} color="green" align="center" fontFamily="Work Sans">
        ABOUT US
      </BaseText>

      <div className="p-vw-8" />

      <div className="mx-auto max-w-screen-sm">
        <DataTable
          idAccessor="name"
          striped
          withBorder
          withColumnBorders
          shadow="sm"
          verticalSpacing="lg"
          fontSize={largerThanSm ? 'lg' : 'md'}
          borderRadius="lg"
          columns={[
            { accessor: 'name', title: '会社名', width: '40%' },
            { accessor: 'post', title: '合同会社あすらいと' },
          ]}
          records={aboutUsList}
        ></DataTable>
      </div>
    </div>
  );
};
