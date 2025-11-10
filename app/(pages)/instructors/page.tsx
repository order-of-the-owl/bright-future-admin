import ClassesCard from "@/app/components/instructors/classesCard";
import ProfileCard from "@/app/components/instructors/profileCard";
import SyllabusCard from "@/app/components/instructors/syllabusCard";
import SchedulesCard from "@/app/components/instructors/schedulesCard";

export default function InstructorsPage() {

  return (

    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12 sm:col-span-6 lg:col-span-5 row-span-2">
        <ProfileCard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-2 rounded-sm bg-white shadow-sm">
        <SyllabusCard />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4 row-span-9 lg:col-start-9 rounded-sm bg-white shadow-sm">
        <SchedulesCard />
      </div>


      <div className="col-span-12 sm:col-span-8 rounded-sm bg-white shadow-sm min-h-[150px]">
        <ClassesCard />
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-4  md:col-start-5 md:row-start-5 bg-yellow-200">7</div>

      <div className="col-span-12 sm:col-span-6 md:col-span-4  md:col-start-5 md:row-start-7 bg-orange-200">8</div>

      <div className="col-span-12 sm:col-span-6 md:col-span-4  md:col-start-1 md:row-start-5 bg-pink-200">9</div>
    </div>


  );
}
