import React, { Component } from 'react';
import { Fade } from '@material-ui/core';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import PropTypes from 'prop-types';

export class ShoppingList extends Component {
    
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id =>   {
        this.props.deleteItem(id);
    }

    onDoneClick = _id => {
        const item = document.getElementById(_id);
        item.style.textDecoration = 'line-through';
        item.style.color = '#707070';
    }

    render() {
        const { items } = this.props.item;
        return (
            <div>
                {items.map(item =>  (
                    <Fade key={item._id} in timeout={500}>
                        <ShoppingListItem item={item} onDoneClick={this.onDoneClick} onDeleteClick={this.onDeleteClick} />
                    </Fade>
                ))}
            </div>
        )
    }
};

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>  ({
    item: state.item
});


export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);