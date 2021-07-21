import React, { useState } from 'react';
import Section from './Section';
import Container from 'react-bootstrap/Container';
import InputGroup from '@beans/input-group';
import Button from '@beans/button';
import { FieldArray, Formik, Form } from 'formik';
import { CodeWrapper } from './style';

import { Accordion, AccordionGroup } from '@beans/accordion';

const ContentTypeBuilder = (props) => {
  const initialValues = {
    contentTypeTitle: '',
    sections: [],
  };

  const [formValues, setFormValues] = useState();
  const testSection = {
    name: '',
    type: 'array',
    label: '',
    sectionTitle: '',
    validationType: 'object',
    fields: [],
  };

  const onSubmit = (values) => {
    console.log(values);
    setFormValues(values);
    alert(JSON.stringify(values, null, 2));
  };

  const handleAddSectionClick = (pushFn) => {
    const newSection = {
      name: '',
      type: 'array',
      label: '',
      sectionTitle: '',
      validationType: 'object',
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
      <AccordionGroup>
        <Accordion id={`section-${0}`} label={`Section-${0}`}>
          <div>test</div>
        </Accordion>
      </AccordionGroup>
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
              onChange={(e) => {
                e.stopPropagation();
                handleChange(e);
              }}
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

                    {/* {values.sections.map((section, index) => (
                        <Accordion
                          id={`section-${index}`}
                          label={`Section-${index}`}
                        >
                          <Section
                            index={index}
                            onRemoveSection={(index) =>
                              handleRemoveSectionClick(remove, index)
                            }
                            section={section}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleChange(e);
                            }}
                          ></Section>
                        </Accordion>
                      ))} */}
                    {/* </AccordionGroup> */}
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
