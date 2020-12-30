import Layout from '../components/layout';
import Header from '../components/header/header';
import About from '../components/about/about';
import Skills from '../components/skills/skills';
import Work from '../components/work/work';

const Home = () => (
  <Layout>
    <Header />
    <About />
    <Skills />
    <Work />
  </Layout>
);

export default Home;
