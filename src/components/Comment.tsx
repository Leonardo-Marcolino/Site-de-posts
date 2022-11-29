import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import style from './Comment.module.css'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content,onDeleteComment}: CommentProps){
    const [likeCaount, setLikeCount] = useState(0);

    function handleDeleteComment(){

        onDeleteComment(content);
    }
    function handleLikeCount(){
        setLikeCount(likeCaount + 2)
    }
    return(

        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn7xuMVmx_U2YSpBMEgTa8vHhO7wBFAd9dA&usqp=CAU" 
            alt=""/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>

                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Leonardo Alves</strong>
                            <time title="11 de maio ás" dateTime="2022-05-11 12:40:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentásrio'>
                            <Trash size={24} />
                        </button>
                    </header>

                <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCaount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}