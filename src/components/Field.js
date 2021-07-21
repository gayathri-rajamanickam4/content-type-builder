import React from 'react';
import InputGroup from '@beans/input-group';
import { FieldArray } from 'formik';
import Validation from './Validation';
import Button from '@beans/button';
import DropdownGroup from '@beans/dropdown-group';

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
      <DropdownGroup
        required
        defaultSelectedValue=''
        name={`sections.${sectionIndex}.fields.${fieldIndex}.type`}
        labelText='Enter UI widget to be displayed' /** UI control to be displayed; show dropdown with supported UI control list */
        onChange={onChange}
        value={field.type}
      >
        <option value=''>Select option</option>
        <option value='text'>text box</option>
        <option value='enum'>drop down</option>
      </DropdownGroup>
      {field.type === 'enum' && (
        <InputGroup
          labelText='Enter options to be displayed in the dropdown (comma separated)'
          required
          name={`sections.${sectionIndex}.fields.${fieldIndex}.options`}
          onChange={onChange}
          value={field.options}
        />
      )}
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
