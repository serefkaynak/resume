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
                <div key={i.id} className={'flex flex-col justify-start items-start'}>
                    <div className={'flex flex-row justify-start gap-2'}>
                        <div
                            className=" rounded-full overflow-hidden flex justify-center items-center p-1 shadow w-10 h-12">
                            <Image
                                className=" rounded-full overflow-hidden w-8 h-8"
                                data-testid="project-img"
                                src={i.imgSrc}
                                width={50}
                                height={50}
                                alt={"Project preview"}
                                title={i.title}/>
                        </div>
                        <div className={'flex flex-col justify-start items-start'}>
                            <h2 className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-100 font-semibold py-4">{i.title}</h2>
                            <p className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400">{i.blurb.slice(0, 150)}...</p>
                        </div>
                    </div>
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