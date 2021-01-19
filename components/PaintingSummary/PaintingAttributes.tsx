import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

const PaintingAttributes = (
  { description, ...otherAttributes }: TPaintingAttributes,
  { name }: TPainting )  => (
  <section className="container">
    <Header as='h3'>About {name}</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Detalles</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Object.keys(otherAttributes).map((key) => (
          <Table.Row key={key}>
            <Table.Cell className="attr-name">{key}</Table.Cell>
            <Table.Cell>
              {otherAttributes[key as keyof typeof otherAttributes]}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>

    <style jsx>{`
      .container :global(.attr-name) {
        text-transform: capitalize;
      }
    `}</style>
  </section>
)

export default PaintingAttributes