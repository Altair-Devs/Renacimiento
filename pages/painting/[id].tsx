import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import PaintingSummary from '@components/PaintingSummary/PaintingSummary';

const PaintingPage = () => {
	const { query } = useRouter();
	const [painting, setPainting] = useState<TPainting | null>(null)

	useEffect(() => {
		if (query.id) {
			window
				.fetch(`/api/painting/${query.id}`)
				.then((response) => response.json())
				.then((data: TPainting) => {
					setPainting(data)
				})
		}
	}, [query.id])

	return (
		<section>
			<h1>Painting: {query.id}</h1>

			{ painting == null
				? <h1>...</h1>
				: <PaintingSummary painting={painting} />
			}
		</section>
	);
};

export default PaintingPage;