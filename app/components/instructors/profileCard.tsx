import Image from 'next/image';

export interface InstructorsPageProps {
  id: string;
  name: string;
  department: string;
  courses: string[];
}

const ProfileCard = () => {
    const instructors: InstructorsPageProps =
  {
    id: '#T5467811',
    name: 'Dr. Alice Johnson',
    department: 'Physics',
    courses: ['1-A', '2-A'],
  };
    return (
        <div className="flex p-3 md:p-0 flex-row items-center justify-between text-white bg-[#094E85] rounded-sm h-full">
            <div className="flex flex-row  md:items-center">
                <Image
                    src="/images/avatar.jpeg"
                    alt="Instructor 1"
                    width={130}
                    height={130}
                    className=" sm:m-4 border-2 border-white rounded-sm hidden md:block"
                />
                <div className="flex flex-col justify-center  sm:text-left">
                    <p className="bg-white border border-white px-1 text-[#094E85] text-[12px] max-w-[50%] sm:max-w-[40%] rounded-sm mx-auto sm:mx-0">
                        {instructors.id}
                    </p>
                    <h1 className="text-2xl font-bold">{instructors.name}</h1>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-md text-white">
                        <p>Courses: {instructors.courses.join(', ')}</p>
                        <p>{instructors.department}</p>
                    </div>
                </div>
            </div>

            <button className="bg-[#0564b1] font-bold text-white border border-[#0564b1] rounded-md px-3 py-2 m-2 sm:m-4 hover:bg-blue-50 hover:text-[#0564b1]">
                Edit Profile
            </button>
        </div>
    )
}

export default ProfileCard
