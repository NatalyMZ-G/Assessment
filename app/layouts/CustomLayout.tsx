import React, { ReactElement } from 'react'
import styles from '../page.module.css'
import Link from 'next/link';

type CustomLayoutTypes = {
    children: ReactElement;
}

function CustomLayout({children}: CustomLayoutTypes) {
  return (
    <div className={styles.customLayout}>
      <header>
        <ul
        className='main-navigation'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
        >
          <li>
            <Link className='main-navigation-item' href='/' >
              Wedding
            </Link>
          </li>
          <li><Link className='main-navigation-item' href='/civil' >
              Civil
            </Link></li>
          <li><Link className='main-navigation-item' href='/photos' >
              Photos
            </Link></li>
          <li><Link className='main-navigation-item' href='/thanks' >
              Thanks
            </Link></li>
          <li><Link className='main-navigation-item' href='/privacy' >
              Privacy
            </Link></li>
        </ul>
      </header>
      
      {children}</div>
  )
}

export default CustomLayout