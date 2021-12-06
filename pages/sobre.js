import React from 'react'
import Link from 'next/link'

const Sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <div>
        <Link href='/'>
          <a>
            Home
          </a>
        </Link>
        <Link href='/consulta'>
          <a>
            Consulta
          </a>
        </Link>
        <Link href='/receitas'>
          <a>
            Receitas
          </a>
        </Link>
        <Link href='/#'>
          <a>
            Blog
          </a>
        </Link>
      </div>
    </div>

  )
}
export default Sobre