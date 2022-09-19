import { Layout } from '../components/layout';
import { Header } from '../components/header/header';
import { About } from '../components/about/about';

const Home = () => (
	<Layout>
		<Header />
		<About />
		{/* <Skills /> */}
		{/* <Work /> */}
		{/* <Collaboration /> */}
	</Layout>
);

export default Home;
