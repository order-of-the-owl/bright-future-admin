'use client';
import React from 'react';
import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const GlobalLoading: React.FC = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
      }}
    >
      <Space direction="vertical" align="center" size="large">
        <Spin indicator={antIcon} />
        <div style={{ marginTop: 16 }}>
          <h3 style={{ color: '#1890ff', margin: 0 }}>Loading...</h3>
          <p style={{ color: '#666', margin: '8px 0 0 0' }}>
            Please wait while we load the page
          </p>
        </div>
      </Space>
    </div>
  );
};

export default GlobalLoading;