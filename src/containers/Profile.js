import React from 'react'
import { Col , Container , Image , Row, Button } from "react-bootstrap";
import { MdInsertEmoticon } from "react-icons/md";
import { GoPeople, GoLocation,GoLink   } from "react-icons/go";
import Files from "./Files"

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
                <h4 className='m-0'>Sai Sunitha G</h4>
                <span className='d-block text-secondary'>baekusboo</span >
            </div>

            <div className='py-2 text-white d-block'>
                <span className='d-block'>Hi! I am a curious computer science engineering student. I am interested in creating creative designs (@walking.coloursss) and exploring different tech stuff.</span >
            </div>

            <div className='py-2 d-grid'>
            <Button size="sm" variant="outline-secondary" id="button-addon2" className='text-white rounded'>
            Edit profile
            </Button>
            </div>

            <div className='py-2 text-white d-flex align-items-center gap-1 text-small'>
            <GoPeople color='gray'/>
            <span className='text-white'>18</span >
            <span className='text-secondary'>followers</span>
            <span className='text-white'>·</span>
            <span className='text-white'>22</span>
            <span className='text-secondary'>following</span>
            </div>

            <div className='py-2 d-flex align-items-center text-small gap-2'>
            <GoLocation color='gray'/>
            <span className='text-white'>Chennai, India</span >
            </div>

            <div className='py-2 d-flex align-items-center text-small gap-2'>
            <GoLink color='gray'/>
            <span className='text-white'>https://www.linkedin.com</span >
            </div>

            {/* Can add achievements section here */}
            <hr class="bg-secondary border-1 border-top border-secondary" />

        </Col>

        <Col>
        <Files />
        </Col>

      </Row>
    </Container>    
    </div>
  )
}

export default Profile