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
  height = 500, // ✅ required for sticky to work
}: AntTableProps<T>) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxHeight: height, overflowY: 'auto' }}>
        <Table<T>
          columns={columns}
          dataSource={data}
          pagination={{ pageSize }}
          scroll={{ x: scrollX, y: height - 100 }} // ✅ must set both x & y
          sticky={stickyHeader ? { offsetHeader: 0 } : false}
          bordered={false}
          style={{
            backgroundColor: '#fff',
          }}
        />
      </div>
    </div>
  );
};

export default AntTable;
