import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
     <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/diego3g.png" />
        <div className={styles.authorInfo}>
          <strong>Diego Fernades</strong>
          <span>Web Developer</span>
        </div>
      </div>
      <time title='7 de Julho às 08h' dateTime='2022-07-07 08:00:00'>Publicado há 1h</time>
     </header>

     <div className={styles.content}>
      <p>Lorem Ipsum </p>
      <p>is simply dummy text of the printing and typesetting industry.</p>
      <p><a href='#'>typesetting industry.</a></p>
      <p>
        <a href='#'>#is</a>{' '}
        <a href='#'>#simply</a>
      </p>
     </div>

     <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea
        placeholder='Deixe um comentário'
      />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
     </form>
    </article>
  ) 
}