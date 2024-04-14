import Link from "next/link"
import {AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from "react-icons/ai"

const linksArr: {
  id: string
  href: string
  title: string
  icon: React.ReactNode
}[] = [
  {
    id: "github-link",
    href: "https://github.com/serefkaynak",
    title: "GitHub",
    icon: <AiOutlineGithub />
  },
  {
    id: "linkedin-link",
    href: "https://www.linkedin.com/in/serefkaynak/",
    title: "LinkedIn",
    icon: <AiFillLinkedin />

  },
]

export default function SocialLinks() {
  return (
    <div data-testid="social-links" className="text-zinc-700 dark:text-zinc-400">
      {linksArr.map(i => (
        <div className="flex flex-row items-center " key={i.id} data-testid={i.id}>
          <div className="text-2xl p-2">
            {i.icon}
          </div>
          <Link href={i.href} className="">{i.title}</Link>
        </div>
      ))}
    </div>
  )
}