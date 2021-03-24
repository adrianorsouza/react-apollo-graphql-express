import React from 'react';

export default class ConnectivityListener extends React.Component {
  state = {
    isOnline: window ? window.navigator.onLine : false,
    content: null,
    type: null,
  };

  message = {
    connected: 'app connected',
    disconnected: 'app disconnected',
  };

  handleOnlineStatus = (e) => {
    this.setState({
      isOnline: e.type !== 'offline',
      content: e.type !== 'offline' ? this.message.connected : this.message.disconnected,
      type: e.type !== 'offline' ? 'SUCCESS' : 'ERROR',
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

    // toast(this.state.content, {
    //   type: this.state.type,
    //   position: 'bottom-left',
    // });
  }

  render() {
    // NOTE:
    // ADD add a toast container here to render a message in the screen
    return <p>{this.state.content}</p>
  }
}
