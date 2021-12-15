import React from "react";
import styles from './styles.module.css'
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container mx-auto '>
        <div className=' float-left  '>
          <Link href='/' >
            <a>
              <img src="/1.png" alt="Logo Nutri+" className="w-10" />
            </a>
          </Link>

        </div>
        <div className='float-right font-mono' >
          <Link href='/sobre' >
            <a className='px-2 hover:bg-green-400 hover:text-white  font-bold'>
              Sobre
            </a>
          </Link>

          <Link href='/consulta'>
            <a className='px-2 hover:bg-green-400 hover:text-white  font-bold'>
              Consulta
            </a>
          </Link>

          <Link href='/receitas' >
            <a className='px-2 hover:bg-green-400 hover:text-white  font-bold'>
              Receitas
            </a>
          </Link>

          <Link href='#'>
            <a className='px-2 hover:bg-green-400 hover:text-white  font-bold'>
              Blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header