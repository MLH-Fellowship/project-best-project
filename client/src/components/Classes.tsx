import ClassEntries from "./subcomponents/ClassEntries";
import CLASSES from "../data/CLASSES";
import { v4 as uuidv4 } from "uuid";
import SBULogo from "../assets/sbu.webp";

interface ClassElement {
  courseCode: string;
  courseName: string;
  instructor: string;
  completed: boolean;
}

const Classes = () => {
  return (
    <div id="education">
      <h1 className="relative text-2xl text-base-content font-bold text-center my-3">
        Education
      </h1>

      <div className="flex justify-center mb-6 gap-2">
        <img className="" src={SBULogo} width="96px" />
        <div className="whitespace-nowrap ">
          <p className="font-bold w-36 ">Stony Brook University</p>
          <p className="font-bold w-36 ">B.S. — Computer Science</p>
          <small className="font-bold ">Expected Graduation: May 2025</small>
          <br />
          <small className="font-bold">GPA: 3.49</small>
        </div>
      </div>

      <div className="flex justify-center ml-3">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-base-200 md:text-base-content">
                  Course Code
                </th>
                <th>Course Name</th>
                <th>Instructor</th>
              </tr>
            </thead>
            <tbody>
              {[...CLASSES]?.reverse().map((project: ClassElement) => (
                <ClassEntries
                  key={uuidv4()}
                  courseCode={project?.courseCode}
                  courseName={project?.courseName}
                  instructor={project?.instructor}
                  completed={project?.completed}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Classes;
