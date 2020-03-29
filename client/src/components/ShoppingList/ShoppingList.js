import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types';

export class ShoppingList extends Component {
    
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return (
            <div>
                <Container>
                    <Button 
                        color="dark"
                        style={{marginBottom: '2rem'}}
                        onClick={() =>  {
                            const name = prompt('Enter item');
                            if(name)    {
                                this.setState(prevState =>  {
                                    return({
                                        items: [
                                            ...prevState.items,
                                            { id: uuid(), name }
                                        ]
                                    }
                                    );
                                })
                            }
                        }}
                    >Add item</Button>

                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(({ id, name }) =>  (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            style={{marginRight: '.5rem'}}
                                            onClick={() => {
                                                this.setState(prevState =>  ({
                                                    items: prevState.items.filter(item => item.id !== id)
                                                }))
                                            }}
                                        >&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
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


export default connect(mapStateToProps, { getItems })(ShoppingList);