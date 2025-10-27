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
      <Space style={{color:"black"}}>
        {imageSrc && (
          <Image src={imageSrc} alt={imageAlt || 'dropdown image'} width={25} height={30} style={{ borderRadius: '50%' }} />
        )}
        {label}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;
