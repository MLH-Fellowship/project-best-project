import { ReactComponent as LinkedinFooterIcon } from "../assets/LinkedinFooterIcon.svg";
import { ReactComponent as GithubFooterIcon } from "../assets/GithubFooterIcon.svg";

const Footer = () => {
  return (
    <footer className="footer footer-center items-center p-4 bg-base-300 text-base">
      <div className="flex flex-row justify-center gap-3">
        <a href="https://github.com/jiechenmc">
          <GithubFooterIcon className="dark:fill-white rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 hover:bg-gray-300 dark:hover:bg-gray-30" />
        </a>
        <a href="https://www.linkedin.com/in/jiechen-sbu/">
          <LinkedinFooterIcon className="dark:fill-white rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 hover:bg-gray-300 dark:hover:bg-gray-30" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
