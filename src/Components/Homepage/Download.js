import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignContent: 'center',
    },
    lang: {
        display: 'flex',
        alignContent: 'center',
        color: 'grey',
        textTransform: 'capitalize',
    },
    menu: {
        color: '#F49A14',
    }
}));

export default function SimpleMenuD() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button className={classes.lang} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Downloads
                <ExpandMoreIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Citizen Charter</MenuItem>
                <MenuItem onClick={handleClose}>Acts</MenuItem>
                <MenuItem onClick={handleClose}>Policies</MenuItem>
                <MenuItem onClick={handleClose}>Forms</MenuItem>
                <Link to={process.env.PUBLIC_URL + '/Statistics2'}>
                    <MenuItem className={classes.menu} onClick={handleClose}>Statistics</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>Admin Report</MenuItem>
            </Menu>
        </div>
    );
}