// components/cards/InvoicesCard.tsx
import Card from '../../common/Card';
import { FileText, Building2, Calendar, DollarSign, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface Invoice {
  id: string;
  name: string;
  university: string;
  progress: number;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  issueDate: string;
  items: number;
  department: string;
}

export default function InvoicesCard() {
  const invoice: Invoice = {
    id: 'INV-2024-001',
    name: 'Ali Khan',
    university: 'FAST-NUCES',
    progress: 75,
    amount: 12500,
    dueDate: '2024-12-15',
    status: 'pending',
    issueDate: '2024-11-20',
    items: 8,
    department: 'Computer Science'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle2 className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'overdue': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const daysUntilDue = Math.ceil((new Date(invoice.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const paidAmount = (invoice.amount * invoice.progress) / 100;
  const remainingAmount = invoice.amount - paidAmount;

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Invoice Details</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <FileText className="w-4 h-4" />
          <span>{invoice.id}</span>
        </div>
      </div>

      {/* Invoice Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-white px-3 py-2 rounded-lg border border-blue-300">
              <span className="text-lg font-bold text-blue-700">{invoice.id}</span>
            </div>
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border ${getStatusColor(invoice.status)}`}>
              {getStatusIcon(invoice.status)}
              <span className="text-xs font-medium capitalize">{invoice.status}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">${invoice.amount.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Amount</div>
          </div>
        </div>
      </div>

      {/* Client Information */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Client Information</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">Student Name</span>
            <span className="text-sm text-gray-900 font-semibold">{invoice.name}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">University</span>
            </div>
            <span className="text-sm text-gray-900 font-semibold">{invoice.university}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">Department</span>
            <span className="text-sm text-gray-900 font-semibold">{invoice.department}</span>
          </div>
        </div>
      </div>

      {/* Payment Progress */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Payment Progress</h4>
        
        <div className="space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-gray-700">Payment Completion</span>
              <span className="text-gray-900">{invoice.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${invoice.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Amount Breakdown */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Paid</span>
              </div>
              <div className="text-lg font-bold text-green-900">${paidAmount.toLocaleString()}</div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Remaining</span>
              </div>
              <div className="text-lg font-bold text-blue-900">${remainingAmount.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline & Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Due Date</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-orange-900">
              {new Date(invoice.dueDate).toLocaleDateString()}
            </div>
            <div className="text-xs text-orange-700">
              {daysUntilDue > 0 ? `${daysUntilDue} days remaining` : 'Overdue'}
            </div>
          </div>
        </div>

        {/* Invoice Metrics */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 mb-3">Invoice Details</h5>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Issue Date</span>
              <span className="font-medium text-gray-900">{new Date(invoice.issueDate).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Items/Charges</span>
              <span className="font-medium text-gray-900">{invoice.items} items</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Payment Status</span>
              <span className={`font-medium capitalize ${
                invoice.status === 'paid' ? 'text-green-600' : 
                invoice.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {invoice.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <FileText className="w-4 h-4 mr-1 text-blue-500" />
            <span>Invoice Active</span>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 font-medium border border-blue-200 rounded hover:bg-blue-50">
              Download
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
              Process Payment
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}