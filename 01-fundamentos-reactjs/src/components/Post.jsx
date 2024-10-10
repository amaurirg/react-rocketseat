import {format, formatDistanceToNow} from 'date-fns'
import { pt, ptBR } from 'date-fns/locale'
import style from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'


export function Post({author, publishedAt, content}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>

            <div className={style.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type ==='link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
