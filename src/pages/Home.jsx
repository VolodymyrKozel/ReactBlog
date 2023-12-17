import React from 'react'
import Feed from '../components/Feed'

const Home = ({posts, fetchError, isLoading}) => {
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading posts...</p> }
      {!isLoading && fetchError && <p className='errorMsg statusMsg'>{fetchError}</p>}
      {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className='statusMsg'>No posts to display.</p>)}
    </main>
  )
}

export default Home