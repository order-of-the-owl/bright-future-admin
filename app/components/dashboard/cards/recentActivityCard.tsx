// components/cards/RecentActivityCard.tsx
import Card from '../../common/Card';
import { Steps } from 'antd';

interface ActivityItem {
  id: string;
  action: string;
  name: string;
  timestamp: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

export default function RecentActivityCard() {
  const activity: ActivityItem[] = [
    {
      id: 'ACT-2024-001',
      action: 'University added to system',
      name: 'John Doe',
      timestamp: '2024-11-20T10:15:00',
      type: 'success',
    },
    {
      id: 'ACT-2024-002',
      action: 'Admin updated credentials',
      name: 'Jane Smith',
      timestamp: '2024-11-20T12:45:00',
      type: 'info',
    },
    {
      id: 'ACT-2024-003',
      action: 'Server sync issue detected',
      name: 'System Monitor',
      timestamp: '2024-11-21T09:10:00',
      type: 'warning',
    },
    {
      id: 'ACT-2024-004',
      action: 'University removed from system',
      name: 'John Doe',
      timestamp: '2024-11-21T11:30:00',
      type: 'error',
    },
     {
      id: 'ACT-2024-003',
      action: 'Server sync issue detected',
      name: 'System Monitor',
      timestamp: '2024-11-21T09:10:00',
      type: 'warning',
    },
  ];

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">Activity Details</h3>
      </div>

      <div className="flex ml-8">
        <div className="flex-1">
          <Steps
            direction="vertical"
            progressDot
            current={-1}
            items={activity.map((item) => ({
              title: (
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold text-gray-800">{item.action}</span>
                </div>
              ),
              description: (
                <div className="text-gray-600">
                  <span className="font-medium">{item.name}</span>
                </div>
              ),
              status:
                item.type === 'success'
                  ? 'finish'
                  : item.type === 'warning'
                  ? 'process'
                  : item.type === 'error'
                  ? 'error'
                  : 'wait',
            }))}
          />
        </div>
      </div>
    </Card>
  );
}
