import './App.css'
import Post from './Post'
import Logo from './assets/images/header.png'
import React, {useState, useEffect} from 'react'
import {db} from './Firebase'

function App() 
{
  const [posts, setPosts] = useState([])

  //useEffect runs a piece of code based on a specific condition
  useEffect(()=> {
    
    db.collection('posts').onSnapshot(snapshot=> {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, [])
  
  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" src={Logo} alt="Instagram" />
      </div>      
      
      {
        posts.map(post => {          

          return(
          <Post          
          username={post.username} 
          imageUrl={post.imageUrl} 
          caption={post.caption} /> )
        })
      }

      {/**comments */}
    </div>
  );
}

export default App;
