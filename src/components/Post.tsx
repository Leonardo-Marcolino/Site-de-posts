import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR' ;
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'

interface Author{
    name: string;
    role: string;
    avatarUrl:string;
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

interface Postprops{
    author: Author;
    publishedAt: Date;
    content: Content[];
}



export function Post({author, publishedAt, content}: Postprops){
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);
    const [newCommentText, setNewCommentsText]= useState('');

    console.log(newCommentText);
    
    const pubisheAtDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publisheDateRealitveToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix: true,

    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
    
            setComments([...comments, newCommentText]);
            setNewCommentsText('')
        }

        function headleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
            event.target.setCustomValidity('')
            setNewCommentsText(event.target.value)
            
        }
        function handNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
            event.target.setCustomValidity('Esse campo é obrigatório!')
        }

        function deleteComment(commentToDeleted: String){
            const commmentsWithoutDeletedOne = comments.filter(comment =>{
                return comment !== commentToDeleted;
            })
            alert("comentário removido")
            setComments(commmentsWithoutDeletedOne);
        }

        const isNewComentEmpty= newCommentText.length == 0;

    return(
       <article className={style.post}>
        <header>
        <div className={style.author}>
                <Avatar  src={author.avatarUrl}/>
            <div className={style.authorinfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
        </div>

        <time title={pubisheAtDateFormatted} dateTime={publishedAt.toISOString()}>
        {publisheDateRealitveToNow}
        </time>
        </header>

        <div className={style.content}>
            {content.map(line => {
                if(line.type =='paragraph'){
                    return <p key={line.content}>{line.content}</p>;
                }else if(line.type =='link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>;

                }
            })}
       
        </div>

        <form onSubmit={handleCreateNewComment} className={style.commentForm}>
            <strong>Deixe seu feedback</strong>
            
            <textarea 
            name='comments'
            value={newCommentText}
            placeholder='deixe uma comentárioa' 
            onChange={headleNewCommentChange}
            onInvalid={handNewCommentInvalid}
            required
            />

            <footer>
                <button type='submit' disabled={isNewComentEmpty}>Publicar</button>
            </footer>
        </form>

        <div className={style.commentList}>    
            {comments.map(comments => {
                return (
                <Comment 
                    key={comments}
                    content={comments} 
                    onDeleteComment={deleteComment} 
                    />)
            })}
        </div>
       </article>
    )

}

