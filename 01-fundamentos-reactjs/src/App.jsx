import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import './global.css'
import style from './App.module.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
          <Sidebar />
        <main>
          <Post
            name="Amauri"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, molestias sequi. Explicabo voluptate a sint iusto esse et dolores dicta facere. Impedit nulla vitae dignissimos voluptates officia accusantium voluptatem itaque?"
          />
        </main>
      </div>
    </div>
  )
}
