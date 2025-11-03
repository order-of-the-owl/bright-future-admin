// components/cards/CouponsCard.tsx
import Card from '../../common/Card';
import { Tag, Users, Calendar, TrendingUp, Copy, CheckCircle } from 'lucide-react';

interface Coupon {
  name: string;
  used: number;
  total: number;
  discount: string;
  type: 'percentage' | 'fixed';
  minPurchase: number;
  validUntil: string;
  customers: number;
  status: 'active' | 'expiring' | 'inactive';
  revenue: number;
}

export default function CouponsCard() {
  const coupon: Coupon = {
    name: 'WINTER20',
    used: 12,
    total: 20,
    discount: '20%',
    type: 'percentage',
    minPurchase: 50,
    validUntil: '2025-12-31',
    customers: 8,
    status: 'active',
    revenue: 1247
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'expiring': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'inactive': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'percentage' 
      ? 'bg-blue-50 text-blue-700 border-blue-200'
      : 'bg-purple-50 text-purple-700 border-purple-200';
  };

  const usagePercentage = (coupon.used / coupon.total) * 100;
  const daysRemaining = Math.ceil((new Date(coupon.validUntil).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Coupon Performance</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Tag className="w-4 h-4" />
          <span>Active Campaign</span>
        </div>
      </div>

      {/* Coupon Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-white px-3 py-2 rounded-lg border border-blue-300">
              <span className="text-xl font-bold text-blue-700">{coupon.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(coupon.status)}`}>
                {coupon.status.charAt(0).toUpperCase() + coupon.status.slice(1)}
              </span>
              <span className={`px-2 py-1 text-xs font-medium rounded border ${getTypeColor(coupon.type)}`}>
                {coupon.type === 'percentage' ? 'Percentage' : 'Fixed Amount'}
              </span>
            </div>
          </div>
          <button className="flex items-center space-x-1 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Copy className="w-4 h-4" />
            <span className="text-sm font-medium">Copy Code</span>
          </button>
        </div>

        <div className="text-center mb-4">
          <span className="text-3xl font-bold text-gray-900">{coupon.discount}</span>
          <span className="text-lg text-gray-600 ml-1">OFF</span>
          <p className="text-sm text-gray-500 mt-1">Minimum purchase: ${coupon.minPurchase}</p>
        </div>
      </div>

      {/* Usage Statistics */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Usage Statistics</h4>
        
        <div className="space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-gray-700">Redemption Progress</span>
              <span className="text-gray-900">{coupon.used}/{coupon.total} ({usagePercentage.toFixed(0)}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${usagePercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Unique Customers</span>
              </div>
              <div className="text-xl font-bold text-gray-900">{coupon.customers}</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Revenue</span>
              </div>
              <div className="text-xl font-bold text-gray-900">${coupon.revenue}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Validity & Actions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Valid until</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-orange-900">
              {new Date(coupon.validUntil).toLocaleDateString()}
            </div>
            <div className="text-xs text-orange-700">
              {daysRemaining > 0 ? `${daysRemaining} days remaining` : 'Expired'}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 mb-3">Performance Metrics</h5>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Redemption Rate</span>
              <span className="font-medium text-gray-900">{(coupon.used / coupon.customers * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Average Order Value</span>
              <span className="font-medium text-gray-900">${(coupon.revenue / coupon.used).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Success Rate</span>
              <span className="font-medium text-green-600">{(usagePercentage).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
            <span>Campaign Active</span>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            View Full Report
          </button>
        </div>
      </div>
    </Card>
  );
}