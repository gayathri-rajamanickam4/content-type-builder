import React from 'react';

class AccordionGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openAccordion: props.accordion };
    this._onChange = this._onChange.bind(this);
  }

  _onChange({ action, id, accordions }) {
    this.setState({ accordions, openAccordion: { action, id } });
  }

  render() {
    const { children } = this.props;
    const { openAccordion } = this.state;

    return React.cloneElement(children, {
      accordion: openAccordion,
      children: React.Children.map(children.props.children, (child) =>
        React.cloneElement(child)
      ),
      onChange: this._onChange,
    });
  }
}

export default AccordionGroupContainer;
