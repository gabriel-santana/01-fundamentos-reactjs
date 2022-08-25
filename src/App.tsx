
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Lorem Ipsum'},
      { type: 'paragraph', content: 'is simply dummy text of the printing and typesetting industry.'},
      { type: 'link', content: 'typesetting industry.'},
    ],
    publishedAt: new Date('2022-08-24 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Lorem Ipsum'},
      { type: 'paragraph', content: 'is simply dummy text of the printing and typesetting industry.'},
      { type: 'link', content: 'typesetting industry.'},
    ],
    publishedAt: new Date('2022-08-22 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}


