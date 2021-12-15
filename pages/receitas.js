import React from "react"
import Link from "next/link"

const Receitas = () => {
  return (
    <div className="container mx-auto  ">
      <h2 className="text-center m-4 p-4">
        Lista para receber novidades e dicas de receitas.(mailchimp)

      </h2>
      <div class="grid grid-cols-2 gap-4 place-content-around h-max w-full text-center">
        <div className=" rounded border-4 border-black border-solid">Emagrecimento</div>
        <div className=" rounded border-4 border-black border-solid">Ganho de Massa</div>
        <div className=" rounded border-4 border-black border-solid">3° Idade</div>
        <div className=" rounded border-4 border-black border-solid">Gestante</div>
      </div>
      <div className="w-1/5 mx-auto mt-2">
        <label className="font-bold">Seu Nome</label>
        <input type="text" placeholder="Nome" className="p-4 font-bold block shadow bg-green-100 my-2 rounded" />
        <button>Enviar</button>
      </div>
    </div>
  )
}
export default Receitas