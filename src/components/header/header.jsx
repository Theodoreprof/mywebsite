import React from 'react'
import './header.css'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Theodore Dimopoulos</h1>
        <h5 className='text-light'>Junior Web Developer</h5>
      </div>
    </header>
  )
}

export default header