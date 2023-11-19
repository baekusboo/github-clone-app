import React from 'react'
import { Navbar as BootstrapNavbar, Nav, Container, Form, FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInbox, faCodePullRequest, faCircleDot, faPlus, faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <BootstrapNavbar className="navbar navbar-expand bg-black py-2">
        <Container>
            {/* left side links */}
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">

            <div className='p-1 border border-secondary rounded d-flex flex-row align-items-center' >
            <FontAwesomeIcon icon={faBars} color='gray' className='p-1' />                
            </div>
            
            <BootstrapNavbar.Brand href="#home" className="m-0">
                <img
                    alt=""
                    src="/github-mark-white.svg"
                    width="32"
                    height="32"
                    className="d-inline-block align-top"
                />{' '}
            </BootstrapNavbar.Brand>

            <Nav className="me-auto">
                <Nav.Link href="#username" className="text-white font-weight-bold text-sm">baekusboo</Nav.Link>
            </Nav>
            </div>

            {/* right side */}
            <div className="d-flex flex-row align-items-center gap-2">

            <Form inline className="searchFilter">
            <InputGroup className="border border-secondary rounded">
                    <InputGroup.Text className="bg-transparent border-0">
                    <FontAwesomeIcon icon={faMagnifyingGlass} color='gray'/>
                    </InputGroup.Text>
                    <FormControl type="search" placeholder="Search or jump to..." className="form-control form-control-sm mr-sm-2 text-white bg-transparent border-0 " />
            </InputGroup>
            </Form>

                <div>
                <img
                    alt=""
                    src="/icons8-vertical-line-48.png"
                    width="32"
                    height="32"
                    className="d-inline-block align-top"
                    color='gray'
                />{' '}
                </div> 
                <div className='p-1 border border-secondary rounded d-flex flex-row align-items-center' >
                <FontAwesomeIcon icon={faPlus} color='gray' className='p-1'/>
                <FontAwesomeIcon icon={faCaretDown} color='gray' className='p-1'/>
                </div>
                <div className='p-1 border border-secondary rounded d-flex flex-row align-items-center' >
                <FontAwesomeIcon icon={faCircleDot} color='gray' className='p-1' />
                </div>
                <div className='p-1 border border-secondary rounded d-flex flex-row align-items-center' >
                <FontAwesomeIcon icon={faCodePullRequest} color='gray' className='p-1' />
                </div> 
                <div className='p-1 border border-secondary rounded d-flex flex-row align-items-center' >
                <FontAwesomeIcon icon={faInbox} color='gray' className='p-1' />
                </div> 

                <img
                    alt=""
                    src="/dog.jpg"
                    width="32"
                    height="32"
                    className="d-inline-block align-top rounded-circle"
                />{' '}

                </div>

        </Container>
    </BootstrapNavbar>
)
}

export default Header
