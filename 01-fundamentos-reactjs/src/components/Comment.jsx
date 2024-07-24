import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './Comment.module.css'

export function Comment() {
    return (
        <div className={style.comment}>
            <img src="https://github.com/amaurirg.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Amauri Rossetti Giovani</strong>
                            <time title="11 de maio às 08:33h" dateTime="2024-07-09 08:33:47">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}