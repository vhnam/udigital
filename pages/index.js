import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { fetchClients } from '@/hooks/useClients';
import { fetchServices } from '@/hooks/useServices';
import { fetchAbout } from '@/hooks/useAbout';
import { fetchWorks } from '@/hooks/useWorks';
import { fetchReviews } from '@/hooks/useReviews';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

import AboutUs from '@/fragments/homepage/AboutUs';
import Banner from '@/fragments/homepage/Banner';
import Clients from '@/fragments/homepage/Clients';
import Hero from '@/fragments/homepage/Hero';
import OurWork from '@/fragments/homepage/OurWork';
import Services from '@/fragments/homepage/Services';
import Testimonial from '@/fragments/homepage/Testimonial';
import WorkWithUs from '@/fragments/homepage/WorkWithUs';

const Home = () => {
  return (
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
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['clients'], fetchClients);
  await queryClient.prefetchQuery(['services'], fetchServices);
  await queryClient.prefetchQuery(['about'], fetchAbout);
  await queryClient.prefetchQuery(['works'], fetchWorks);
  await queryClient.prefetchQuery(['views'], fetchReviews);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
