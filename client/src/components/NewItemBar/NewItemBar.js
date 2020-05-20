import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { Paper, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';

const styles = {
    paper:  {
        padding: '.75em .5em', 
        marginBottom: '5px'
    },
    btnAdd: {
        background: 'transparent', 
        color: '#000', 
        border: 'none', 
        borderRadius: 0, 
        marginRight: '.5em'
    },
    newItemInputWrapper: {
        display: 'flex'
    },
    newItemInput:  {
        fontSize: '.85rem',
        fontWeight: 500,
        background: 'inherit',
        border: 'none',
        width: '100%'
    }
}

class NewItemBar extends Component {
    state = {
        name: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);

        e.target.reset();
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Paper className={classes.paper} square>
                        <div className={classes.newItemInputWrapper}>
                            <Button className={classes.btnAdd} >
                                <AddIcon />
                            </Button>
                            <input
                                className={classes.newItemInput}
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add product"
                                onChange={this.onChange}
                            ></input>
                        </div>
                    </Paper>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state =>    ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(withStyles(styles)(NewItemBar));