import PageHead from "../layout/pageHead";
import SpeakingSection from "./section";

const pageHeadProps = {
  headline: "Speaking",
  text: ""
}

export const conferencesArr = [
  {
    key: 0,
    date: "19 Feb 2023",
    title: "Lorem Ipsum",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
]
export const podcastsArr = [
  {
    key: 0,
    date: "19 Feb 2023",
    title: "Lorem Ipsum",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
]

export default function Speaking() {
  return (
    <div  data-testid="speaking-div" >
      <PageHead {...pageHeadProps} />
      {/*<div data-testid="conferences-div" className="my-16">*/}
      {/*  <h2 className="font-semibold m-4">Conferences</h2>*/}
      {/*  {conferencesArr.map(i => (*/}
      {/*    <div key={i.key}>*/}
      {/*      <SpeakingSection {...i} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      {/*<div data-testid="podcasts-div" className="my-16">*/}
      {/*  <h2 className="font-semibold m-4">Podcasts</h2>*/}
      {/*  {podcastsArr.map(i => (*/}
      {/*    <div key={i.key}>*/}
      {/*      <SpeakingSection {...i} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  )
}