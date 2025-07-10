import { nanoid } from 'nanoid';
import { ButtonSubmit, ErrorText, FormStyled, Input, Label } from './PhonebookForm.styled';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Enter name, please.'),
  number: yup.number().required('Enter number, please.'),
})

const FormError = ({name}) => {
  return (<ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText> } />)
}

const initialValues={ name: '', number: '' }


export const PhonebookForm = ({ onSubmit }) => {
  let nameId = nanoid();
  let numberId = nanoid();

  const handleSubmit = ({name, number}, {resetForm}) =>{
    onSubmit({name, number})
    resetForm()
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <FormStyled>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={nameId}
        />
        <FormError name='name' component="div" />
        <Label htmlFor={numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={numberId}
        />
        <FormError name='number' component="div" />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormStyled>
    </Formik>
  );
};
