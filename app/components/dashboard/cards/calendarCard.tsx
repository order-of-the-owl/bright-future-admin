// components/cards/ScheduleCard.tsx
import Card from '../../common/Card';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface ScheduleEvent {
  date: string;
  event: string;
  time: string;
  location?: string;
  participants?: number;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export default function ScheduleCard() {
  const events: ScheduleEvent[] = [
    { 
      date: '2025-11-02', 
      event: 'Midterm Review Session', 
      time: '14:00 - 16:00',
      location: 'Main Auditorium',
      participants: 45,
      priority: 'high',
      category: 'Academic'
    },
    { 
      date: '2025-11-05', 
      event: 'Project Submission Deadline', 
      time: '23:59',
      location: 'Online Portal',
      participants: 28,
      priority: 'high',
      category: 'Submission'
    },
    { 
      date: '2025-11-10', 
      event: 'Team Presentation: Final Project', 
      time: '10:00 - 12:00',
      location: 'Room 301-B',
      participants: 6,
      priority: 'medium',
      category: 'Presentation'
    },
    { 
      date: '2025-11-15', 
      event: 'Guest Lecture: Advanced Topics', 
      time: '15:00 - 17:00',
      location: 'Conference Hall',
      participants: 60,
      priority: 'medium',
      category: 'Lecture'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-blue-50 text-blue-700';
      case 'Submission': return 'bg-purple-50 text-purple-700';
      case 'Presentation': return 'bg-orange-50 text-orange-700';
      case 'Lecture': return 'bg-cyan-50 text-cyan-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const isUpcoming = (date: string) => {
    const eventDate = new Date(date);
    const today = new Date();
    return eventDate >= today;
  };

  const upcomingEvents = events.filter(event => isUpcoming(event.date));
  const pastEvents = events.filter(event => !isUpcoming(event.date));

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Academic Schedule</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-800">Upcoming Events</h4>
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            {upcomingEvents.length} events
          </span>
        </div>
        
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index} 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200 bg-white"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(event.priority)}`}>
                    {event.priority.charAt(0).toUpperCase() + event.priority.slice(1)}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      weekday: 'short'
                    })}
                  </div>
                </div>
              </div>

              <h5 className="font-semibold text-gray-900 mb-3 text-base">{event.event}</h5>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                {event.participants && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.participants} participants</span>
                  </div>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Due in {Math.ceil((new Date(event.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Events</h4>
          <div className="space-y-3">
            {pastEvents.map((event, index) => (
              <div key={index} className="p-3 border border-gray-100 rounded-lg bg-gray-50 opacity-75">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-medium text-gray-700 line-through">{event.event}</span>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Total tracked events: {events.length}</span>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Export Calendar
          </button>
        </div>
      </div>
    </Card>
  );
}