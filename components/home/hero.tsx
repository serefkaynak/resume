import Link from "next/link";
import {AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"

export default function Hero() {
  return (
    <div className=" px-8 my-8 text-zinc-700 dark:text-zinc-400" data-testid="hero-div">
      <h1 className=" px-4 dark:text-zinc-100 font-semibold text-5xl text-black" data-testid="hero-h1">
        Şeref Kaynak
      </h1>
      <p className="py-4 px-4 " data-testid="hero-blurb">
          As a Frontend Developer, I have gained experience in various projects using JavaScript, React, Redux, HTML, and CSS technologies. I also supplement my backend knowledge with Spring Boot, Java, and SQL.
      </p>
      <div className="py-4 px-4 gap-2 flex flex-row text-2xl " data-testid="social-links">
        <Link className="dark:hover:text-zinc-200 hover:text-zinc-600" href={"https://github.com/serefkaynak"} data-testid="github-link">
          <AiOutlineGithub />
        </Link>
        <Link className="dark:hover:text-zinc-200 hover:text-zinc-600" href={"https://www.linkedin.com/in/serefkaynak/"} data-testid="linkedin-link">
          <AiFillLinkedin />
        </Link>
      </div>
    </div>
  )
}