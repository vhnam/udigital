import { useMemo } from 'react';
import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import { useServices } from '@/queries/hooks/services';

import { H2 } from '@/components/Typography';
import { Branding, CreativeDesign, DigitalMarketing, MediaBuying, Target, WebApp } from '@/components/Icons';
import Loading from '@/components/Loading';

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

const services = [
  {
    key: 'digital_marketing',
    color: '#F3C203',
    icon: <DigitalMarketing />,
  },
  {
    key: 'digital_strategy',
    color: '#00D362',
    icon: <Target />,
  },
  {
    key: 'creative_design_solution',
    color: '#886CFF',
    icon: <CreativeDesign />,
  },
  {
    key: 'branding_identity',
    color: '#F55498',
    icon: <Branding />,
  },
  {
    key: 'media_buying',
    color: '#FF3F00',
    icon: <MediaBuying />,
  },
  {
    key: 'web_app_development',
    color: '#0081F5',
    icon: <WebApp />,
  },
];

const Services = () => {
  const { data, isLoading, isFetching, isFetched, isSuccess } = useServices();

  const formattedData = useMemo(() => {
    if (isFetched && isSuccess) {
      return data.reduce(
        (obj, item) => ({
          ...obj,
          [item.key]: item,
        }),
        {}
      );
    }
    return [];
  }, [data]);

  return (
    <Wrapper id="services">
      <Heading>
        <FormattedMessage id="Services.Heading" />
      </Heading>
      <Description>
        <FormattedMessage id="Services.Description" />
      </Description>
      {(isLoading || isFetching || !isSuccess) && <Loading />}
      {isFetched && isSuccess && (
        <List>
          {services.map((item) => (
            <Item
              key={item.key}
              heading={formattedData[item.key].Heading.heading_en}
              description={formattedData[item.key].Description.description_en}
              color={item.color}
              icon={item.icon}
            />
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Services;
