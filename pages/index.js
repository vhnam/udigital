import Nav from '../components/Nav';

import Banner from '../fragments/homepage/Banner';
import Clients from '../fragments/homepage/Clients';
import Hero from '../fragments/homepage/Hero';

const Home = () => (
  <>
    <Nav />
    <Hero>
      <Banner />
      <Clients />
    </Hero>
  </>
);

export default Home;
