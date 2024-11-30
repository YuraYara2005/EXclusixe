import React from 'react'
import './headribbon.css'

const headRibbon = () => {
  return (
    <div>
      < div className='ribbon container-fluid bg-dark text-center'>
      <p className='d-inline'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <a className='text-white ms-2 me-5'>ShopNow</a>
      <div class="dropdown d-inline bg-dark ms-5">
          <a class="btn btn-secondary dropdown-toggle bg-dark border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             English
          </a>

           <ul class="dropdown-menu d-sm-none bg-dark">
              <li><a class="dropdown-item bg-dark text-white" href="#">Arbic </a></li>
           </ul>
        </div>
      </div>
    </div>
  )
}

export default headRibbon
