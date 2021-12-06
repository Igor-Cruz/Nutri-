import React from "react"
import Link from "next/link"

const Receitas = () => {
  return (
    <div>
      <h1>
        Receitas
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
        <Link href='/consulta'>
          <a>
            Consulta
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
export default Receitas