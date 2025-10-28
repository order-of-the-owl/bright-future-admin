'use client';
import React from 'react';
import { Result, Button, Space } from 'antd';
import { ReloadOutlined, HomeOutlined } from '@ant-design/icons';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Space>
            <Button 
              type="primary" 
              icon={<ReloadOutlined />} 
              onClick={() => reset()}
            >
              Try Again
            </Button>
            <Button 
              icon={<HomeOutlined />}
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </Space>
        }
      />
      
      {/* Error details - only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <div 
          style={{
            position: 'fixed',
            bottom: 20,
            left: 20,
            right: 20,
            backgroundColor: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxHeight: '200px',
            overflow: 'auto',
            fontSize: '12px',
            border: '1px solid #ffccc7',
          }}
        >
          <strong>Error Details (Development Only):</strong>
          <pre style={{ margin: '8px 0 0 0', whiteSpace: 'pre-wrap' }}>
            {error.message}
            {error.stack && `\n\nStack:\n${error.stack}`}
            {error.digest && `\n\nDigest: ${error.digest}`}
          </pre>
        </div>
      )}
    </div>
  );
};

export default GlobalError;