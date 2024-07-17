import React from 'react'
import './Title.css'

const Title = ({subTitle, title, id}) => {
  return (
    <div className='title' id={id}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
