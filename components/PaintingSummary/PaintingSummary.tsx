import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import PaintingAttributes from './PaintingAttributes'

type PaintingSummaryProps = {
  painting: TPainting
}

const PaintingSummary = ({ painting }: PaintingSummaryProps) => (
  <>
    <img src={painting.image} alt={painting.name} /> <br />
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        {/* <Item.Image size="medium"> */}
        {/* </Item.Image> */}

        <Item.Content>
          <Item.Header as="h1">{painting.name}</Item.Header>

          <Item.Description>
            <Label>{`Año ${painting.year}`}</Label>
          </Item.Description>

          <Item.Extra>{/* <AddToCart product={product} /> */}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>

    <PaintingAttributes {...painting.attributes} />

    <style jsx>{`
      img {
        justify-content: center;
        max-width: 700px;
      }
    `}</style>
  </>
)

export default PaintingSummary
