import React from 'react'
import {Link} from 'react-router'

export default (props) =>
    <ul className='nav nav-tabs'>
      <li className='brand-name'><Link to='/'>BRAND</Link></li>
      <li className='tabs'><Link to='/contact'>LINK 1</Link></li>
      <li className='tabs'><Link to='/projects'>LINK 2</Link></li>
      <li className='tabs'><Link to='/about'>LINK 3</Link></li>
    </ul>
