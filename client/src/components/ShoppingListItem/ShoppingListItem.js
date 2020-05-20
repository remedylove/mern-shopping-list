import React from 'react';
import { Paper, Typography, IconButton, makeStyles } from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    paperItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5em 1em',
        '&:hover':  {
            background: '#e8f0fe',
            '& $removeBtn': {
                opacity: 1
            },
            '& $doneBtn': {
                opacity: 1
            }
        }
    },
    itemNameSection:    {
        display: 'flex', 
        alignItems: 'center'
    },
    paperIconWrapper:   {
        padding: '.25em .3em', 
        marginRight: '1em'
    },
    removeBtn: {
        opacity: 0,
        marginRight: '.5em'
    },
    doneBtn: {
        opacity: 0
    },
    iconMall:   {
        color: '#ccc'
    }
});

const ShoppingListItem = ({ item, onDoneClick, onDeleteClick }) => {

    const { _id, name } = item;
    const classes = useStyles();

    return (
        <Paper className={classes.paperItem} square>
            <div className={classes.itemNameSection}>
                <Paper className={classes.paperIconWrapper}>
                    <LocalMallIcon className={classes.iconMall} />
                </Paper>
                <Typography id={_id}>{name}</Typography>
            </div>
            <div>
                <IconButton
                    className={classes.doneBtn}
                    onClick={e => onDoneClick(_id)}
                >
                    <DoneIcon />
                </IconButton>
                <IconButton
                    className={classes.removeBtn}
                    onClick={e => onDeleteClick(_id)}
                >

                    <DeleteIcon />
                </IconButton>
            </div>
        </Paper>
    );
}

export default ShoppingListItem;