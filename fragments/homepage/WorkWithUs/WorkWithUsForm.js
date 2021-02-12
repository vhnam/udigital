import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import Button from '../../../components/Button';
import { Account, Email, Phone } from '../../../components/Icons';
import TextField from '../../../components/TextField';

const Form = styled.form`
  margin: 0 auto;
  max-width: 56.25rem;
`;

const BtnSubmit = styled(Button)`
  margin-top: 5rem;
  width: 18.75rem;
`;

const WorkWithUsForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="name"
        id="name"
        label={<FormattedMessage id="WorkWithUs.Name" />}
        icon={<Account width={18} height={18} />}
        ref={register({ required: true })}
      />
      <TextField
        name="email"
        id="email"
        label={<FormattedMessage id="WorkWithUs.Email" />}
        icon={<Email width={18} height={18} />}
        ref={register({ required: true })}
      />
      <TextField
        name="phone"
        id="phone"
        label={<FormattedMessage id="WorkWithUs.Phone" />}
        icon={<Phone width={18} height={18} />}
        ref={register({ required: true })}
      />
      <BtnSubmit>
        <FormattedMessage id="WorkWithUs.Submit" />
      </BtnSubmit>
    </Form>
  );
};

export default WorkWithUsForm;
