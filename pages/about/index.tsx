import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const AboutPage = () => {
  return (
    <>
      <Header as="h1" textAlign="center">
        ¿Enserio llegaste hasta acá?
      </Header>

      <h2>
				Bueno, no hay mucho más por ver. Esperamos que hayas disfrutado las obras!
      </h2>

      <h2>
        También podes mirar nuestros otros proyectos en: {' '} <br />
        <a href="https://github.com/Altair-Devs" target="blank">Altaïr Devs</a> <br />
      </h2>

      <h2>
				Y otro proyecto paralelo hecho por los autores de este sitio en: {' '} <br />
        <a href="https://github.com/Irungaray/Next-Card" target="blank">
          Next Cards
        </a>
      </h2>

      <style jsx>{`
        h2 {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default AboutPage
