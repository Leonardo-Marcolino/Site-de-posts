import style from "./Sidebar.module.css"
import { PencilLine} from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar(){
    return(
        <aside className={style.sidebar}>

            <img className={style.cover} 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
            
            <div className={style.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/107520530?v=4"/>

                <strong>Leonardo Alves</strong>
                <span> Web Developer</span>
            
            </div>
            <footer>

                <a href="#">
                    <PencilLine size={20} />
                    Editar seu Perfil
                </a>

            </footer>
        </aside>
    );
}