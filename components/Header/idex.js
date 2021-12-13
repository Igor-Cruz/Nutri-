import React from "react";
import styles from './styles.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container mx-auto '>
        <div className=' float-left'>
          <img src="/1.png" alt="Logo Nutri+" className="w-10" />
        </div>
        <div className='float-right' >
          menu
        </div>
      </div>
    </div>
  )
}

export default Header