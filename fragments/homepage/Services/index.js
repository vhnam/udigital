import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import { H2 } from '@/components/Typography';
import { Branding, CreativeDesign, DigitalMarketing, MediaBuying, Target, WebApp } from '@/components/Icons';

import List from '@/fragments/homepage/Services/List';
import Item from '@/fragments/homepage/Services/Item';

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 71.25rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2.25rem;
  }
`;

const Heading = styled(H2)`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin: 0 auto;
  font-size: 1rem;
  color: #5b5b5b;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: inherit;
  }
`;

const data = [
  {
    heading: 'Digital Marketing 360',
    description:
      'After creating a successful corporate brand, the next important step is to maintain it. That is why we provide Public Relations. Public Relations (PR) helps communicate credibly with audiences, as well as to maintain the brand’s tone, personality and reputation.',
    color: '#F3C203',
    icon: <DigitalMarketing />,
  },
  {
    heading: 'Digital Strategy & planning',
    description:
      'We provides 360 degree digital services in web design, marketing, ad operations, inventory consultants and content management. We ensure experts in each of our respective domains work closely on each project.',
    color: '#00D362',
    icon: <Target />,
  },
  {
    heading: 'Creative Design Sollution',
    description:
      'Our creative content helps you to grow your business & ensure that your brands achieve great results in digital media spaces.',
    color: '#886CFF',
    icon: <CreativeDesign />,
  },
  {
    heading: 'Branding and Identity',
    description:
      'Your logo and brand will often form the first impression a prospective client gets of your company. We create brands that build business.',
    color: '#F55498',
    icon: <Branding />,
  },
  {
    heading: 'Media Buying',
    description:
      'We deliver your content to all standard platforms including social media, Google ads as well as local channels such as TV,radio and newspapers. Check our list of partners for a full list of media outlets where you can display ads.',
    color: '#FF3F00',
    icon: <MediaBuying />,
  },
  {
    heading: 'Web and App Development',
    description:
      'In the age of digitalization, we have equipped ourselves into utilizing the most effective workflows, tools and technologies to deliver at the highest level. Innovating products and solutions within your time and budget is our priority.',
    color: '#0081F5',
    icon: <WebApp />,
  },
];

const Services = () => (
  <Wrapper id="services">
    <Heading>
      <FormattedMessage id="Services.Heading" />
    </Heading>
    <Description>
      <FormattedMessage id="Services.Description" />
    </Description>
    <List>
      {data.map((item) => (
        <Item
          key={item.heading}
          heading={item.heading}
          description={item.description}
          color={item.color}
          icon={item.icon}
        />
      ))}
    </List>
  </Wrapper>
);

export default Services;
