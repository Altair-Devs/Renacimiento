import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import PaintingAttributes from './PaintingAttributes'

type PaintingSummaryProps = {
  painting: TPainting
}

const PaintingSummary = ({ painting }: PaintingSummaryProps) => (
  <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        <Item.Image size="medium">
          <img src={painting.image} alt={painting.name} />
        </Item.Image>

        <Item.Content>
          <Item.Header as="h1">{painting.name}</Item.Header>

          <Item.Description>
            <p>{painting.year}</p>
            <Label>{`Year: ${painting.year}`}</Label>
          </Item.Description>

          <Item.Extra>{/* <AddToCart product={product} /> */}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>

    <PaintingAttributes {...painting.attributes} />
  </>
)

export default PaintingSummary
