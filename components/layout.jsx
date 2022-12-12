import { useState, useEffect } from 'react';
import Head from 'next/head';
import { WEBSITE_TITLE } from '../scripts/i18n/main-info.js';
import { Navigation } from './navigation/navigation';
import { Footer } from './footer/footer';
import { lightTheme, darkTheme, Theme } from '../styles/theme.styled';
import { ThemeProvider } from 'styled-components';

export const Layout = ({ children }) => {
	const [theme, setTheme] = useState('light');
	const isDarkTheme = theme === 'dark';
	
	const toggleTheme = () => {
		const updatedTheme = isDarkTheme ? 'light' : 'dark';
		setTheme(updatedTheme);
		localStorage.setItem('theme', updatedTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
			setTheme(savedTheme);
		} else if (prefersDark) {
			setTheme('dark');
		}
	}, []);

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
