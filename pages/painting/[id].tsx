import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

import PaintingSummary from '@components/PaintingSummary/PaintingSummary';

export const getStaticPaths =  async () => {
	const response = await fetch('https://renacimiento.altair-devs.vercel.app/api/painting')
	const { data: paintingList }: TAPIResponse = await response.json()

	const paths = paintingList.map((paints) => ({
		params: {
			id: paints.id
		}
	}))

	return {
		paths: paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id as string

	const response = await fetch(
		`https://renacimiento.altair-devs.vercel.app/api/painting/${id}`
	)

	const painting: TPainting = await response.json()

	return {
		props: {
			painting,
		}
	}
}

const PaintingPage = ({ painting }: { painting: TPainting }) => {

	return (
		<section>
			{ painting == null
				? <h1>...</h1>
				: <PaintingSummary painting={painting} />
			}
		</section>
	);
};

export default PaintingPage;