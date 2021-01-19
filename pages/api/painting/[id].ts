import { NextApiRequest, NextApiResponse } from 'next';

import DB from '@database';

const allPaintings = async (request: NextApiRequest, response: NextApiResponse) => {
	const db = new DB();
	const id = request.query.id.toString();
	const painting = await db.getById(id);

	response.status(200).json(painting);
};

export default allPaintings;