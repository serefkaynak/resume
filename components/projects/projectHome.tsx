import Image from "next/image";
import React from "react";
interface ProjectHomeProps {
  id: number
  imgSrc: string
  title: string
  blurb: string
  link: string
}

export default function ProjectHome(props: ProjectHomeProps) {
  const { imgSrc, title, blurb } = props

  return (
      <div className={'flex flex-row justify-start gap-2'}>
          <div
              className=" rounded-full overflow-hidden justify-center items-center p-1 shadow w-10 h-10">
              <Image
                  className=" rounded-full overflow-hidden w-8 h-8"
                  data-testid="project-img"
                  src={imgSrc}
                  width={50}
                  height={50}
                  alt={"Project preview"}
                  title={title}
              />
          </div>
          <div className={'flex flex-col justify-start items-start gap-1'}>
              <h2 className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-100 font-semibold">{title}</h2>
              <p className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">{blurb.slice(0, 150)}...</p>
          </div>
      </div>
  )
}