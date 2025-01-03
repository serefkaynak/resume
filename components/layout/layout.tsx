import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import StickyHeader from "./stickyHeader";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <div className=" w-screen min-h-screen bg-gray-50 dark:bg-black  items-center flex flex-col"/* " overflow-hidden flex flex-col items-center w-screen bg-gray-50" */ data-testid="layout-div">
      <StickyHeader
          offset={offset}
          showMenu={showMenu}
          setShowMenu={() => setShowMenu(!showMenu)}
      />
      {showMenu &&
          <Menu
              setShowMenu={(arg) => setShowMenu(arg)}
          />
      }
      <div className={showMenu ? "text-black dark:bg-zinc-900 blur saturate-50 w-screen body-width bg-white overflow-hidden" : " dark:bg-zinc-900 w-screen body-width  bg-white"} data-testid="main-div">
        {children}
      </div>
      <Footer />
    </div>
  )
}