import React from 'react'

export const AboutTable = () => {
  return (
    <div className="mx-5 md:mx-0">
      <p className="text-md text-center md:text-xl">会社概要</p>

      <div className="p-vw-8" />

      <table className="w-full">
        <thead></thead>
        <tbody className="">
          <tr>
            <th className="border-2 bg-gray-50 p-5 font-bold text-gray-800">
              会社名
            </th>
            <td className="border-2 p-5">合同会社あすらいと</td>
          </tr>
          <tr>
            <th className="border-2 bg-gray-50 p-5 font-bold text-gray-800">
              所在地
            </th>
            <td className="border-2 p-5">大阪府稲田新町二丁目14番7号</td>
          </tr>
          <tr>
            <th className="border-2 bg-gray-50 p-5 font-bold text-gray-800">
              電話番号
            </th>
            <td className="border-2 p-5">090-4360-9483</td>
          </tr>
          <tr>
            <th className="border-2 bg-gray-50 p-5 font-bold text-gray-800">
              Email
            </th>
            <td className="border-2 p-5">musubi.0316@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
