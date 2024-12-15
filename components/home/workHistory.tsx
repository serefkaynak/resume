import Link from "next/link"
import {MdChevronRight, MdWorkOutline} from "react-icons/md"
import WorkListItem from "./workListItem"

export const workArr: {
  company: string
  position: string
  years: string
  id: string
}[] = [
  {
    company: "AE Building Technolojies",
    position: "Frontend Developer that used React, Redux, TailwindCSS, HTML, and CSS",
    years: "2022-present",
    id: "job-0"
  },
  {
    company: "AE Building Technolojies",
    position: "Business Analyst",
    years: "2022-23",
    id: "job-1"
  },
  {
    company: "Tenis.io",
    position: "Co-Founder, Project Manager",
    years: "2021-22",
    id: "job-2"
  },
  {
    company: "AE Building Technolojies",
    position: "Sales Support Engineer",
    years: "2019-21",
    id: "job-3"
  },
]

export default function WorkHistory() {
  return (
    <div className="dark:text-zinc-400 dark:border-zinc-700 flex flex-col border shadow-sm mx-1 my-4 p-4 rounded-lg" data-testid="work-history-div">
      <div className="flex flex-row items-center py-2">
        <div data-testid="work-icon" className="text-gray-400 ">
          <MdWorkOutline/>
        </div>
        <h2 className="ml-2 font-semibold dark:text-zinc-100">Work</h2>
      </div>
      <div data-testid="work-arr-div">
        {workArr.map(i => (
          <div key={i.id}>
            <WorkListItem company={i.company} position={i.position} years={i.years}/>
          </div>
        ))}
      </div>
      <Link className=" items-center justify-center rounded bg-slate-50 hover:bg-blue-100 text-center p-2 text-sm dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200" href="https://www.linkedin.com/in/serefkaynak/" data-testid="cv-link">
        More on LinkedIn
        <MdChevronRight className="inline-block ml-2" />
      </Link>
    </div>
  )
}