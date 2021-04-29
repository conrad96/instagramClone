import './App.css'
import Post from './Post'
import Logo from './assets/images/header.png'
import React, {useState, useEffect} from 'react'
import {db} from './Firebase'
import {PersonAdd, ExitToApp} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function App() 
{
  const [posts, setPosts] = useState([])
  
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  //useEffect runs a piece of code based on a specific condition
  useEffect(()=> {
    
    db.collection('posts').onSnapshot(snapshot=> {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      }) ));
    })
  }, [])
  
  return (
    <div className="app">
      <Modal open={open} onClose={handleClose} >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Signup</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>        
        </div>
      </Modal>

      <div className="app__header">
        <img className="app__headerImage" src={Logo} alt="Instagram" />
        <div className="app__btns">
          <button title="Signup" onClick={handleOpen} ><PersonAdd>Signup</PersonAdd></button>
          <button title="Login"><ExitToApp>Login</ExitToApp></button>
        </div>
      </div>      
      
      {
        posts.map(({id, post}) => {   

          return(
          <Post
          key={id}
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
