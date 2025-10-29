'use client';
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

export interface DataType {
  key: React.Key;
  name: string;
  value: number;
  percent?: string;
  color?: string;
}

interface DataTableProps {
  data: DataType[];
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Group',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Share',
    dataIndex: 'percent',
    key: 'percent',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
    render: (color) => (
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: color,
          border: '1px solid #ccc',
        }}
      />
    ),
  },
];

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <Table<DataType>
      columns={columns}
      dataSource={data}
      size="middle"
      pagination={false}
      className="w-full shadow-sm rounded-md"
       style={{
        backgroundColor: 'white', 
      }}
      rowClassName={() => 'bg-white'} 
    />
  );
};

export default DataTable;
