'use client';
import Image from 'next/image';

import React from 'react';
import {
  DashboardOutlined,
  BankOutlined,
  ApartmentOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  BookOutlined,
  GiftOutlined,
  FileTextOutlined,
  HistoryOutlined,
  BarChartOutlined,
  DollarOutlined,
  IdcardOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, ConfigProvider } from 'antd';
import AntHeader from './AntHeader';

const { Header, Content, Footer, Sider } = Layout;


const itemLabels = [
  'Dashboard',
  'Universities',
  'Departments',
  'Instructors',
  'Students',
  'Courses',
  'Coupons',
  'Invoices',
  'Transaction History',
  'Reports & Analysis',
  'Payroll',
  'Profile',
  'Settings',
];

const items = [
  DashboardOutlined,
  BankOutlined,
  ApartmentOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  BookOutlined,
  GiftOutlined,
  FileTextOutlined,
  HistoryOutlined,
  BarChartOutlined,
  DollarOutlined,
  IdcardOutlined,
  SettingOutlined,
].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon, { style: { color: '#fff' } }),
    label: <span style={{ color: '#fff' }}>{itemLabels[index]}</span>,
  }),
);

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorBgContainer = '#f5f5f5';
  const borderRadiusLG = 8;
  const [broken, setBroken] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer,
          borderRadius: borderRadiusLG,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            setBroken(broken);
          }}
          width={300}
          onCollapse={(collapsed, type) => {
            setCollapsed(collapsed);
          }}
          style={{
            height: '100vh',
            position: 'fixed',
            left: 0,
            zIndex: 999,
            backgroundColor:"#094E85"
          }}
        >
          <div className="demo-logo-vertical" style={{ 
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '15px',
          }}>

            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={250} 
              height={40} 
              style={{ objectFit: 'contain' }} 
            />
          </div>
          <div className='py-5 px-3'>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={items}
            style={{ backgroundColor: '#094E85',fontSize: '16px',fontWeight: '600' }}
            className="custom-sidebar-menu"
          />
          </div>
        </Sider>
        <Layout style={{ 
          marginLeft: broken ? 0 : (collapsed ? 0 : 200),
          minHeight: '100vh',
          transition: 'margin-left 0.2s',
        }}>
          <AntHeader />
          <Content style={{ 
            height: 'calc(100vh - 112px)',
            overflow: 'auto'
          }}>
            <div
              style={{
                padding: 24,
                height: '100%',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ 
            textAlign: 'center',
            padding: '16px',
            background: 'transparent'
          }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;