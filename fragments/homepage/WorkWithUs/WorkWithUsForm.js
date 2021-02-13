import { useMemo } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { useCreateFeedback } from '@/queries/hooks/feedbacks';

import Button from '@/components/Button';
import { Account, Email, Phone } from '@/components/Icons';
import TextField from '@/components/TextField';

const Form = styled.form`
  margin: 0 auto;
  max-width: 56.25rem;
`;

const BtnSubmit = styled(Button)`
  margin-top: 5rem;
  width: 18.75rem;
`;

const WorkWithUsForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' });

  const createFeedback = useCreateFeedback();

  const { isDirty, isValid, isSubmitting } = formState;

  const isDisabledForm = useMemo(() => {
    return process.browser ? !isDirty || !isValid || isSubmitting : true;
  }, [isDirty, isValid, isSubmitting]);

  const onSubmit = (values) => {
    createFeedback({
      Name: values.name,
      Email: values.email,
      Phone: values.phone,
    }).then(() => {
      reset();
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="name"
        id="name"
        label={<FormattedMessage id="WorkWithUs.Name" />}
        icon={<Account width={18} height={18} />}
        ref={register({ required: true })}
        disabled={isSubmitting}
      />
      <TextField
        name="email"
        id="email"
        label={<FormattedMessage id="WorkWithUs.Email" />}
        icon={<Email width={18} height={18} />}
        ref={register({ required: true })}
        disabled={isSubmitting}
      />
      <TextField
        name="phone"
        id="phone"
        type="tel"
        label={<FormattedMessage id="WorkWithUs.Phone" />}
        icon={<Phone width={18} height={18} />}
        ref={register({ required: true })}
        disabled={isSubmitting}
      />
      <BtnSubmit disabled={isDisabledForm}>
        <FormattedMessage id="WorkWithUs.Submit" />
      </BtnSubmit>
    </Form>
  );
};

export default WorkWithUsForm;
