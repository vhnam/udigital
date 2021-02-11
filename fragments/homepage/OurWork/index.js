import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';
import { useAtom } from 'jotai';

import OurWorkContext from '../../../contexts/OurWorkContext';

import { showModalAtom } from '../../../store/modal';

import Button from '../../../components/Button';
import { H2 } from '../../../components/Typography';

import Item from './Item';
import List from './List';
import ProjectModal from './ProjectModal';

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 71.25rem;

  @media (min-width: 768px) {
    padding: 2.25rem;
  }
`;

const Heading = styled(H2)`
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  margin: 0 auto;
  font-size: 1rem;
  color: #5b5b5b;
  line-height: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: inherit;
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 auto 5rem auto;
  max-width: 20rem;
`

const data = [
  {
    id: 1,
    category: 'Dinosaur',
    project: 'Telmatosaurus',
    image: '/img/project-01.jpg',
  },
  {
    id: 2,
    category: 'Metal',
    project: 'Platinum',
    image: '/img/project-02.jpg',
  },
  {
    id: 3,
    category: 'Dogs',
    project: 'Boxer',
    image: '/img/project-03.jpg',
  },
  {
    id: 4,
    category: 'Snakes',
    project: 'Brown Snake',
    image: '/img/project-04.jpg',
  },
  {
    id: 5,
    category: 'Flowers Actors',
    project: 'Geranium',
    image: '/img/project-05.jpg',
  },
  {
    id: 6,
    category: 'Actors',
    project: 'Ben Kingsley',
    image: '/img/project-06.jpg',
  },
];

const OurWork = () => {
  const [, showModal] = useAtom(showModalAtom);

  const handleSelectedProject = (projectID) => {
    const selectedProject = data.find((project) => project.id === projectID);
    showModal({
      component: ProjectModal,
      props: { project: selectedProject },
    });
  };

  return (
    <OurWorkContext.Provider
      value={{
        onSelectProject: handleSelectedProject,
      }}
    >
      <Wrapper>
        <Heading>
          <FormattedMessage id="OurWork.Heading" />
        </Heading>
        <Description>
          <FormattedMessage id="OurWork.Description" />
        </Description>
        <List>
          {data.map((item) => (
            <Item key={item.id} id={item.id} category={item.category} project={item.project} image={item.image} />
          ))}
        </List>
        <ButtonWrapper>
        <Button>
          <FormattedMessage id="OurWork.SeeMoreWork" />
        </Button>
        </ButtonWrapper>
      </Wrapper>
    </OurWorkContext.Provider>
  );
};

export default OurWork;
