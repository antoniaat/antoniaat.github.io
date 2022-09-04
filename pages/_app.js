import { GlobalStyle } from '../styles/global.styled';

const App = ({ Component, pageProps }) => (
	<>
		<GlobalStyle />
		<Component {...pageProps} />
	</>
);

export default App;
