'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import { Layout, Menu, ConfigProvider, MenuProps } from 'antd';
import { usePathname } from 'next/navigation';
import AntHeader from './AntHeader';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorBgContainer = '#f5f5f5';
  const borderRadiusLG = 8;
  const [broken, setBroken] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const pathname = usePathname();

  // Sidebar items
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <DashboardOutlined style={{ color: '#fff' }} />,
      label: <Link href="/" style={{ color: '#fff' }}>Dashboard</Link>,
    },
    {
      key: '2',
      icon: <BankOutlined style={{ color: '#fff' }} />,
      label: <Link href="/universities" style={{ color: '#fff' }}>Universities</Link>,
    },
    {
      key: '3',
      icon: <ApartmentOutlined style={{ color: '#fff' }} />,
      label: <Link href="/departments" style={{ color: '#fff' }}>Departments</Link>,
    },
    {
      key: '4',
      icon: <TeamOutlined style={{ color: '#fff' }} />,
      label: <Link href="/instructors" style={{ color: '#fff' }}>Instructors</Link>,
    },
    {
      key: '5',
      icon: <UsergroupAddOutlined style={{ color: '#fff' }} />,
      label: <Link href="/students" style={{ color: '#fff' }}>Students</Link>,
    },
    {
      key: '6',
      icon: <BookOutlined style={{ color: '#fff' }} />,
      label: <Link href="/courses" style={{ color: '#fff' }}>Courses</Link>,
    },
    {
      key: '7',
      icon: <GiftOutlined style={{ color: '#fff' }} />,
      label: <Link href="/coupons" style={{ color: '#fff' }}>Coupons</Link>,
    },
    {
      key: '8',
      icon: <FileTextOutlined style={{ color: '#fff' }} />,
      label: <Link href="/invoices" style={{ color: '#fff' }}>Invoices</Link>,
    },
    {
      key: '9',
      icon: <HistoryOutlined style={{ color: '#fff' }} />,
      label: <Link href="/transaction-history" style={{ color: '#fff' }}>Transaction History</Link>,
    },
    {
      key: '10',
      icon: <BarChartOutlined style={{ color: '#fff' }} />,
      label: <Link href="/reports" style={{ color: '#fff' }}>Reports & Analysis</Link>,
    },
    {
      key: '11',
      icon: <DollarOutlined style={{ color: '#fff' }} />,
      label: <Link href="/payroll" style={{ color: '#fff' }}>Payroll</Link>,
    },
    {
      key: '12',
      icon: <IdcardOutlined style={{ color: '#fff' }} />,
      label: <Link href="/profile" style={{ color: '#fff' }}>Profile</Link>,
    },
    {
      key: '13',
      icon: <SettingOutlined style={{ color: '#fff' }} />,
      label: <Link href="/settings" style={{ color: '#fff' }}>Settings</Link>,
    },
  ];

  // map routes (or route prefixes) to menu keys
  const routeKeyMap: Record<string, string> = {
    '/dashboard': '1',
    '/universities': '2',
    '/departments': '3',
    '/instructors': '4',
    '/students': '5',
    '/courses': '6',
    '/coupons': '7',
    '/invoices': '8',
    '/transaction-history': '9',
    '/reports': '10',
    '/payroll': '11',
    '/profile': '12',
    '/settings': '13',
  };

  const selectedKeys = React.useMemo(() => {
    if (!pathname) return ['1'];
    if (routeKeyMap[pathname]) return [routeKeyMap[pathname]];
    const matched = Object.keys(routeKeyMap).find((route) => pathname.startsWith(route + '/') || pathname === route);
    return matched ? [routeKeyMap[matched]] : ['1'];
  }, [pathname]);

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
          onBreakpoint={(broken) => setBroken(broken)}
          onCollapse={(collapsed) => setCollapsed(collapsed)}
          width={260}
          style={{
            height: '100vh',
            position: 'fixed',
            left: 0,
            zIndex: 999,
            backgroundColor: '#094E85',
          }}
        >
          <div
            style={{
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={240}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className="py-5 px-3">
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={selectedKeys}
              items={items}
              style={{
                backgroundColor: '#094E85',
                fontSize: '15px',
                fontWeight: 600,
              }}
            />
          </div>
        </Sider>

        <Layout
          style={{
            marginLeft: broken ? 0 : collapsed ? 0 : 260,
            minHeight: '100vh',
            transition: 'margin-left 0.2s ease-in-out',
          }}
        >
          <AntHeader />

          <Content
            style={{
              height: 'calc(100vh - 112px)',
              overflow: 'auto',
              background: colorBgContainer,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>

          <Footer
            style={{
              textAlign: 'center',
              padding: '16px',
              background: 'transparent',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
