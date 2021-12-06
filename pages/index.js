import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Nutri+</h1>
      <div>
        <Link href='/sobre'>
          <a>
            Sobre
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

        <Link href='#'>
          <a>
            Blog
          </a>
        </Link>

      </div>
    </div>
  )
}
export default Index