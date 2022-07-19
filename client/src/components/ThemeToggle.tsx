import { useEffect, useState } from "react";
import { ReactComponent as LightIcon } from "../assets/ToggleLight.svg";
import { ReactComponent as DarkIcon } from "../assets/ToggleDark.svg";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const lightTextColor = "1f2937";
    const darkTextColor = "a6adba";

    let banner: HTMLImageElement = document.getElementById(
      "GithubStats"
    ) as HTMLImageElement;

    let typewriter: HTMLImageElement = document.getElementById(
      "AnimatedIntroduction"
    ) as HTMLImageElement;

    const statsLight = `https://github-readme-stats.vercel.app/api/top-langs/?username=jiechenmc&layout=compact&theme=light&hide_border=true&text_color=${lightTextColor}&title_color=${lightTextColor}&hide_title=true`;
    const statsDark = `https://github-readme-stats.vercel.app/api/top-langs/?username=jiechenmc&layout=compact&theme=dark&hide_border=true&bg_color=2a303c&text_color=${darkTextColor}&title_color=${darkTextColor}&hide_title=true`;

    const typewriterLight = `https://readme-typing-svg.herokuapp.com?font=ui-sans-serif&duration=3500&color=${lightTextColor}&center=true&vCenter=true&lines=Hi+I+am+Jie+Chen!;My+interests+are+...;Data+Engineering+%F0%9F%93%8A!;Production+Engineering+%F0%9F%92%BF!;and+Software+Engineering+%F0%9F%92%BB!+`;
    const typewriterDark = `https://readme-typing-svg.herokuapp.com?font=ui-sans-serif&duration=3500&color=${darkTextColor}&center=true&vCenter=true&lines=Hi+I+am+Jie+Chen!;My+interests+are+...;Data+Engineering+%F0%9F%93%8A!;Production+Engineering+%F0%9F%92%BF!;and+Software+Engineering+%F0%9F%92%BB!+`;

    if (isDarkTheme) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.dataset.theme = "light";
      if (banner && typewriter) {
        banner.src = statsLight;
        typewriter.src = typewriterLight;
      }
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.dataset.theme = "dark";
      if (banner && typewriter) {
        banner.src = statsDark;
        typewriter.src = typewriterDark;
      }
    }
  }, [isDarkTheme]);

  return (
    <div className="text-center">
      <label className="swap swap-rotate">
        <input type="checkbox" onChange={toggleTheme} />
        <LightIcon className="swap-on fill-black" />
        <DarkIcon className="swap-off fill-white" />
      </label>
    </div>
  );
};

export default ThemeToggle;
