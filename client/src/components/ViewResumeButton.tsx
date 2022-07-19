import { ReactComponent as ResumeIcon } from "../assets/ResumeIcon.svg";

const ViewResumeButton = () => {
  return (
    <a
      className="btn btn-accent"
      href="https://drive.google.com/file/d/1YYvgQczc_2N1tn6oSFrAqZYatgVpykkL/view"
    >
      <ResumeIcon />
    </a>
  );
};

export default ViewResumeButton;
