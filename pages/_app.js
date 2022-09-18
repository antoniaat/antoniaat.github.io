import { GlobalStyle } from '../styles/global.styled';
import { Typography } from '../styles/typography.styled';
import { Variables } from '../styles/variables.styled';

const App = ({ Component, pageProps }) => (
	<>
		<Variables />
		<Typography />
		<GlobalStyle />
		<Component {...pageProps} />
	</>
);

export default App;
