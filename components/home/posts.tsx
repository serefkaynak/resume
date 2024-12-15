import PostPreview from "./postPreview"

export const postsArr: {
    key: number;
    date: string;
    title: string;
    body: string;
    link: string
}[] = [
    {
        key: 0,
        date: "19 Feb 2023",
        title: "Bir Programcının 10000 Saatlik Serüveni",
        body: "Frontend geliştirme yolculuğumda 1000 saatlik bir dönemeç daha geride kaldı. Bu süreçte, React, Redux, Context API, Redux Thunk gibi yeni teknolojileri keşfettim ve gerçek dünya projelerine katkıda bulunma fırsatı elde ettim. Arkadaşlarımla birlikte sıfırdan bir projeyi hayata geçirirken, teknik becerilerimin yanı sıra takım çalışmasının dinamiklerini de öğrendim.",
        link: "https://medium.com/@serefkaynak/1500-saatlik-frontend-developer-olma-s%C3%BCrecim-2e19c2c3d875"
    },
    {
        key: 1,
        date: "18 Feb 2023",
        title: "Tinder for Tennis",
        body: "Tenis.io is a social network for people who play tennis. It was built with React,Next.js, Typescript, and Tailwind CSS. I worked on the project management and frontend part of the project.",
        link: "https://medium.com/@serefkaynak/tenis-io-ile-tinder-for-tennis-628f0810fcfe"
    },
    {
        key: 2,
        date: "17 Feb 2023",
        title: "Teknikten Sanata: Kodlamada Yaratıcılık",
        body: "Kod yazmanın, yaratıcı bir ifade aracı olduğunu kavradım. Her bir fonksiyon, bileşen ve yapılandırma, kullanıcıların hayatını kolaylaştırmak için bir araya geliyor. Kodlamada geçirdiğim binlerce saat, bu sanatı daha da anlamamı ve takdir etmemi sağladı.",
        link: ""
    },
    {
        key: 3,
        date: "16 Feb 2023",
        title: "Toplulukla Büyümek ve Paylaşmak",
        body: "Bu süreç, yazılım geliştirme topluluğu ile etkileşimlerimin ne kadar değerli olduğunu gösterdi. Her proje, her sorun, ve her çözüm, bilgi, deneyimlerimi genişletti. Ve şimdi, öğrenme serüvenimi sizlerle paylaşmaktan büyük bir mutluluk duyuyorum.",
        link: ""
    },
]




export default function Posts() {
  return (
    <div data-testid="posts-div" className="lg:w-2/3 ">
      {postsArr.map(i => (
        <div key={i.key}>
          <PostPreview post={i} />
        </div>
      ))}
    </div>
  )
}