import useIcon from "../../hooks/useIcon";
import { ReactComponent as GithubProjectIcon } from "../../assets/GithubProjectIcon.svg";

interface ProjectEntriesProps {
  title: string;
  date: string;
  description: string;
  URL: string;
  status: string;
  stack: string;
}

const ProjectEntries = ({
  title,
  date,
  description,
  URL,
  status,
  stack,
}: ProjectEntriesProps) => {
  const statusStyles: { [key: string]: string } = {
    complete: "border-emerald-200",
    incomplete: "border-amber-200",
  };

  const handleOnClick = () => {
    window.open(URL, "_self");
  };

  const icons = stack.split(",").map((e) => useIcon(e.trim()));

  return (
    <div className="flex justify-center mt-2 mx-1">
      <div
        className={`flex max-w-sm min-w-sm mb-2 border-2 rounded-lg shadow-lg ${
          statusStyles[status] ?? "border-red-500"
        }`}
      >
        <div className="card w-full">
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <button
                className="btn ml-auto border-0 bg-white hover:bg-gray-300 dark:hover:bg-gray-300 dark:bg-base-100 text-xl"
                onClick={handleOnClick}
              >
                <div className="badge badge-md mr-1 capitalize">{date}</div>
                <GithubProjectIcon className="dark:fill-white light:fill-black" />
              </button>
            </h2>
            <p>{description}</p>
            <div className="divider mb-1">Tech Stack</div>
            <div className="flex gap-1 mb-1 justify-center">{icons}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEntries;
