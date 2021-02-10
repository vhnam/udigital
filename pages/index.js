import Nav from '../components/Nav';

import Banner from '../fragments/homepage/Banner';
import Clients from '../fragments/homepage/Clients';
import Hero from '../fragments/homepage/Hero';
import Services from '../fragments/homepage/Services';

const Home = () => (
  <>
    <Nav />
    <Hero>
      <Banner />
      <Clients />
    </Hero>
    <Services />
  </>
);

export default Home;
