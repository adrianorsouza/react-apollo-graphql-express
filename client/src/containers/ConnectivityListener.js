import React from 'react';
import styled from 'styled-components';
const Toast = styled.div`
  position: fixed;
  padding: 1rem;
  border-radius: 3px;
  background: var(--color-indigo-100);
  right: 1rem;
  bottom: 1rem;
  opacity: 0;
  &.in {
    opacity: 1;
  }
`;

export default class ConnectivityListener extends React.Component {
  toast = React.createRef();
  state = {
    isOnline: window ? window.navigator.onLine : false,
    content: null,
    type: null,
  };

  message = {
    connected: 'app online',
    disconnected: 'app offline',
  };

  handleOnlineStatus = (e) => {
    this.setState({
      isOnline: e.type !== 'offline',
      content:
        e.type !== 'offline'
          ? this.message.connected
          : this.message.disconnected,
      type: e.type !== 'offline' ? 'success' : 'error',
    });
  };

  componentDidMount(prevProps, prevState, snapshot) {
    window.addEventListener('online', this.handleOnlineStatus);
    window.addEventListener('offline', this.handleOnlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnlineStatus);
    window.removeEventListener('offline', this.handleOnlineStatus);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.isOnline === this.state.isOnline) return;

    this.toast.current.classList.add('in');

    setTimeout(() => {
      this.toast.current.classList.remove('in');
    }, 3000);
  }

  render() {
    // NOTE:
    // ADD add a toast container here to render a message in the screen
    return <Toast ref={this.toast}>{this.state.content}</Toast>;
  }
}
