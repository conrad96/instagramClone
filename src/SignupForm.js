import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Logo from './assets/images/header.png'
import Button from '@material-ui/core/Button'
import './SignupForm.css'

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

    return (
        //onChange={(event)=> setUsername(event.target.value)}
        //onChange={(event)=> setEmail(event.target.value)}
        //onChange={(event)=> setPassword(event.target.value)}
        //onClick={(event)=> signup(event)}
        <div className="signup__form">
            <form className={classes.root}>
                <h2 id="simple-modal-title">
                    <img src={Logo} className="signup__headerImage" />
                </h2>
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
                    <Button variant="contained" id="signup" color="primary">Signup</Button>
                </div>                
            </form>
        </div>       
    );
}

export default SignupForm;