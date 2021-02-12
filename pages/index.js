import Footer from '../components/Footer';
import Nav from '../components/Nav';

import AboutUs from '../fragments/homepage/AboutUs';
import Banner from '../fragments/homepage/Banner';
import Clients from '../fragments/homepage/Clients';
import Hero from '../fragments/homepage/Hero';
import OurWork from '../fragments/homepage/OurWork';
import Services from '../fragments/homepage/Services';
import Testimonial from '../fragments/homepage/Testimonial';
import WorkWithUs from '../fragments/homepage/WorkWithUs';

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
    <Testimonial />
    <WorkWithUs />
    <Footer />
  </>
);

export default Home;
