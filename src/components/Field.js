import React from 'react';
import InputGroup from '@beans/input-group';
import { FieldArray } from 'formik';
import Validation from './Validation';
import Button from '@beans/button';

const Field = (props) => {
  const { sectionIndex, fieldIndex, onChange, field } = props;
  const handleAddValidationClick = (pushFn) => {
    const newValidation = {
      type: '',
      params: [],
    };
    pushFn(newValidation);
  };
  return (
    <>
      <InputGroup
        labelText='Enter field name'
        required
        name={`sections.${sectionIndex}.fields.${fieldIndex}.name`}
        onChange={onChange}
        value={field.name}
      />
      <InputGroup
        labelText='Enter UI widget to be displayed' /** UI control to be displayed; show dropdown with supported UI control list */
        required
        name={`sections.${sectionIndex}.fields.${fieldIndex}.type`}
        onChange={onChange}
        value={field.type}
      />
      <InputGroup
        labelText='Enter label to be displayed for the field'
        required
        name={`sections.${sectionIndex}.fields.${fieldIndex}.label`}
        onChange={onChange}
        value={field.label}
      />
      <InputGroup
        labelText='Enter type of value that would like to fill in this field' /** yup validator schema; show dropdown with yup validators */
        required
        name={`sections.${sectionIndex}.fields.${fieldIndex}.validationType`}
        onChange={onChange}
        value={field.validationType}
      />
      <FieldArray
        name={`sections.${sectionIndex}.fields.${fieldIndex}.validations`}
      >
        {({ insert, remove, push }) => {
          return (
            <>
              <Button
                variant='primary'
                onClick={() => handleAddValidationClick(push)}
              >
                Add Validation
              </Button>
              {field.validations.map((validation, validationIndex) => (
                <Validation
                  sectionIndex={sectionIndex}
                  fieldIndex={fieldIndex}
                  validationIndex={validationIndex}
                  onChange={onChange}
                  validation={validation}
                />
              ))}
            </>
          );
        }}
      </FieldArray>
    </>
  );
};

export default Field;
