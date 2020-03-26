import React, { Component } from 'react';
import {
    Alert,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component   {
    constructor(props)  {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState =>  {
            return {
                ...prevState,
                isOpen: !prevState.isOpen
            }
        })
    }

    render()    {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">DoNotForget</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem color="dark">
                                    <NavLink href="https://github.com/remedylove">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}


export default AppNavbar;