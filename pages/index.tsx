import React from 'react';

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
	return (
		<div>
			<h1>Renacimiento</h1>

			<PaintingList paintings={paintingList} />
		</div>
	);
};

export default HomePage;
