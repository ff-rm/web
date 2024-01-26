type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "federicoragessi@disroot.org",
  title: "Federico Ragessi",
  profile: "/perfil.jpg",
  description:
    "Artista multimedial, investigador y docente",
  socials: [
    {
      label: "Bandcamp",
      link: "https://federicoragessi.bandcamp.com/",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/fede.franco.r",
    },
    {
      label: "YouTube",
      link: "https://youtube.com/ffragessi",
    },
    {
      label: "Github",
      link: "https://github.com/ff-rm",
    },
  ],
};

export default presentation;
