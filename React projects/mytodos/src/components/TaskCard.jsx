import React from 'react'
import deleteIcon from '../assets/delete.png'
import Tag from "./Tag.jsx"
    
import "./TaskCard.css"

const TaskCard = ({title, tags, handleDelete, index }) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>

        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
               {tags.map((tag, index) => 
                    <Tag key={index} 
                            tagName={tag}
                            selected={true}
                            />)
               }
               
                {/* <Tag tagName="Profile"/>
                <Tag tagName="CSS"/> */}
            </div>
            <div 
                className='task_delete' 
                onClick={() => handleDelete(index)}>
                <img src={deleteIcon} className='delete_icon' alt=''/>
            </div>
        </div>
    </article>
  )
}
    
export default TaskCard
