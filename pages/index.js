import Nav from '../components/Nav';

import AboutUs from '../fragments/homepage/AboutUs';
import Banner from '../fragments/homepage/Banner';
import Clients from '../fragments/homepage/Clients';
import Hero from '../fragments/homepage/Hero';
import OurWork from '../fragments/homepage/OurWork';
import Services from '../fragments/homepage/Services';

const Home = () => (
  <>
    <Nav />
    <Hero>
      <Banner />
      <Clients />
    </Hero>
    <Services />
    <AboutUs />
    <OurWork />
  </>
);

export default Home;
