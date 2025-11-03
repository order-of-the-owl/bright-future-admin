// components/cards/RecentActivityCard.tsx
import Card from '../../common/Card';
import { Activity, Clock, User, Building2, Tag, FileText, Settings, Bell, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ActivityItem {
  id: string;
  action: string;
  detail: string;
  time: string;
  timestamp: string;
  type: 'success' | 'info' | 'warning' | 'error';
  category: 'user' | 'university' | 'coupon' | 'system' | 'invoice';
  user: string;
  avatar?: string;
  changes?: number;
}

export default function RecentActivityCard() {
  const activity: ActivityItem = {
    id: 'ACT-2024-001',
    action: 'University added to system',
    detail: 'FAST-NUCES University has been successfully registered with complete campus details and program offerings',
    time: '10:15 AM',
    timestamp: '2024-11-20T10:15:00',
    type: 'success',
    category: 'university',
    user: 'Admin User',
    avatar: 'AU',
    changes: 12
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-green-500 bg-green-50';
      case 'info': return 'border-blue-500 bg-blue-50';
      case 'warning': return 'border-yellow-500 bg-yellow-50';
      case 'error': return 'border-red-500 bg-red-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'info': return <Info className="w-4 h-4 text-blue-600" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'error': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'user': return <User className="w-4 h-4" />;
      case 'university': return <Building2 className="w-4 h-4" />;
      case 'coupon': return <Tag className="w-4 h-4" />;
      case 'invoice': return <FileText className="w-4 h-4" />;
      case 'system': return <Settings className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'user': return 'bg-purple-100 text-purple-800';
      case 'university': return 'bg-blue-100 text-blue-800';
      case 'coupon': return 'bg-green-100 text-green-800';
      case 'invoice': return 'bg-orange-100 text-orange-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const timeAgo = (timestamp: string) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - activityTime.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Activity Details</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Activity className="w-4 h-4" />
          <span>{activity.id}</span>
        </div>
      </div>

      {/* Activity Header */}
      <div className={`border-l-4 rounded-r-lg p-4 mb-6 ${getTypeColor(activity.type)}`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg border border-gray-200">
              {getCategoryIcon(activity.category)}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-lg">{activity.action}</h4>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(activity.category)}`}>
                  {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                </span>
                <span className={`flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full border ${
                  activity.type === 'success' ? 'bg-green-100 text-green-800 border-green-200' :
                  activity.type === 'info' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                  activity.type === 'warning' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                  'bg-red-100 text-red-800 border-red-200'
                }`}>
                  {getTypeIcon(activity.type)}
                  <span className="capitalize">{activity.type}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-3">{activity.detail}</p>
        
        {activity.changes && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-medium">{activity.changes} changes made</span>
          </div>
        )}
      </div>

      {/* Activity Metadata */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Activity Information</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Initiated By</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-white">{activity.avatar}</span>
              </div>
              <span className="text-sm text-gray-900 font-semibold">{activity.user}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Timestamp</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-900">
                {new Date(activity.timestamp).toLocaleDateString()}
              </div>
              <div className="text-xs text-gray-600">
                {activity.time} • {timeAgo(activity.timestamp)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact & Changes */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Impact Summary</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Universities</span>
            </div>
            <div className="text-xl font-bold text-blue-900">1 Added</div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <User className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Programs</span>
            </div>
            <div className="text-xl font-bold text-green-900">15+ Updated</div>
          </div>
        </div>
      </div>

      {/* Additional Context */}
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 mb-3">Activity Context</h5>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Session Duration</span>
              <span className="font-medium text-gray-900">15 minutes</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">IP Address</span>
              <span className="font-medium text-gray-900">192.168.1.100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Browser</span>
              <span className="font-medium text-gray-900">Chrome 119</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">Notifications Sent</span>
          </div>
          <p className="text-sm text-yellow-700 mt-1">
            System notifications have been sent to relevant departments about this update.
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <Activity className="w-4 h-4 mr-1 text-blue-500" />
            <span>Activity Logged</span>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 font-medium border border-blue-200 rounded hover:bg-blue-50">
              View Details
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
              Audit Trail
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}