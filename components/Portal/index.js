import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  componentDidMount() {
    if (this.props.mount) {
      this.createPortal();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.mount !== prevProps.mount) {
      if (this.props.mount) {
        this.createPortal();
      } else {
        this.clearPortal();
      }
    }
  }

  componentWillUnmount() {
    this.clearPortal();
  }

  clearPortal = () => {
    if (this.state && this.state.portal && this.state.portal.parentNode) {
      this.state.portal.parentNode.removeChild(this.state.portal);
    }
  };

  createPortal = () => {
    const { appendInTag = 'body', portalDataName = 'portal-gate', portalElementTag = 'div' } = this.props;

    const newPortal = document.createElement(portalElementTag);
    newPortal.setAttribute('data-portal', portalDataName);

    document.getElementsByTagName(appendInTag)[0].appendChild(newPortal);

    this.setState({
      portal: newPortal,
    });
  };

  render() {
    const { children } = this.props;
    return this.state && this.state.portal ? ReactDOM.createPortal(children, this.state.portal) : null;
  }
}

export default Portal;
