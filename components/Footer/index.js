import React from "react"


const Footer = () => {
  return (
    <div className="bg-green-400 p-4 absolute inset-x-0 bottom-0 font-mono ">
      <div className="container mx-auto text-center font-bold text-white ">
        Projeto desenvolvido por: Igor Cruz | {' '}
        <a className="hover:underline hover:text-black " href="https://www.linkedin.com/in/igor-cruz-ti/">Linkedin </a>| {' '}
        <a className="hover:underline hover:text-black " href="https://github.com/Igor-Cruz"> Github</a>
      </div>

    </div>
  )
}

export default Footer