import { makeStyles } from "@material-ui/core";


const style = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& input + fieldset': {
            borderColor: 'green'
        },
        '& input:invalid:focus + fieldset': {
            borderColor: 'red'
        },
        '& input:valid:focus + fieldset': {
            borderColor: 'green'
        },
        '& .form-control': {
            margin: '20px 0px',
            width: '100%'
        },
        '& .MuiFormControl-root': {
            width: '100%'
        },
        'button ': {
            marginTop: '10px'
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    formControl: {
        marginTop: '10px'
    },
    btn: {
        padding: '10px 20px',
        marignTop: '10px 0px'
    }

}));
export default style