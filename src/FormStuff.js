
import React from 'react'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

function FormStuff()
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
        <form className={classes.root} noValidate autoComplete = "off">
            <TextField id="name" label="Name" />
            <TextField id="email" label="Email" />
        </form>
    );
}

export default FormStuff;