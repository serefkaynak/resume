import React from "react"
import Hero from "./hero"
import ImageGallery from "./imageGallery"
import Posts from "./posts"
import SignUp from "./signUp"
import WorkHistory from "./workHistory"

export default function HomeComponent() {
  

  return (
    <div data-testid="home-component" className={'ml-4 mr-2'}>
      <Hero />
      {/*<ImageGallery />*/}
      <div className="lg:flex flex-row lg:my-16 my-8">
      <Posts />
      <div className="flex flex-col lg:my-16 my-8">
      <SignUp />
      <WorkHistory />
      </div>
      </div>
    </div>
  )
}