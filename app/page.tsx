'use client';
import React from 'react';
import { Space } from 'antd';
import DropdownMenu from './components/common/DropdownMenu';
import Cards from './components/dashboard/cards';
import { cardDetails,timeMenu,exportMenu,moreMenu } from '@/app/utils/constants/cardsData';

const Page = () => {
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
