export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "IterableStudio",
    techs: ["instalacion","robot", "CCEBA"],
    link: "poner el link",
  },
  {
    title: "Protocol.map",
    techs: ["Performance", "Danza", "Datificación"],
    link: "",
  },
  {
    title: "Mil maneras de estimular un resorte",
    techs: ["Arte Sonoro", "Instalación"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
