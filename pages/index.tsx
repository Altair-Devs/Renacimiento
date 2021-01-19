import React, { useEffect, useState} from 'react';

import PaintingList from '@components/PaintingList/PaintingList';

const HomePage = () => {
	const [paintingList, setPaintingList] = useState<TPainting[]>([]);

	useEffect(() => {
		window
			.fetch('/api/painting')
			.then((response) => response.json())
			.then(({ data, length}) => {
				setPaintingList(data);
			});
	}, []);

	console.log(paintingList);

	return (
		<div>
			<h1>Renacimiento</h1>

			<PaintingList paintings={paintingList} />
		</div>
	);
};

export default HomePage;
