import Image from "next/image";
import SocialLinks from "./socialLinks";
import { AiOutlineMail } from "react-icons/ai";
import PageHead from "../layout/pageHead";

const aboutProps = {
  headline: "Şeref Kaynak",
  text: " As a passionate Frontend Developer with a penchant for crafting engaging user experiences, I have honed my skills through an array of projects leveraging JavaScript, React, and Redux. With a keen eye for design and functionality, I meticulously meld HTML and CSS to produce websites that are not only aesthetically pleasing but also intuitively navigable.\n" +
      "\n" +
      "But my expertise doesn't end at the client side. Complementing my frontend proficiencies, I possess a robust backend foundation with Spring Boot, Java, and SQL. This full-stack knowledge enables me to understand and contribute to the entire spectrum of web development, ensuring seamless, efficient, and comprehensive solutions for any given challenge.\n" +
      "\n" +
      "Driven by an insatiable desire to learn and grow, I continuously seek out new technologies and methodologies that push the boundaries of what’s possible in web development. I invite you to browse through my portfolio, where each project is a testament to my dedication to excellence and an unwavering commitment to user-centric design.\n" +
      "\n" +
      "Let’s build the future of the web, one line of code at a time. "
}

export default function About() {
  return (
    <div data-testid="about-div">
      <Image className="rotate-3 rounded-lg ml-12 my-8 lg:my-20" data-testid="about-img" height={250} width={250} src="/images/img.png" alt="about me"/>
      <PageHead {...aboutProps} />
      <SocialLinks />
      <div className="border-t dark:border-zinc-700 flex flex-row items-center mb-12 mx-3 text-zinc-700 dark:text-zinc-400"  data-testid="email-link">
        <div className="flex flex-row items-center ">
        <div className="text-xl py-4 mr-2 ">
        <AiOutlineMail />
        </div>
        <p className="">serefkynk@gmail.com</p>
        </div>
      </div>
    </div>
  )
}