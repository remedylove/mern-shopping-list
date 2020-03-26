import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid } from 'uuid';

export class ShoppingList extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            items: [
                { id: uuid(), name: 'Eggs' },
                { id: uuid(), name: 'Milk' },
                { id: uuid(), name: 'Steak' },
                { id: uuid(), name: 'Water' }
            ]
        }
    }
    render() {
        const { items } = this.state;
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

export default ShoppingList;