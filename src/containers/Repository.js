import React from 'react'
import { Button } from "react-bootstrap";
import { GoDotFill, GoRepoForked } from "react-icons/go";
import { FiStar } from "react-icons/fi";

function Repository() {
  return (
    <div>
    {/* include repo cards */}

      <div className='py-2 text-primary d-flex gap-2'>
        <h5 className='m-0'>github-clone-repo</h5>
        <Button size="sm" variant="outline-secondary" id="public-button" className='text-gray py-0 rounded-5'>
            Public
        </Button>
        
      </div>
      <div className='text-secondary d-block'>
        <span className='d-block'>a computer science repository.</span >
      </div>

      <div className='py-2 d-flex align-items-center gap-3'>

      <div className='d-flex align-items-center'>
      <GoDotFill className='fa-lg' color='yellow'/>
      <span className='text-secondary'>Javascript</span >
      </div>

      <span className='text-secondary'>Updated 4 days ago</span >
      </div>
      <hr class="bg-secondary border-1 border-top border-secondary" />

      {/* repo 2 */}

      <div className='py-2 text-primary d-flex gap-2'>
        <h5 className='m-0'>organ-donation-app</h5>
        <Button size="sm" variant="outline-secondary" id="public-button" className='text-gray py-0 rounded-5'>
            Public
        </Button>
      </div>
      <div className='py-2 d-flex gap-1'>
      <Button size="sm" variant="outline-secondary" id="tag-button" className='text-primary py-0 rounded-5'>
        first-timers
      </Button>
      <Button size="sm" variant="outline-secondary" id="tag-button" className='text-primary py-0 rounded-5'>
        first-timers
      </Button>
      </div>
      <div className='py-2 d-flex align-items-center gap-3'>

      <div className='d-flex align-items-center'>
      <GoDotFill className='fa-lg' color='yellow'/>
      <span className='text-secondary'>Javascript</span >
      </div>

      <span className='text-secondary'>Updated 2 weeks ago</span >
      </div>

      <hr class="bg-secondary border-1 border-top border-secondary" />
  {/* repo 3 */}

  <div className='py-2 text-primary d-flex gap-2'>
        <h5 className='m-0'>music-website</h5>
        <Button size="sm" variant="outline-secondary" id="public-button" className='text-gray py-0 rounded-5'>
            Public
        </Button>
      </div>
      <div className='text-secondary d-block'>
        <span className='d-block'>A webpage with full of music suggestions!</span >
      </div>
      <div className='py-2 d-flex gap-1'>
      <Button size="sm" variant="outline-secondary" id="tag-button" className='text-primary py-0 rounded-5'>
        first-timers
      </Button>
      <Button size="sm" variant="outline-secondary" id="tag-button" className='text-primary py-0 rounded-5'>
        beginner-friendly
      </Button>
      <Button size="sm" variant="outline-secondary" id="tag-button" className='text-primary py-0 rounded-5'>
        hacktoberfest
      </Button>
      <Button size="sm" variant="outline-secondary" id="tag-button" className='text-primary py-0 rounded-5'>
        first-contributions
      </Button>
      <Button size="sm" variant="outline-secondary" id="tag-button" className='text-primary py-0 rounded-5'>
        good-first-issue
      </Button>
      <Button size="sm" variant="outline-secondary" id="tag-button" className='text-primary py-0 rounded-5'>
        hacktoberfest-starter
      </Button>
      </div>

      <div className='py-2 d-flex align-items-center gap-3'>

      <div className='d-flex align-items-center'>
      <GoDotFill className='fa-lg' color='purple'/>
      <span className='text-secondary'>CSS</span >
      </div>

      <div className='d-flex align-items-center'>
      <FiStar className='fa-md' color='gray'/>
      <span className='text-secondary'>16</span >
      </div>

      <div className='d-flex align-items-center'>
      <GoRepoForked className='fa-md' color='gray'/>
      <span className='text-secondary'>108</span >
      </div>

      <span className='text-secondary'>Updated 3 weeks ago</span >
      </div>

      <hr class="bg-secondary border-1 border-top border-secondary" />

    </div>
  )
}

export default Repository