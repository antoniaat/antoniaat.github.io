import { Layout } from '../components/layout';
import { Header } from '../components/header/header';
import { About } from '../components/about/about';
import { Skills } from '../components/skills/skills';
import { Collaboration } from '../components/collaboration/collaboration';

const Home = () => (
	<Layout>
		<Header />
		<About />
		<Skills />
		{/* <Work /> */}
		<Collaboration />
	</Layout>
);

export default Home;
