import { useState } from 'react';
import Head from 'next/head';
import { WEBSITE_TITLE } from '../scripts/constants/global';
import { Navigation } from './navigation/navigation';
import { Footer } from './footer/footer';
import { lightTheme, darkTheme, Theme } from '../styles/theme.styled';
import { ThemeProvider } from 'styled-components';

export const Layout = ({ children }) => {
	const [theme, setTheme] = useState('light');
	const isDarkTheme = theme === 'dark';
	const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

	return (
		<>
			<Head>
				<title>{WEBSITE_TITLE}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
				<Theme />
				<body>
					<main>
						<Navigation toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
						{children}
						<Footer />
					</main>
				</body>
			</ThemeProvider>
		</>
	);
};
