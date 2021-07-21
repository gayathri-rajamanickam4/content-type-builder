import React from 'react';
import InputGroup from '@beans/input-group';
import Button from '@beans/button';
import Field from './Field';
import { FieldArray } from 'formik';

class Section extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     // this.state = {
  //     //   fields: [],
  //     // };
  //   }

  handleAddFieldClick = (pushFn) => {
    const newField = {
      name: '',
      type: 'text',
      label: '',
      validations: [],
    };
    pushFn(newField);
  };

  render() {
    const { onRemoveSection, index, onChange, section } = this.props;

    return (
      <>
        <InputGroup
          labelText='Enter Section name'
          required
          name={`sections.${index}.name`}
          onChange={onChange}
          value={section.name}
        />
        <InputGroup
          labelText='Section Title'
          required
          name={`sections.${index}.sectionTitle`}
          onChange={onChange}
          value={section.sectionTitle}
        />
        <br></br>

        <Button variant='primary' onClick={(e) => onRemoveSection(index)}>
          Remove this section
        </Button>

        <FieldArray name={`sections.${index}.fields`}>
          {({ insert, remove, push }) => {
            return (
              <>
                <Button
                  variant='primary'
                  onClick={() => this.handleAddFieldClick(push)}
                >
                  Add Field
                </Button>
                {section.fields.map((field, fieldIndex) => (
                  <Field
                    sectionIndex={index}
                    fieldIndex={fieldIndex}
                    onChange={onChange}
                    field={field}
                  ></Field>
                ))}
              </>
            );
          }}
        </FieldArray>
        {/* {this.state.fields.map((field) => (
          <Field></Field>
        ))} */}
      </>
    );
  }
}

export default Section;
