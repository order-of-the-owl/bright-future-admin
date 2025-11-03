// components/cards/LiveClassesCard.tsx
import Card from '../../common/Card';
import { Video, Clock, Users, BookOpen, MapPin, Calendar, Bell, Play, Download, Share2 } from 'lucide-react';

interface LiveClass {
  id: string;
  name: string;
  courseCode: string;
  time: string;
  duration: string;
  instructor: string;
  participants: number;
  capacity: number;
  status: 'live' | 'upcoming' | 'completed';
  subject: string;
  room: string;
  materials: number;
  recordingAvailable: boolean;
}

export default function LiveClassesCard() {
  const liveClass: LiveClass = {
    id: 'MATH-101-001',
    name: 'Advanced Calculus',
    courseCode: 'MATH 101',
    time: '10:00 AM',
    duration: '90 minutes',
    instructor: 'Dr. Sarah Chen',
    participants: 24,
    capacity: 30,
    status: 'upcoming',
    subject: 'Mathematics',
    room: 'Virtual Room A',
    materials: 5,
    recordingAvailable: true
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-100 text-red-800 border-red-200';
      case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live': return <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />;
      case 'upcoming': return <Clock className="w-4 h-4" />;
      case 'completed': return <Video className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getTimeUntilClass = () => {
    const now = new Date();
    const classTime = new Date();
    const [time, modifier] = liveClass.time.split(' ');
    let [hours, minutes] = time.split(':');
    
    if (modifier === 'PM' && hours !== '12') hours = String(parseInt(hours) + 12);
    if (modifier === 'AM' && hours === '12') hours = '00';
    
    classTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const diffMs = classTime.getTime() - now.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    
    if (diffMins < 0) return 'Started';
    if (diffMins < 60) return `In ${diffMins}m`;
    if (diffMins < 1440) return `In ${Math.floor(diffMins / 60)}h ${diffMins % 60}m`;
    return `In ${Math.floor(diffMins / 1440)}d`;
  };

  const participationRate = (liveClass.participants / liveClass.capacity) * 100;

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Class Details</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Video className="w-4 h-4" />
          <span>{liveClass.id}</span>
        </div>
      </div>

      {/* Class Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg border border-blue-300">
              <Video className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{liveClass.name}</h4>
              <p className="text-sm text-gray-600">{liveClass.courseCode}</p>
            </div>
          </div>
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border ${getStatusColor(liveClass.status)}`}>
            {getStatusIcon(liveClass.status)}
            <span className="text-xs font-medium capitalize ml-1">{liveClass.status}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{liveClass.time}</div>
            <div className="text-sm text-gray-600">Start Time</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">{liveClass.duration}</div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">{getTimeUntilClass()}</div>
            <div className="text-sm text-gray-600">Starts</div>
          </div>
        </div>
      </div>

      {/* Class Information */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Class Information</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Instructor</span>
            </div>
            <span className="text-sm text-gray-900 font-semibold">{liveClass.instructor}</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Subject</span>
            </div>
            <span className="text-sm text-gray-900 font-semibold">{liveClass.subject}</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Virtual Room</span>
            </div>
            <span className="text-sm text-gray-900 font-semibold">{liveClass.room}</span>
          </div>
        </div>
      </div>

      {/* Participation Metrics */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Participation</h4>
        
        <div className="space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-gray-700">Class Capacity</span>
              <span className="text-gray-900">{liveClass.participants}/{liveClass.capacity} ({participationRate.toFixed(0)}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${participationRate}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Enrolled</span>
              </div>
              <div className="text-xl font-bold text-blue-900">{liveClass.participants}</div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Download className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Materials</span>
              </div>
              <div className="text-xl font-bold text-purple-900">{liveClass.materials}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Class Details & Actions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Next Session</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-orange-900">
              {new Date().toLocaleDateString()}
            </div>
            <div className="text-xs text-orange-700">
              {liveClass.time} • {liveClass.duration}
            </div>
          </div>
        </div>

        {/* Recording Status */}
        {liveClass.recordingAvailable && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Video className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Recording Available</span>
              </div>
              <button className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700">
                <Play className="w-4 h-4" />
                <span>Watch</span>
              </button>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 mb-3">Quick Actions</h5>
          <div className="flex space-x-2">
            <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm text-blue-600 font-medium border border-blue-200 rounded hover:bg-blue-50">
              <Bell className="w-4 h-4" />
              <span>Remind</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm text-gray-600 font-medium border border-gray-200 rounded hover:bg-gray-50">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm text-gray-600 font-medium border border-gray-200 rounded hover:bg-gray-50">
              <Download className="w-4 h-4" />
              <span>Materials</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <Video className="w-4 h-4 mr-1 text-blue-500" />
            <span>Virtual Classroom Ready</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Join Class
          </button>
        </div>
      </div>
    </Card>
  );
}