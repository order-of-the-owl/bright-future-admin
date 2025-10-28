import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Image from 'next/image';

interface DropdownMenuProps {
  imageSrc?: string;
  imageAlt?: string;
  label: string;
  menuItems: MenuProps['items'];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ imageSrc, imageAlt, label, menuItems }) => (
  <Dropdown menu={{ items: menuItems }}
  trigger={['click']}>
    <a onClick={e => e.preventDefault()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      <Space align="center" style={{ color: "black", gap: '12px' }}>
        {imageSrc && (
          <div style={{ width: '32px', height: '32px', position: 'relative' }}>
            <Image 
              src={imageSrc} 
              alt={imageAlt || 'dropdown image'} 
              fill
              style={{ 
                borderRadius: '50%',
                objectFit: 'cover'
              }} 
            />
          </div>
        )}
        <span style={{ fontSize: '14px', fontWeight: 500 }}>{label}</span>
        <DownOutlined style={{ fontSize: '12px' }} />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;
