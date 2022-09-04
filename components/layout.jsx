import Head from 'next/head';
import { WEBSITE_TITLE } from '../scripts/constants/global';
import { Navigation } from './navigation/navigation';
import { Footer } from './footer/footer';

export const Layout = ({ children }) => (
	<>
		<Head>
			<title>{WEBSITE_TITLE}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<body>
			<main>
				<Navigation />
				{children}
				<Footer />
			</main>
		</body>
	</>
);
