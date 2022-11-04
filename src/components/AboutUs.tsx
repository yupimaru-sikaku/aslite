import React from 'react';
import { GradientText } from 'src/components/GradientText';
import { DataTable } from 'mantine-datatable';
import aboutUsList from 'src/utils/aboutUsList.json';

export const AboutUs = () => {
  return (
    <div className="px-3">
      <h1 className="text-center text-xl md:text-lg">
        <GradientText title={'ABOUT US'} />
      </h1>

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
