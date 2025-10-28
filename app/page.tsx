'use client';

import { Space, Spin } from 'antd';
import dynamic from 'next/dynamic';
import DropdownMenu from './components/common/DropdownMenu';
import { cardDetails, timeMenu, exportMenu, moreMenu } from '@/app/utils/constants/cardsData';
import Cards from './components/dashboard/cards';

const ChartCard = dynamic(() => import('./components/dashboard/chartCard'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-64">
      <Spin size="large" tip="Loading chart..." />
    </div>
  ),
});

const PieChartInFlexbox = dynamic(() => import('./components/dashboard/pieChart'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-64">
      <Spin size="large" tip="Loading chart..." />
    </div>
  ),
});

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

      <div className="grid sm:grid-cols-1 xl:grid-cols-2 mt-4 rounded-lg gap-6">
        <ChartCard />
        <PieChartInFlexbox />
      </div>
    </div>
  );
};

export default Page;
