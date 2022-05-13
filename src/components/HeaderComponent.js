import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavbarToggler,
    Collapse
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <Navbar Navbar dark expand="md" color="primary">
                <NavbarBrand className="mr-auto" href="/">
                    <img
                        src='assets/images/logo.png'
                        height="30"
                        width="41"
                        alt='Quan Ly Nhan Vien'
                    />
                </NavbarBrand>

                <NavbarToggler onClick={this.toggleNav} />

                <Collapse navbar isOpen={this.state.isNavOpen} >
                    <Nav className="me-auto" navbar >
                        <NavItem>
                            <NavLink className="nav-link" to='/staff'>
                                <span className='fa fa-user fa-lg'></span> Nhân viên
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to='/department'>
                                <span className='fa fa-id-card-o fa-lg'></span> Phòng ban
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to='/salary'>
                                <span className='fa fa-money fa-lg'></span> Bảng lương
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header;  