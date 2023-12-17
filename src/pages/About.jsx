import { Link } from "react-router-dom"

const About = () => {
  return (
    <main className='About'>About
            <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to='/'>Visit Our Homepage</Link>
          </p>
        </>
    </main>
  )
}

export default About