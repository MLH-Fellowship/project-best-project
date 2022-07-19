interface ClassEntriesProps {
  courseCode: string;
  courseName: string;
  instructor: string;
  completed: boolean;
}

const ClassEntries = ({
  courseCode,
  courseName,
  instructor,
  completed,
}: ClassEntriesProps) => {
  return (
    <tr className={`${completed ? "text-success" : "text-warning"}`}>
      <td>{courseCode}</td>
      <td>{courseName}</td>
      <td>{instructor}</td>
    </tr>
  );
};

export default ClassEntries;
