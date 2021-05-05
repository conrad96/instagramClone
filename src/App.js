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

  let [email, password, username] = '';

  function rand() 
  {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() 
  {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }  

  const [modalStyle] = useState(getModalStyle);

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid red',
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

  function setEmail(value)
  {
    email = value;
  }

  function setUsername(value)
  {
    username = value;
  }

  function setPassword(value)
  {
    password = value
  }

  function handleLogin()
  {
    return '';
  }

  const signup = (event) =>
  {
    event.preventDefault();
    
  }
  
  return (
    <div className="app">
      <Modal open={open} onClose={handleClose} >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Signup</h2>
          <br />
          <img src={Logo} className="app__headerImage" />
          <form className="app__signup">            
            <input placeholder="Username" type="text" value={username} onChange={(event)=> setUsername(event.target.value)} />
            <input placeholder="Email" type="email" value={email} onChange={(event)=> setEmail(event.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
            <button type="submit" className="app__loginBtn" onClick={handleLogin} >Signup</button>
          </form>
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
