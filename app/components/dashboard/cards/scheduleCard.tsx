// components/cards/LiveClassesCard.tsx
import Card from '../../common/Card';
import { Video, Clock, Users, BookOpen, MapPin, Calendar, Bell, Play, Download, Share2, GraduationCapIcon } from 'lucide-react';

interface LiveClass {
  id: string;
  name: string;
  time: string;
}

export default function LiveClassesCard() {
  const liveClass: LiveClass[] = [{
    id: 'MATH-101-001',
    name: 'Advanced Calculus',
    time: '10:00 AM',
  }
    ,
  {
    id: 'PHY-201-002',
    name: 'Quantum Mechanics',
    time: '1:00 PM',
  },
  {
    id: 'CS-301-003',
    name: 'Data Structures',
    time: '3:00 PM',
  }
  ];


  return (
    <Card className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Schedule Live Classes</h2>
        </div>
        <div className="flex flex-col gap-4">
          {liveClass.map((live) => (
            <div key={live.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <div className='flex flex-row gap-3'>
                  <GraduationCapIcon className="w-6 h-6 text-blue-500 mb-2" />
                  <h3 className="text-lg font-medium text-gray-900">{live.name}</h3>                
                </div>
                <span className="text-sm text-gray-700 md:ml-8">{live.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Card>
  );
}