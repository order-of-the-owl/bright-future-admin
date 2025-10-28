'use client';
import React from 'react';
import { Space } from 'antd';
import DropdownMenu from './components/common/DropdownMenu';
import Cards from './components/dashboard/cards';
import { MoneyCollectOutlined } from '@ant-design/icons';

const Page = () => {
  const timeMenu = [
    { key: '1', label: 'Last 7 days' },
    { key: '2', label: 'Last 30 days' },
    { key: '3', label: 'Last 6 months' },
  ];

  const exportMenu = [
    { key: '1', label: 'Export as CSV' },
    { key: '2', label: 'Export as PDF' },
  ];

  const moreMenu = [
    { key: '1', label: 'Settings' },
    { key: '2', label: 'Help' },
  ];

  const cardDetails = [
  {
    type: 'Total Revenue',
    value: '1,234',
    icon: <MoneyCollectOutlined style={{ fontSize: 28, color: '#1890ff' }} />,
    trend: 'up' as const,
    trendValue: '12.5%',
  },
  {
    type: 'Total Expenses',
    value: '567',
    icon: <MoneyCollectOutlined style={{ fontSize: 28, color: '#52c41a' }} />,
    trend: 'down' as const,
    trendValue: '8.3%',
  },
  {
    type: 'Net Profit',
    value: '667',
    icon: <MoneyCollectOutlined style={{ fontSize: 28, color: '#faad14' }} />,
    trend: 'up' as const,
    trendValue: '5.4%',
  },
  {
    type: 'Cash Flow',
    value: '890',
    icon: <MoneyCollectOutlined style={{ fontSize: 28, color: '#eb2f96' }} />,
    trend: 'down' as const,
    trendValue: '3.1%',
  },
];


  return (
    <div className="p-4">
      <div className="flex w-full flex-col md:flex-row md:justify-between items-center mb-6 gap-3">
        <h1 className="text-lg font-bold">Overview</h1>

        <Space>
          <DropdownMenu label="Last 7 days" menuItems={timeMenu} />
          <DropdownMenu label="Export" menuItems={exportMenu} />
          <DropdownMenu label="More" menuItems={moreMenu} />
        </Space>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cardDetails.map((detail, index) => (
          <Cards key={index} details={detail} />
        ))}
      </div>
    </div>
  );
};

export default Page;
