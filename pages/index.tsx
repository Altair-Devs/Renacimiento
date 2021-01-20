import React, { useEffect, useState} from 'react';

import PaintingList from '@components/PaintingList/PaintingList';

export const getServerSideProps = async () => {
	const response = await fetch('https://renacimiento.altair-devs.vercel.app/api/painting')
	const { data: paintingList }: TAPIResponse = await response.json()

	return {
		props: {
			paintingList,
		}
	}
}

const HomePage = ({ paintingList }: { paintingList: TPainting[] }) => {
	console.log(paintingList);

	return (
		<div>
			<h1>Renacimiento</h1>

			<PaintingList paintings={paintingList} />
		</div>
	);
};

export default HomePage;
