'use client';
import React from 'react';
import { Layout, Input } from 'antd';
import type { MenuProps } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import DropdownMenu from './DropdownMenu';
import type { GetProps } from 'antd';

const { Header } = Layout;
const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

const menuItems: MenuProps['items'] = [
  { key: '1', label: 'Profile', icon: <UserOutlined /> },
  { key: '2', label: 'Settings' },
  { type: 'divider' },
  { key: '3', label: 'Logout', danger: true },
];

const onSearch: SearchProps['onSearch'] = (value) => console.log('Search:', value);


const AntHeader: React.FC = () => {
  return (
    <Header
      style={{
        height: 64,
        background: '#ffffff', // White header for contrast
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        padding: '0 24px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
      }}
    >
      <div className="w-full flex justify-between items-center h-full">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Dashboard</h1>

        <div className="flex items-center justify-center gap-3 md:gap-5">
          <div className="hidden xl:block mt-7">
            <Search
              placeholder="Search for anything"
              onSearch={onSearch}
              size="large"
              style={{ 
                width: 350,
              }}
              rootClassName="h-[40px]"
              className="custom-search"
              styles={{
                input: {
                  backgroundColor: 'white',
                }
              }}
            />
          </div>

          <button
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 border border-gray-200 shadow-sm transition-all"
            style={{ cursor: 'pointer' }}
          >
            <BellOutlined style={{ fontSize: 18, color: '#444' }} />
          </button>
            <DropdownMenu
              imageSrc="/images/avatar.jpeg"
              imageAlt="User avatar"
              label="John Doe"
              menuItems={menuItems}
            />
        </div>
      </div>
    </Header>
  );
};

export default AntHeader;
