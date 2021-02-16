import styled from '@emotion/styled';

import { H6 } from '@/components/Typography';

const Title = styled(H6)`
  margin-top: 0;
  margin-bottom: 0;
  color: ${(props) => ('success' === props.status || 'error' === props.status ? '#fff' : '#000')};
`;

export default Title;
