import { AppProps } from 'next/app';

import Layout from '@components/Layout/Layout';

import 'semantic-ui-css/semantic.min.css'
import '../global.css'

// export function reportWebVitals(metric: any) {
// 	analytics - calibre
// 	console.log(metric)
// 	serverAnalytics.log(metric)
// }

function MyApp({ Component, pageProps }: AppProps) {
	// Providers - Context/Providers, Theme, data
	// Layout
	// aditional props
	return (
		<Layout>
			<Component {...pageProps} title={'Renacimiento'} />
		</Layout>
	);
}

export default MyApp;