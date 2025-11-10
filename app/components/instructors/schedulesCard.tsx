'use client';
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface UpComingEvents {
    imageSrc: string;
    title: string;
    date: string;
    time: string;
    poepleImages: string[];
}

const SchedulesCard = () => {
    const borderColors: string[] = [
        'border-red-500',
        'border-green-500',
        'border-blue-500',
        'border-yellow-500',
    ];
    const UpComingEventsData: UpComingEvents[] = [
        {
            imageSrc: "/images/event1.svg",
            title: "Guest Lecture on AI",
            date: "20 May 2024",
            time: "10:00 AM - 12:00 PM",
            poepleImages: ["/images/avatar1.svg", "/images/avatar2.svg", "/images/avatar3.svg"]
        },
        {
            imageSrc: "/images/event2.svg",
            title: "Workshop on Data Science",
            date: "22 May 2024",
            time: "2:00 PM - 4:00 PM",
            poepleImages: ["/images/avatar4.svg", "/images/avatar5.svg"]
        },
        {
            imageSrc: "/images/event3.svg",
            title: "Seminar on Cybersecurity",
            date: "25 May 2024",
            time: "11:00 AM - 1:00 PM",
            poepleImages: ["/images/avatar6.svg", "/images/avatar7.svg", "/images/avatar8.svg"]
        },
        {
            imageSrc: "/images/event4.svg",
            title: "Panel Discussion on Blockchain",
            date: "28 May 2024",
            time: "3:00 PM - 5:00 PM",
            poepleImages: ["/images/avatar9.svg", "/images/avatar10.svg"]
        }
    ];
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div>
            <div className="p-3 flex justify-between gap-1 border-b border-gray-300 pb-4 items-center">
                <h1 className="text-lg font-bold">Schedules</h1>
                <button className="text-blue-900 text-md font-bold">Add New</button>
            </div>
            <div className="flex justify-center my-5">
                <Calendar onChange={onChange} value={value}
                />
            </div>
            <div className="p-3">
                <h1 className="text-lg font-bold mb-5">Upcoming Events</h1>
                <ul className="flex flex-col max-h-[360px] overflow-y-auto">
                    {UpComingEventsData.map((event, index) => (
                        <li
                            key={index}
                            className={`mx-2 flex gap-3 mb-4 justify-start px-3 py-2 border-l-[3px] shadow-sm ${borderColors[index]} rounded-sm`}
                        >
                            <img src={event.imageSrc} alt={event.title} className="w-12 h-12" />
                            <div className="flex-1 pb-2">
                                <h2 className="text-md font-semibold">{event.title}</h2>
                                <p className="text-sm text-gray-500 border-b border-gray-200">{event.date}</p>
                                <div className="flex  mt-2 justify-between items-center w-full">
                                    <h1>{event.time}</h1>
                                    <div className="flex -space-x-2">
                                        {event.poepleImages.map((imgSrc, idx) => (
                                            <img
                                                key={idx}
                                                src={imgSrc}
                                                alt={`Person ${idx + 1}`}
                                                className="w-6 h-6 rounded-full border-2 border-white"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SchedulesCard
