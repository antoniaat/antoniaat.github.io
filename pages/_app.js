import { GlobalStyle } from '../styles/global.styled.tsx';
import { Typography } from '../styles/typography.styled.tsx';
import { Variables } from '../styles/variables.styled.tsx';

const App = ({ Component, pageProps }) => (
	<>
		<Variables />
		<Typography />
		<GlobalStyle />
		<Component {...pageProps} />
	</>
);

export default App;
