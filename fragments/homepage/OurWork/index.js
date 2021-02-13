import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';
import { useAtom } from 'jotai';

import OurWorkContext from '@/contexts/OurWorkContext';

import { fetchImage } from '@/helpers/requests';

import { useWorks } from '@/queries/hooks/works';

import { showModalAtom } from '@/store/modal';

import Button from '@/components/Button';
import { H2 } from '@/components/Typography';

import Item from '@/fragments/homepage/OurWork/Item';
import List from '@/fragments/homepage/OurWork/List';
import ProjectModal from '@/fragments/homepage/OurWork/ProjectModal';

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
`;

const OurWork = () => {
  const { data } = useWorks();

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
      <Wrapper id="work">
        <Heading>
          <FormattedMessage id="OurWork.Heading" />
        </Heading>
        <Description>
          <FormattedMessage id="OurWork.Description" />
        </Description>
        <List>
          {data.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              category={item.Category.category_en}
              project={item.Project.project_en}
              image={fetchImage(item.Image.url)}
            />
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
