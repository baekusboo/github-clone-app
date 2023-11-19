import React from 'react'
import { Container, Form, FormControl, InputGroup, Button, DropdownButton ,Dropdown  } from "react-bootstrap";
import { TbBook2} from "react-icons/tb";
import Repository from "./Repository"

function Files() {
  return (
    <Container>
      <br></br>
    <div>
      <Form inline className="searchFilter d-flex gap-3">
            <InputGroup className="border border-secondary rounded w-50">
                    <FormControl type="search" placeholder="Find a repository..." className="form-control form-control-sm mr-sm-2 text-white bg-transparent border-0 " />
            </InputGroup>

            <DropdownButton id="dropdown-basic-button" variant="outline-secondary" menuVariant="dark" title="Type" className='text-white'>
              <Dropdown.Header>Select Type</Dropdown.Header>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-2">Public</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Private</Dropdown.Item>
            
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" variant="outline-secondary" menuVariant="dark" title="Language" className='text-white'>
              <Dropdown.Header>Select Language</Dropdown.Header>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-2">Javascript</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">CSS</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">HTML</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Astro</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">C++</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">C</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Ruby</Dropdown.Item>

            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" variant="outline-secondary" menuVariant="dark" title="Sort" className='text-white'>
              <Dropdown.Header>Select order</Dropdown.Header>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">Last updated</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-2">Name</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Stars</Dropdown.Item>
            
            </DropdownButton>

            <Button size="sm" variant="success" id="button-new" className='text-white rounded align-items-center'>
            <TbBook2 className='fa-lg'/>
              New
            </Button>

      </Form>
    </div>
    <hr class="bg-secondary border-1 border-top border-secondary" />
  
    <Repository />

    </Container>
  )
}

export default Files