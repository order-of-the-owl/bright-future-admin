import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export interface CardDetail {
  type: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down';
  trendValue?: string | number;
}

const Cards = ({ details }: { details: CardDetail }) => {
  const { type, value, icon, trend, trendValue } = details;

  return (
    <div className="bg-white shadow-sm rounded-2xl p-5 flex flex-col gap-2 border border-gray-100">
      <div className="flex justify-between items-center">
        <p className="text-gray-600 font-medium">{type}</p>
        {icon && <div>{icon}</div>}
      </div>

      <h2 className="text-2xl font-bold text-gray-900">KD {value}</h2>

      <div className="flex items-center gap-2 text-sm">
        {trend === 'up' ? (
          <ArrowUpOutlined style={{ color: '#52c41a' }} />
        ) : (
          <ArrowDownOutlined style={{ color: '#f5222d' }} />
        )}
        <span className={trend === 'up' ? 'text-green-600' : 'text-red-600'}>
          {trendValue}
        </span>
        <span className="text-gray-500">
          {trend === 'up' ? 'increase' : 'decrease'} from last month
        </span>
      </div>
    </div>
  );
};

export default Cards;
