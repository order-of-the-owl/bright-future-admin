'use client';

import DropdownMenu from './components/common/DropdownMenu';
import { cardDetails, timeMenu, exportMenu, moreMenu } from '@/app/utils/constants/cardsData';
import Cards from './components/dashboard/cards';
import { Tag, Space, Spin } from 'antd';
import type { TableColumnsType } from 'antd';
import { lazyLoadComponent } from './utils/helpers/lazyLoadComponent';
import { useInViewRender } from './utils/hooks/useInViewRender'; // 👈 import hook

interface DataType {
  key: React.Key;
  name: string;
  university: string;
  department: string;
  course: string;
  code: string;
  subscription: string;
  mode: string;
  addons: string;
  status: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'University', dataIndex: 'university', key: 'university' },
  { title: 'Department', dataIndex: 'department', key: 'department' },
  { title: 'Course', dataIndex: 'course', key: 'course' },
  { title: 'Code', dataIndex: 'code', key: 'code' },
  { title: 'Subscription', dataIndex: 'subscription', key: 'subscription' },
  { title: 'Mode', dataIndex: 'mode', key: 'mode' },
  { title: 'Add-ons', dataIndex: 'addons', key: 'addons' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const color =
        status === 'Active' ? 'green' : status === 'Pending' ? 'orange' : 'red';
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space>
        <a>Delete</a>
      </Space>
    ),
  },
];

const fakeData: DataType[] = Array.from({ length: 10 }).map((_, i) => ({
  key: i,
  name: `Student ${i + 1}`,
  university: 'Stanford University',
  department: 'Computer Science',
  course: `Full Stack Dev ${i + 1}`,
  code: `CS${100 + i}`,
  subscription: i % 2 === 0 ? 'Premium' : 'Basic',
  mode: i % 2 === 0 ? 'Online' : 'In-Person',
  addons: i % 3 === 0 ? 'Cloud Storage' : 'Course Notes',
  status: i % 2 === 0 ? 'Active' : i % 3 === 0 ? 'Pending' : 'Expired',
}));

const ChartCard = lazyLoadComponent(() => import('./components/dashboard/chartCard'), 'chart');
const PieChartInFlexbox = lazyLoadComponent(() => import('./components/dashboard/pieChart'), 'chart');
const AntTable = lazyLoadComponent(() => import('./components/common/AntTable'), 'table');

const Page = () => {
  const [tableRef, isTableVisible] = useInViewRender(0.2); // 👈 use hook

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

      <div className="grid sm:grid-cols-1 xl:grid-cols-2 my-8 rounded-lg gap-6">
        <ChartCard />
        <PieChartInFlexbox />
      </div>

      <div
        ref={tableRef}
        className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-3"
      >
        <h1 className="text-lg font-bold">Recently Joined</h1>
        <Space>
          <DropdownMenu label="Last 7 days" menuItems={timeMenu} />
        </Space>
      </div>

      <div>
        {isTableVisible ? (
          <AntTable<DataType> columns={columns} data={fakeData} scrollX={1500} pageSize={5} />
        ) : (
          <div className="">
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
