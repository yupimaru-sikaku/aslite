import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { DataTable } from 'mantine-datatable';
import aboutUsList from 'src/utils/aboutUsList.json';

export const AboutUs = () => {
  return (
    <div className="px-3">
      <BaseText
        content="large"
        color="green"
        align="center"
        fontFamily="Work Sans"
      >
        ABOUT US
      </BaseText>

      <div className="p-vw-8" />

      <DataTable
        idAccessor="name"
        striped
        withBorder
        withColumnBorders
        columns={[
          { accessor: 'name', title: '会社名', width: '40%' },
          { accessor: 'post', title: '合同会社あすらいと' },
        ]}
        records={aboutUsList}
      ></DataTable>
    </div>
  );
};
