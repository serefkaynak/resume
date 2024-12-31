import PageHead from "../layout/pageHead";
import ProjectTile from "./projectTile";

const headInfo = {
  headline: "My Projects",
  text: "Here are some of the projects I have worked on. I have worked on a lot of projects, but these are the ones I am most proud of. I worked with React, Typescript, and Tailwind CSS."
}

export const projectsArr: {
  id: number
  imgSrc: string
  title: string
  blurb: string
  link: string
}[] = [
  {
    id: 0,
    imgSrc: '/images/project.png',
    title: "Onpro Project",
    blurb: "Onpro is a access control management platform that allows you to manage access to your data. I worked on the frontend part of the project. That part was built with React, Redux, and Typescript. The backend part was built with Node.js, and PosgreSQL.",
    link: "www.onpro.com"
  },
  {
    id: 1,
    imgSrc: "https://tenis.io/images/logo.svg",
    title: "Tenis.io",
    blurb: "Tenis.io is a social network for people who play tennis. It was built with React,Next.js, Typescript, and Tailwind CSS. I worked on the project management and frontend part of the project.",
    link: "https://tenis.io/"
  },
  {
    id: 2,
    imgSrc: '/images/project.png',
    title: "Bounce Action",
    blurb: "Bounce Action is a manage your ball project.",
    link: "https://bounce-action.vercel.app/"
  }
]


export default function Projects() {
  return (
    <div data-testid="projects-index">
      <PageHead {...headInfo} />
      <div className="flex flex-row flex-wrap">
        {projectsArr.map((i) => (
          <div key={i.id} className="md:w-1/2 px-2">
            <ProjectTile {...i} />
          </div>
        ))}
      </div>
    </div>
  )
}