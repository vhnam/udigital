import styled from '@emotion/styled';

import Modal from '../../../components/Modal';
import { H5 } from '../../../components/Typography';

const Wrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 80%;
`;

const Name = styled(H5)`
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const Category = styled.p`
  padding: 0.5rem 0;
  margin: 0;
  font-size: 0.875rem;
  font-weight: 300;
`;

const ProjectModal = ({ project, ...others }) => (
  <Modal {...others} title="Project Details">
    <Wrapper>
      <Image src={project.image} alt={project.project} />
      <Name>{project.project}</Name>
      <Category>{project.category}</Category>
    </Wrapper>
  </Modal>
);

export default ProjectModal;
