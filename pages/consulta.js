import React from 'react'
import Link from 'next/link'

const Consulta = () => {
  return (
    <div>
      <div className="text-center pt-6">

        <h1 className="font-bold my-2 text-4xl">
          Consulta
        </h1>
      </div>
      <div className="text-center pt-4">
        <h2 className="font-bold my-2 text-4xl">
          Enquete
        </h2>
        <p>Sua opnião é importante, como está sendo seus resultados após a dieta em próximas consultas.</p>
      </div>
      <div className="w-32 mx-auto mt-2">
        <label>Seu Nome:</label>
        <input type="text" placeholder="Nome" />
      </div>
      <p className="m-12 text-center font-bold text-2xl">
        Mensagem do Desconto
      </p>


    </div>
  )
}
export default Consulta