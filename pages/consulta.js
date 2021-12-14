import React from 'react'
import Link from 'next/link'

const Consulta = () => {
  return (
    <div>
      <div className="text-center pt-6">

        <h1 className="font-bold my-2 text-2xl">
          Consulta
        </h1>
      </div>
      <div className="text-center pt-4">
        <h2 className="font-bold my-2 text-2xl ">
          Enquete
        </h2>
        <p>Sua opnião é importante, como está sendo seus resultados após a dieta em próximas consultas.</p>
      </div>
      <div className="w-1/5 mx-auto mt-2">
        <label className="font-bold">Seu Nome:</label>
        <input type="text" placeholder="Nome" className="p-4 font-bold block shadow bg-green-100 my-2 rounded" />
      </div>
      <p className="m-12 text-center font-bold text-2xl">
        Mensagem do Desconto
      </p>


    </div>
  )
}
export default Consulta