import React, { useState } from 'react';
import Section from './Section';
import Container from 'react-bootstrap/Container';
import InputGroup from '@beans/input-group';
import Button from '@beans/button';
import { FieldArray, Formik, Form } from 'formik';
import { CodeWrapper } from './style';

const ContentTypeBuilder = (props) => {
  const initialValues = {
    contentTypeTitle: '',
    sections: [],
  };

  const [formValues, setFormValues] = useState();

  const onSubmit = (values) => {
    console.log(values);
    setFormValues(values);
    alert(JSON.stringify(values, null, 2));
  };

  const handleAddSectionClick = (pushFn) => {
    const newSection = {
      name: '',
      type: 'text',
      label: '',
      sectionTitle: '',
      fields: [],
    };

    pushFn(newSection);
  };

  const handleRemoveSectionClick = (removeFn, index) => {
    removeFn(index);
  };

  // const { handleSubmit, handleChange } = formikProps;
  return (
    <Container>
      <h1>ContentTypeBuilder</h1>
      <CodeWrapper>
        {formValues && <strong>Submitted values:</strong>}
        {JSON.stringify(formValues, null, 2)}
      </CodeWrapper>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange }) => (
          <Form>
            <Button type='submit'>Submit</Button>
            <InputGroup
              id='contentTypeTitle'
              labelText='Content Type Title'
              placeholder='Enter Content Type Title'
              name='contentTypeTitle'
              required
              onChange={handleChange}
            />
            <br></br>

            <FieldArray name='sections'>
              {({ insert, remove, push }) => {
                return (
                  <>
                    <Button
                      variant='primary'
                      onClick={(e) => handleAddSectionClick(push)}
                    >
                      Add Section
                    </Button>
                    {values.sections.map((section, index) => (
                      <Section
                        index={index}
                        onRemoveSection={(index) =>
                          handleRemoveSectionClick(remove, index)
                        }
                        section={section}
                        onChange={handleChange}
                      ></Section>
                    ))}
                  </>
                );
              }}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ContentTypeBuilder;
