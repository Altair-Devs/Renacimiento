type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TPaintingId = string

type TPaintingAttributes = {
  description: string
  technique: string
  location: string
  curious: string
}

type TPainting = {
  name: string
  author: string
  id: TPaintingId
  sku: string
  year: number
  image: Url
  attributes: TPaintingAttributes
}

type TAPIAVODetailResponse = TPainting

type TAPIAvoResponse = {
  lenght: number
  data: TPainting[]
  error?: string
}
