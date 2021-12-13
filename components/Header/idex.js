import React from "react";
import styles from './styles.module.css'
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container mx-auto '>
        <div className=' float-left'>
          <img src="/1.png" alt="Logo Nutri+" className="w-10" />
        </div>
        <div className='float-right' >
          <Link href='/sobre' >
            <a className='px-2 hover:bg-green-400 hover:text-white'>
              Sobre
            </a>
          </Link>

          <Link href='/consulta'>
            <a className='px-2 hover:bg-green-400 hover:text-white'>
              Consulta
            </a>
          </Link>

          <Link href='/receitas' >
            <a className='px-2 hover:bg-green-400 hover:text-white'>
              Receitas
            </a>
          </Link>

          <Link href='#'>
            <a className='px-2 hover:bg-green-400 hover:text-white'>
              Blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header