import PageHead from "../layout/pageHead"

const pageHeadProps = {
  headline: "Tools I Use",
  text: "I use these tools in my day to day work",
}

export const workstationArr = [
  {
    key: 0,
    date: "19 Feb 2023",
    title: "Macbook Pro",
    body: "Macbook Pro M2 Max 32 GB Ram, 1 TB SSD",
  },
  {
    key: 1,
    date: "19 Feb 2023",
    title: "Lenovo ThinkVision 40' Monitor",
    body: "Lenovo ThinkVision 40' Monitor P40w-20, 5120 x 2160 WUHD, 75 Hz.",
  },
  {
    key: 2,
    date: "19 Feb 2023",
    title: "Logitech MX Master 3",
    body: "Logitech MX Master 3, Wireless Mouse",
  },
  {
    key: 3,
    date: "19 Feb 2023",
    title: "Rainy 75 Keyboard",
    body: "Rainy 75 White Keyboard",
  },
]

export const devToolsArr = [
  {
    key: 0,
    date: "19 Feb 2023",
    title: "WebStorm",
    body: "JetBrains WebStorm",
  },
  {
    key: 1,
    date: "19 Feb 2023",
    title: "Visual Studio Code",
    body: "Sometimes I use Microsoft Visual Studio Code",
  },
  {
    key: 2,
    date: "19 Feb 2023",
    title: "IntelliJ IDEA",
    body: "JetBrains IntelliJ IDEA",
  },
]

export default function UsesIndex() {
  return (
    <div data-testid="uses-index" className="dark:text-zinc-400 text-zinc-700">
      <PageHead {...pageHeadProps} />
      <div data-testid="workstation-div" className="my-16 ">
        <h2 className="m-4 font-semibold dark:text-zinc-100">Workstation</h2>
        {workstationArr.map(i => (
          <div className="p-4" key={i.key}>
            <h3 className="font-semibold text-zinc-900 py-2 dark:text-zinc-100">{i.title}</h3>
            <p className=" text-sm">{i.body.slice(0, 90)}.</p>
          </div>
        ))}
      </div>
      <div data-testid="devtools-div" className="my-16">
          <h2 className="m-4 font-semibold text-zinc-900 dark:text-zinc-100">Dev Tools</h2>
          {devToolsArr.map(i => (
            <div className="p-4" key={i.key}>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 py-2">{i.title}</h3>
              <p className=" text-sm">{i.body.slice(0, 100)}.</p>
            </div>
          ))}
      </div>
    </div>
  )
}