import React, { Component } from 'react';
import { Fade, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import { getItems, deleteItem, updateItem } from '../../actions/itemActions';
import ShoppingListItemDone from '../ShoppingListItemDone/ShoppingListItemDone';
import PropTypes from 'prop-types';

export class ShoppingListDone extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id =>   {
        this.props.deleteItem(id);
    }

    onAddClick = _id => {

        const isDone = {
            done: false
        }

        this.props.updateItem(_id, isDone);
    }

    render() {
        const { items } = this.props.item;
        return (
            <div>
                <ExpansionPanel square>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography style={{color: '#707070', fontSize: '.85rem', fontWeight: 500}}>Items marked as done</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column', padding: 0}}>
                        {items.map(item =>  (
                            item.done
                            ? <Fade key={item._id} in timeout={500}>
                                <ShoppingListItemDone item={item} onAddClick={this.onAddClick} onDeleteClick={this.onDeleteClick} />
                            </Fade>
                            : null
                        ))}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
};

ShoppingListDone.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>  ({
    item: state.item
});


export default connect(mapStateToProps, { getItems, deleteItem, updateItem })(ShoppingListDone);