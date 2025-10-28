
import { MoneyCollectOutlined } from '@ant-design/icons';

export const cardDetails = [
  {
    type: 'Total Revenue',
    value: '1,234',
    icon: <MoneyCollectOutlined style={{ fontSize: 28, color: '#1890ff' }} />,
    trend: 'up' as const,
    trendValue: '12.5%',
  },
  {
    type: 'Total Expenses',
    value: '567',
    icon: <MoneyCollectOutlined style={{ fontSize: 28, color: '#52c41a' }} />,
    trend: 'down' as const,
    trendValue: '8.3%',
  },
  {
    type: 'Net Profit',
    value: '667',
    icon: <MoneyCollectOutlined style={{ fontSize: 28, color: '#faad14' }} />,
    trend: 'up' as const,
    trendValue: '5.4%',
  },
  {
    type: 'Cash Flow',
    value: '890',
    icon: <MoneyCollectOutlined style={{ fontSize: 28, color: '#eb2f96' }} />,
    trend: 'down' as const,
    trendValue: '3.1%',
  },
];

export const timeMenu = [
    { key: '1', label: 'Last 7 days' },
    { key: '2', label: 'Last 30 days' },
    { key: '3', label: 'Last 6 months' },
  ];

export const exportMenu = [
    { key: '1', label: 'Export as CSV' },
    { key: '2', label: 'Export as PDF' },
  ];

export const moreMenu = [
    { key: '1', label: 'Settings' },
    { key: '2', label: 'Help' },
  ];

 
