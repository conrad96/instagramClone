import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Logo from './assets/images/header.png'
import Button from '@material-ui/core/Button'
import './SignupForm.css';
import {db, auth} from './Firebase'
import {react, useEffect} from 'react';

function SignupForm()
{
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
    }));

    const classes = useStyles();

    //signup code
    let [email, password, username, user] = '';

    const signup = (event) =>
    {
        event.preventDefault();   

        username = document.getElementById('username').value;
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;
                
        //authentication
        auth.createUserWithEmailAndPassword(email, password).then((authUser)=> {
            console.log(authUser);

            authUser.user.updateProfile({
                displayName: username
            })
        }).catch((error)=> alert(error.message));        
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authuser)=> {
          if(authuser)
          {
            //user logged in            
    
            //setUser(authuser);      
          }else {
            //user logged out
            //setUser = null;
          }
    
          return ()=> {
            //cleanup
            unsubscribe();
          }
        })
    }, [user, username])
    

    return (
        
        <div className="signup__form">
            <form className={classes.root} id="signup__Form">
                <div className="signup__headerSection">
                    <div className="signup__headerImageSection">
                        <img src={Logo} className="signup__headerImage" />
                    </div>
                </div>
                <div className="signup__formField">
                    <TextField id="username" name="username" label="Username" />
                </div>
                <div className="signup__formField">
                    <TextField id="email" type="email" name="email" label="Email" />
                </div>
                <div className="signup__formField">
                    <TextField id="password" type="password" name="password" label="Password" />
                </div>
                <div className="signup__formField">
                    <Button variant="contained" id="signup" color="primary" onClick={(event)=> signup(event)} >Signup</Button>
                </div>                
            </form>
        </div>       
    );
}

export default SignupForm;