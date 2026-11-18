import Sidebar from './Sidebar'
import Stories from './Stories'
import Post from './Post'
import Suggestions from './Suggestions'
import posts from "./data/posts.json";

function App() {

  return (
    <>
    <div className='app'>
      <Sidebar/>

      <main className='main-content'>
        <div className='feed'>
          <Stories/>
            {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}


        </div>
        <Suggestions />

      </main>
      </div>
    </>
  )
}

export default App
