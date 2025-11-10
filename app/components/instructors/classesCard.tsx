export interface classesData {
    timing: string,
    class: string,
    section: string,
    cancelled?: boolean
}

const ClassesCard = () => {
    const classesData: classesData[] = [
        {
            timing: "8:00 AM - 9:00 AM",
            class: "Class 4",
            section: "A",
            cancelled: true
        },
        {
            timing: "9:00 AM - 10:00 AM",
            class: "Class 5",
            section: " B",
            cancelled: true
        },
        {
            timing: "10:00 AM - 11:00 AM",
            class: "Class 4",
            section: "C",
            cancelled: false
        },
        {
            timing: "11:00 AM - 12:00 PM",
            class: "Class 4",
            section: "D",
            cancelled: false
        }
    ]

    return (
        <div className="py-3">
            <div className="px-3 flex justify-between gap-1 border-b border-gray-300 pb-1 items-center">
                <h1 className="text-md font-bold">Today's Class</h1>
                <p className="text-xs text-gray-400">16 May 2024</p>
            </div>

            {classesData.length > 0 ? (
                <div className="px-3 mt-3 w-full flex flex-wrap gap-3">
                    {classesData.map((item, index) => (
                        <div
                            key={index}
                            className="p-3 bg-gray-100 rounded-lg flex-1 min-w-[150px] md:max-w-[230px]"
                        >
                            <div className={`flex justify-center rounded-md p-1 md:w-[165px] mb-3 ${item.cancelled ? 'bg-red-500' : 'bg-blue-900'}`}>
                                <p className="text-xs md:text-sm text-gray-100  font-semibold">{item.timing}</p>
                            </div>
                            <h2 className="text-md">{item.class}, {item.section}</h2>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="mt-3 text-gray-500">No classes scheduled for today.</p>
            )}
        </div>

    )
}

export default ClassesCard
