function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Project = {
  title: string;
  description: string;
  link?: string;
  github?: string;
  lastWorkedOn?: string; // YYYY or YYYY-MM, preserving the known precision.
};

const projects: Project[] = [
  {
    title: "Sophros",
    lastWorkedOn: "2026-04",
    description:
      "Purdue ECE Senior Design project (Software Track): A React Native app for healthy and easy meal planning.",
    github: "https://github.com/emersonmaddock/sophros",
  },
  {
    title: "Wave LFP Lever Decoding",
    lastWorkedOn: "2026-05",
    description: "Machine learning models and workflows for decoding mouse lever press behavior from LFP signals.",
    github: "https://github.com/etanase/wave-lfp-lever-decoding",
  },
  {
    title: "Deaf-i",
    lastWorkedOn: "2024",
    description:
      "Deaf-i is a nonprofit for cochlear implant awareness and education.",
    link: "https://www.deaf-i.org",
    github: "https://github.com/etanase/deaf-i",
  },
  {
    title: "Meepo Skateboard ARGB",
    lastWorkedOn: "2024-11",
    description:
      "Custom PCB for ARGB control and power conversion on the Meepo V3S electric skateboard.",
    github: "https://github.com/etanase/board-lights",
  },
  {
    title: "ECELabs",
    lastWorkedOn: "2026",
    description:
      "Digital design and SystemVerilog educational platform for Purdue ECE students (Only accessible to Purdue ECE students).",
    link: "https://alpha.ecelabs.io",
  },
  {
    title: "PointOrchard",
    lastWorkedOn: "2025-09",
    description:
      "A credit card bonus tracking site that hit 2,000+ visitors in under a month.",
    link: "https://www.pointorchard.com",
  },
  {
    title: "România Unită",
    lastWorkedOn: "2025-05",
    description:
      "A website for Romanian citizens abroad to find nearby polling stations and learn about the candidates.",
    link: "https://ro-election.vercel.app/",
  },
  {
    title: "dotfiles",
    lastWorkedOn: "2023-09",
    description: "My personal dotfiles for Linux.",
    github: "https://github.com/etanase/dotfiles",
  },
  {
    title: "linesim",
    lastWorkedOn: "2023-02",
    description:
      "A robot pathfinding simulator written in Python for Purdue's Intro to Engineering courses.",
    link: "https://pypi.org/project/linesim/",
    github: "https://github.com/etanase/linesim",
  },
  {
    title: "BTESW Discord bot",
    lastWorkedOn: "2021",
    description:
      "A Discord bot for the Minecraft Build The Earth Southwest team's Discord server.",
    github: "https://github.com/etanase/locations-bot",
  },
];

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <div className="flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {project.title}
            {project.lastWorkedOn && (
              <>
                {" "}
                <span className="whitespace-nowrap text-neutral-600 dark:text-neutral-400">
                  · <time dateTime={project.lastWorkedOn}>{project.lastWorkedOn.slice(0, 4)}</time>
                </span>
              </>
            )}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <ul className="font-sm mt-1 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            {project.link && (
              <li key={project.link}>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.link}
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">link</p>
                </a>
              </li>
            )}
            {project.github && (
              <li key={project.github}>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.github}
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">github</p>
                </a>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
