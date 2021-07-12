import React from 'react';
import InputGroup from '@beans/input-group';
import { FieldArray } from 'formik';
import Button from '@beans/button';

const Validation = (props) => {
  const { sectionIndex, fieldIndex, validationIndex, onChange, validation } =
    props;

  const handleAddValidationParamsClick = (pushFn) => {
    const newValidationParams = '';
    pushFn(newValidationParams);
  };
  return (
    <>
      <InputGroup
        labelText='Enter validation type'
        required
        name={`sections.${sectionIndex}.fields.${fieldIndex}.validations.${validationIndex}.type`}
        onChange={onChange}
        value={validation.type}
      />
      <FieldArray
        name={`sections.${sectionIndex}.fields.${fieldIndex}.validations.${validationIndex}.params`}
      >
        {({ insert, remove, push }) => {
          return (
            <>
              <Button
                variant='primary'
                onClick={() => handleAddValidationParamsClick(push)}
              >
                Add Validation Parameters
              </Button>
              {validation.params.map((param, paramIndex) => (
                <InputGroup
                  labelText='Enter parameters for the validation'
                  required
                  name={`sections.${sectionIndex}.fields.${fieldIndex}.validations.${validationIndex}.params.${paramIndex}`}
                  onChange={onChange}
                  value={param}
                />
              ))}
            </>
          );
        }}
      </FieldArray>
    </>
  );
};

export default Validation;
