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
    
    const signup = (evt)=>
    {
        evt.preventDefault();

        username = evt.target[0].value;
        email = evt.target[1].value;
        password = evt.target[2].value;

        auth.createUserWithEmailAndPassword(email, password).then((authUser)=> {                        
            
            authUser.user.updateProfile({
                displayName: username
            })
            alert('Account created successfully');

            window.location.reload();
            
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
            <form className={classes.root} id="signupForm" onSubmit={signup}>
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
                    <Button type="submit" variant="contained" id="signup" color="primary">Signup</Button>
                </div>                
            </form>
        </div>       
    );
}

export default SignupForm;