import { NextApiRequest, NextApiResponse } from "next";

import DB from '@database';

const allCards = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();

  const id = request.query.id.toString();

  const entry = await db.getById(id);

  response.statusCode = 200;
  response.setHeader( 'Content-type', ' application/json' );
  response.end(JSON.stringify({ data: entry }));
};

export default allCards;