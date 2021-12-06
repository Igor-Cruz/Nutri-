import React from 'react'
import Link from 'next/link'

const Consulta = () => {
  return (
    <div>
      <h1>
        Consulta
      </h1>
      <div>
        <Link href='/'>
          <a>
            Home
          </a>
        </Link>
        <Link href='/sobre'>
          <a>
            Sobre
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
export default Consulta