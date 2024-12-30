import React from "react"
import Hero from "./hero"
import ImageGallery from "./imageGallery"
import Posts from "./posts"
import SignUp from "./signUp"
import WorkHistory from "./workHistory"
import {projectsArr} from "@/components/projects";
import ProjectTile from "@/components/projects/projectTile";
import Image from "next/image";

export default function HomeComponent() {


    return (
        <div data-testid="home-component" className={'ml-4 mr-2'}>
            <Hero/>
            {/*<ImageGallery />*/}
            {projectsArr.map(i => (
                <div key={i.id} className={'flex flex-col justify-start items-center'}>
                    <div className={'flex flex-row justify-start items-center gap-2'}>
                    <div className=" rounded-full overflow-hidden flex justify-center items-center p-1 shadow w-14 h-14">
                        <Image
                            className=" rounded-full overflow-hidden w-12 h-12"
                            data-testid="project-img"
                            src={i.imgSrc}
                            width={50}
                            height={50}
                            alt={"Project preview"}
                            title={i.title}/>
                    </div>
                    <h2 className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-100 font-semibold py-4">{i.title}</h2>
                    </div>
                    <p className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-400">{i.blurb.slice(0, 150)}...</p>
                </div>
            ))}
            <div className="lg:flex flex-row lg:my-16 my-8 justify-start">
                <Posts/>
                <div className="flex flex-col lg:my-16 my-8">
                    <SignUp/>
                    <WorkHistory/>
                </div>
            </div>
        </div>
    )
}