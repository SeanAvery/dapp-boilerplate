import React, { Component } from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import SideNav from './SideNav'
import App from '../components/App';
import Wallet from './Wallet'

export default class AppContainer extends Component {
  // componentWillMount() {
  //   this.setState({ loading: true });
  // }
  //
  // componentDidMount() {
  //   this.fetchData();
  // }
  //
  // fetchData() {
  //   const dataRequest = new Promise((resolve) => {
  //     setTimeout(() => resolve({ example: 'OK' }), 1000);
  //   });
  //   dataRequest.then(data => {
  //     this.setState({ ...data, loading: false });
  //   });
  // }

  render() {
    return (
      <MuiThemeProvider muiThem={getMuiTheme(darkBaseTheme)}>
        <div>
          <SideNav />
          <Wallet />
        </div>
      </MuiThemeProvider>

    );
  }
}
