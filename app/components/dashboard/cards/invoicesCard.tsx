// components/cards/InvoicesCard.tsx
import Image from 'next/image';
import Card from '../../common/Card';
import { FileText, Building2, Calendar, DollarSign, Clock, CheckCircle2, AlertCircle, File } from 'lucide-react';

interface Invoice {
  id: string;
  name: string;
  university: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  department: string;
}

export default function InvoicesCard() {
  const invoice: Invoice[] = [{
    id: 'INV-2024-001',
    name: 'Ali Khan',
    university: 'FAST-NUCES',
    amount: 12500,
    status: 'pending',
    department: 'Computer Science'
  },
  {
    id: 'INV-2024-002',
    name: 'Sara Ahmed',
    university: 'LUMS',
    amount: 15000,
    status: 'paid',
    department: 'Business Administration'
  },
  {
    id: 'INV-2024-003',
    name: 'Omar Farooq',
    university: 'NUST',
    amount: 13000,
    status: 'overdue',
    department: 'Electrical Engineering'
  }
  ];


  return (
    <Card className="h-full">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">Recent Invoices</h3>
        <div className="flex items-center space-x-2 text-md text-gray-500">
          <button className='text-[#094E85] decoration-underline'>
            View All
          </button>
        </div>
      </div>

      <div>
        {invoice.map((inv) => (
          <div key={inv.id} className="flex items-center justify-between py-4 border-b border-gray-200">
            <div className='flex flex-row gap-3 items-start'>
              <div className='bg-blue-100 rounded-lg items-center justify-center p-3'>
                <FileText className="w-3 h-3 text-gray-400" />
              </div>
              <div>
                <p className="text-md font-medium text-gray-800">{inv.name}</p>
                <p className="text-sm text-gray-500">{inv.university}</p>
                <p className="text-sm text-gray-400"># {inv.id}</p>
              </div>
            </div>
            <div className='hidden md:flex flex-col justify-end items-end '>
              <div className='flex'>
                {inv.status === 'paid' && (
                  <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    Paid
                  </span>
                )}
                {inv.status === 'pending' && (
                  <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Pending
                  </span>
                )}
                {inv.status === 'overdue' && (
                  <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">
                    Overdue
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500 mt-2">{inv.department}</p>
              </div>
              <div>
                <p className="text-md font-bold text-gray-900 mt-1">₹ {inv.amount.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}