import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to my Blog</h1>
      <p>Here you will find so many blogs related to <span>web developments</span> and so may answers of your questions too..</p>
      <Link to={'/'} className='link' id='blogslink'>View all blogs here</Link>
    </div>
  )
}

export default Home