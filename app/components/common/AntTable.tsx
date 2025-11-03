'use client';

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface AntTableProps<T> {
  columns: TableColumnsType<T>;
  data: T[];
  scrollX?: number;
  pageSize?: number;
  stickyHeader?: boolean;
  height?: number;
}

const AntTable = <T extends object>({
  columns,
  data,
  scrollX = 1200,
  pageSize = 10,
  stickyHeader = true,
  height = 500, // required for sticky header
}: AntTableProps<T>) => {
  return (
    <div
      style={{
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        backgroundColor: '#fff', // wrapper background
      }}
    >
      <div style={{ maxHeight: height, overflowY: 'auto' }}>
        <Table<T>
          columns={columns}
          dataSource={data}
          pagination={{ pageSize }}
          scroll={{ x: scrollX, y: height - 100 }}
          sticky={stickyHeader ? { offsetHeader: 0 } : false}
          bordered={false}
          style={{
            backgroundColor: 'transparent', // table body transparent
          }}
          rowClassName={() => 'bg-white'} // set each row white
        />
      </div>
    </div>
  );
};

export default AntTable;
