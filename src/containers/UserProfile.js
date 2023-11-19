import React from 'react'
import { TbBook, TbBook2} from "react-icons/tb";
import { Navbar as BootstrapNavbar, Container, Nav} from "react-bootstrap";
import { GoProjectTemplate } from "react-icons/go";
import { FiBox, FiStar } from "react-icons/fi";
import Profile from "./Profile"
import Files from "./Files"

function UserProfile() {
  return (
    <div>
    <BootstrapNavbar className="navbar navbar-expand navbar-black bg-black py-2">
    <Container>
      <div className="d-flex flex-row justify-content-center align-items-center gap-3 text-white">
          <Nav className="gap-2">
          <TbBook color='gray' className='fa-lg'/>
          <h6>Overview</h6>
          </Nav>
          <Nav className="gap-2">
          <TbBook2 color='gray'className='fa-lg'/>
          <h6>Repositories</h6>
          </Nav>
          <Nav className="gap-2">
          <GoProjectTemplate color='gray' className='fa-lg' />
          <h6>Projects</h6>
          </Nav>
          <Nav className="gap-2">
          <FiBox color='gray' className='fa-lg'/>
          <h6>Packages</h6>
          </Nav>
          <Nav className="gap-2">
          <FiStar color='gray' className='fa-lg'/>
          <h6>Stars</h6>
          </Nav>
        </div>
      </Container>
      </BootstrapNavbar>
      
      <Profile />
      <Files />

    </div>
  )
}

export default UserProfile