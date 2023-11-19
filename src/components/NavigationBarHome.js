import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown, Form, FormControl } from "react-bootstrap";

function NavigationBarHome() {
    return (
        <BootstrapNavbar className="navbar navbar-expand navbar-black bg-black py-3">
            <Container className="m-0">
                {/* left side links */}
                <BootstrapNavbar.Brand href="#home">
                    <img
                        alt=""
                        src="/github-mark-white.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </BootstrapNavbar.Brand>

                <Nav className="me-auto">
                
                    <NavDropdown title="Products" id="basic-nav-dropdown1">
                        <NavDropdown.Item href="#action/1.1">Actions</NavDropdown.Item>
                        <NavDropdown.Item href="#action/1.2">Packages</NavDropdown.Item>
                        <NavDropdown.Item href="#action/1.3">Security</NavDropdown.Item>
                        <NavDropdown.Item href="#action/1.4">Codespaces</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Solutions" id="basic-nav-dropdown2">
                        <NavDropdown.ItemText>For</NavDropdown.ItemText>
                        <NavDropdown.Item href="#action/2.1">Enterprise</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.2">Teams</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.3">Startups</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Open Source" id="basic-nav-dropdown3">
                        <NavDropdown.Item href="#action/3.1">Github Sponsors</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">The ReadME Project</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Repositories</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#pricing">Pricing</Nav.Link>

                </Nav>
                    {/* center */}
                    <Form inline className="searchFilter">

                    <FormControl type="search" placeholder="Search or jump to..." className="form-control form-control-sm mr-sm-2 " />

                    </Form>

                    {/* right side */}
            </Container>
        </BootstrapNavbar>
    )
}
export default NavigationBarHome;