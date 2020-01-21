import React from 'react';
import { connect } from 'react-redux';
import { changeText, changeCounter } from '../interactive/actions';

export default (WrappedComponent) => {
  const mapStateToProps = ({ interactive }) => ({
    RX_count: interactive.count,
    RX_text: interactive.text,
  });

  const mapDispatchToProps = (dispatch) => ({
    RX_changeText: (text) => dispatch(changeText(text)),
    RX_changeCount: (numb) => dispatch(changeCounter(numb)),
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
