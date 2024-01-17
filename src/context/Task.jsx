import React from 'react'

const Task = ({ title, author, description }) => {
  return (
    <div className='container'>
        <h3>{title}</h3>
        <p>Author :  {author} </p>
        <p>Description :  {description} </p>
    </div>
  )
}

export default Task