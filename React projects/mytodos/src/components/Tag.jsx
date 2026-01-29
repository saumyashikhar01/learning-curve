import React from 'react';
import "./Tag.css";

const Tag = ({tagName, selectTag, selected }) => {
  const tagStyle = {
    Profile: {backgroundColor:"#fda821"},
    React: {backgroundColor:"#4cdafc"},
    Javascript: {backgroundColor:"#ffd12c"},
    default: {backgroundColor:"#f9f9f9"},
    CSS: {backgroundColor:"#15d4c8"}
  }
  return (
   <button 
   type='button' 
   className='tag' 
   style={selected ? tagStyle[tagName] : tagStyle.default}
   onClick={() => selectTag (tagName)}>
    {tagName}
    </button> 
  )
}

export default Tag
