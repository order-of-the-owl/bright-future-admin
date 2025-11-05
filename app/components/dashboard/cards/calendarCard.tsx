// components/cards/ScheduleCard.tsx
'use client';
import Card from '../../common/Card';

interface ScheduleEvent {
  date: string;
  event: string;
  time: string;
  category: string;
}

export default function ScheduleCard() {
  const events: ScheduleEvent[] = [
    { 
      date: '2025-11-02', 
      event: 'Midterm Review Session', 
      time: '14:00 - 16:00',
      category: 'Academic'
    },
    { 
      date: '2025-11-05', 
      event: 'Project Submission Deadline', 
      time: '23:59',
      category: 'Submission'
    },
    { 
      date: '2025-11-10', 
      event: 'Team Presentation: Final Project', 
      time: '10:00 - 12:00',
      category: 'Presentation'
    },
  ];

  return (
    <Card className="h-full">
     
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-gray-800">Schedules</h2>
        </div>
        <div className="flex flex-col gap-4">
          {events.map((event, index) => (
            <div key={index} className="p-3 bg-blue-50 rounded-lg">
              <h3 className="text-md font-medium text-gray-900">{event.event}</h3>
              <p className="text-sm text-gray-700">Time: {event.time}</p>
            </div>
          ))}
        </div>
      </div>  
    </Card>
  );
}