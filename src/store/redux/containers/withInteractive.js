import React from 'react';
import { connect } from 'react-redux';
import { changeText, changeCounter } from '../interactive/actions';

export default (WrappedComponent) => {
  const mapStateToProps = ({ interactive }) => ({
    R_count: interactive.count,
    R_text: interactive.text,
  });

  const mapDispatchToProps = (dispatch) => ({
    R_changeText: (text) => dispatch(changeText(text)),
    R_changeCount: (numb) => dispatch(changeCounter(numb)),
  });

  function Component(props) {
    return (<WrappedComponent {...props} />);
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  Component.displayName = `WithInteractive${wrappedComponentName}`;

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
