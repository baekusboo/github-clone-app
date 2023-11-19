import React from 'react'
import { Col , Container , Image , Row, Button } from "react-bootstrap";
import { MdInsertEmoticon } from "react-icons/md";

function Profile() {
  return (
    <div className='bg-dark'>
    <Container >
      <Row>
        <Col md={3}>
            <div>
              <br></br>
                <Image src="/dog.jpg" roundedCircle className='d-block w-100' />
                <MdInsertEmoticon />
            </div>

            <div className='py-2 text-white d-block'>
                <h3 className='m-0'>Sai Sunitha G</h3>
                <span className='d-block'>baekusboo</span >
            </div>

            <div className='py-2 text-white d-block'>
                <span className='d-block'>Hi! I am a curious computer science engineering student. I am interested in creating creative designs (@walking.coloursss) and exploring different tech stuff.</span >
            </div>

            <div className='py-2 d-grid'>
            <Button size="sm" variant="outline-secondary" id="button-addon2" className='text-white'>
            Edit profile
            </Button>
            </div>

        </Col>
        <Col>
        <div className='m-0 py-3 text-white d-block'>
                <h3>Sai Sunitha G</h3>
                <span className='d-block'>baekusboo</span >
            </div>
        </Col>
      </Row>
    </Container>    
    </div>
  )
}

export default Profile