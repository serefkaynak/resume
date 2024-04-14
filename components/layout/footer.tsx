import Link from "next/link"

const footerLinks: {
  title: string
  id: string
  link: string
}[] = [
  {
    title: "About",
    id: "about-link",
    link: "/about"
  },
  {
    title: "Projects",
    id: "projects-link",
    link: "/projects"
  },
  {
    title: "Speaking",
    id: "speaking-link",
    link: "/speaking"
  },
  {
    title: "Uses",
    id: "uses-link",
    link: "/uses"
  }
    
]

export default function Footer() {
  return (
    <div className="w-screen body-width text-sm flex lg:flex-row flex-col justify-start items-center h-32  border-t bg-white dark:bg-zinc-900 dark:border-zinc-700" data-testid="footer-div">
      <div className="ml-8 flex flex-row gap-2 text-gray-400" data-testid="footer-links">
        {footerLinks.map(i => (
          <Link className="hover:text-emerald-500 p-1 dark:text-zinc-300" href={i.link} key={i.id} data-testid={i.id}>
            {i.title}
          </Link>
        ))}
      </div>
      <p className="font-light text-zinc-400 dark:text-zinc-500 ml-auto mr-8" data-testid="copyright-info">
        Şeref Kaynak 2024
      </p>
    </div>
  )
}