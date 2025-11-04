// components/cards/CouponsCard.tsx
import Card from '../../common/Card';
import { FileText } from 'lucide-react';
import { Progress } from 'antd';

interface Coupon {
  name: string;
  used: number;
  total: number;
}

export default function CouponsCard() {
  const coupon: Coupon[] = [{
    name: 'WINTER20',
    used: 12,
    total: 20,
  }
    ,
  {
    name: 'SUMMER15',
    used: 8,
    total: 15,
  }
    ,
  {
    name: 'FALL10',
    used: 5,
    total: 10,
  }
  ];

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Coupons</h3>
        <div className="flex items-center space-x-2 text-md text-gray-500">
          <button className='text-[#094E85] decoration-underline'>
            View All
          </button>
        </div>
      </div>

        <div>
        {coupon.map((inv) => (
          <div key={inv.name} className="flex items-center justify-between py-4 border-b border-gray-200">
            <div className='flex flex-row gap-3 items-start'>
              <div className='bg-blue-100 rounded-lg items-center justify-center p-3'>
                <FileText className="w-3 h-3 text-gray-400" />
              </div>
              <div>
                <p className="text-md font-medium text-gray-800 mb-2">{inv.name}</p>
                <Progress percent={50} status="active" />
                <p className="text-sm text-gray-800 my-2">Coupon Redeemed : {inv.used} / {inv.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}