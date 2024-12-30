import React from "react"
import Hero from "./hero"
//import ImageGallery from "./imageGallery"
import Posts from "./posts"
import SignUp from "./signUp"
import WorkHistory from "./workHistory"
import {projectsArr} from "@/components/projects";
import ProjectHome from "@/components/projects/projectHome";

export default function HomeComponent() {


    return (
        <div data-testid="home-component" className={'ml-4 mr-2'}>
            <Hero/>
            {/*<ImageGallery />*/}
            <div className={'ml-4 mr-2'}>
            <h2 className="mt-4 mb-2 font-semibold dark:text-zinc-100">Projects</h2>
            {projectsArr.map(i => (
                <div key={i.id} className={'flex flex-col justify-start items-start gap-2 mb-4'}>
                    <ProjectHome {...i}/>
                </div>
            ))}
            </div>
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