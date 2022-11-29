import { Header } from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from './components/Sidebar';

import "./globo.css";

import style from "./App.module.css";

interface Content{
    content: string;
}

//AUTHOR:{avatar_url:"", name:"",role:""}
//pubisheAt: Date
//content:String


const post =[
  {
    id:1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/107520530?v=4',
      name:'Leonardo Alves',
      role:"Web Develop"
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋'},

      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type:'link', content: 'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2022-11-22 22:20:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpj125wL2YqjacddALD0Tsu3mjtO1hobKqau-JtxJTg8iWHJIAgye0CgojegmxBSIhcM&usqp=CAU',
      name:'Hanna Moon',
      role:"Engineering Software"
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋'},

      {type:'paragraph', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima sed in, obcaecati vitae tempore, itaque doloremque ad, facere incidunt vel asperiores sapiente voluptatum illo aliquam? Ducimus facere tempora nihil.'},

      {type:'link', content: 'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2022-11-20 22:15:00'),
  },{
    id:3,
    author:{
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpj125wL2YqjacddALD0Tsu3mjtO1hobKqau-JtxJTg8iWHJIAgye0CgojegmxBSIhcM&usqp=CAU',
      name:'Hanna Moon',
      role:"Engineering Software"
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋'},

      {type:'paragraph', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima sed in, obcaecati vitae tempore, itaque doloremque ad, facere incidunt vel asperiores sapiente voluptatum illo aliquam? Ducimus facere tempora nihil.'},

      {type:'link', content: 'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2022-11-20 22:15:00'),
  }
]

function App() { 
  return (
    
    <div>
      <Header />
    
    <div className={style.wrapper}>
      <Sidebar />
      <main>
      {post.map(post =>{
        return (<Post 
          key={post.id}
          author={post.author}
          content={post.content as[]}
          publishedAt={post.publishedAt}
        />)
      })}
      </main>
    </div>
    </div>
  )
}

export default App
