import { Icon } from "@iconify/react";

const width = 24;
const height = 24;

const ICONS: { [key: string]: React.ReactElement } = {
  react: <Icon icon="logos:react" width={width} height={height} />,
  playwright: <Icon icon="logos:playwright" width={width} height={height} />,
  typescript: (
    <Icon icon="logos:typescript-icon" width={width} height={height} />
  ),
  python: <Icon icon="logos:python" width={width} height={height} />,
  firebase: <Icon icon="logos:firebase" width={width} height={height} />,
  mysql: <Icon icon="logos:mysql-icon" width={width} height={height} />,
  flask: <Icon icon="file-icons:flask" width={width} height={height} />,
  docker: <Icon icon="logos:docker-icon" width={width} height={height} />,
  bash: <Icon icon="logos:bash-icon" width={width} height={height} />,
  fastapi: (
    <Icon
      icon="simple-icons:fastapi"
      color="#089484"
      width={width}
      height={height}
    />
  ),
  mongodb: (
    <Icon icon="vscode-icons:file-type-mongo" width={width} height={height} />
  ),
  digitalocean: (
    <Icon
      icon="simple-icons:digitalocean"
      color="#0069ff"
      width={width}
      height={height}
    />
  ),
  heroku: <Icon icon="logos:heroku-icon" width={width} height={height} />,
  tailwindcss: (
    <Icon icon="logos:tailwindcss-icon" width={width} height={height} />
  ),
  nginx: <Icon icon="logos:nginx" width={width} height={height} />,
};

export default ICONS;
