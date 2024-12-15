import React from "react"
import PageHead from "../layout/pageHead"
import Posts from "../home/posts"

const headInfo = {
  headline: "My posts",
  text: "Here are some of the posts I have written. I have written a lot of posts, but these are the ones I am most proud of. I have written about React, Typescript, and Tailwind CSS."
}

export default function Articles() {
  return (
    <div data-testid="articles-div">
      <PageHead {...headInfo} />
      <Posts />
    </div>
  )
}