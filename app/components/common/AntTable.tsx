'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface AntTableProps<T> {
  columns: TableColumnsType<T>;
  data: T[];
  scrollX?: number;
  pageSize?: number;
  stickyHeader?: boolean;
}

const AntTable = <T extends object>({
  columns,
  data,
  scrollX = 1200,
  pageSize = 10,
  stickyHeader = true,
}: AntTableProps<T>) => {
  return (
    <Table<T>
  columns={columns}
  dataSource={data}
  scroll={{ x: scrollX }}
  pagination={{ pageSize }}
  sticky={stickyHeader ? { offsetHeader: 64 } : false}
  bordered
  style={{
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // <-- subtle modern shadow
    borderRadius: "12px",
  }}
/>

  );
};

export default AntTable;
