import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type PaintingListProps = {
  paintings: TPainting[]
}

const mapPaintingsToCards = (paintings: TPainting[]) =>
  paintings.map(({ id, image, name, year, author }) => (
    <Link key={id} href="/painting/[id]" as={`/painting/${id}`} passHref>
      <Card
        as="a"
        image={image}
        header={name}
        meta={<Card.Meta style={{ color: 'dimgray' }} className='date'>Año {year}</Card.Meta>}
        description={author}
      />
    </Link>
  ))

const PaintingList = ({ paintings }: PaintingListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapPaintingsToCards(paintings)}
  </Card.Group>
)

export default PaintingList