// import React from 'react'
// import DropDownMenu from 'material-ui/DropDownMenu'
// import MenuItem from 'material-ui/MenuItem'
//
// export default class SideNav extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {value: 1}
//   }
//
//   hangleChange = (event, index, value) => this.setState({value})
//   render () {
//     return (
//       <DropDownMenu value={this.state.value} onChange={this.onChange}>
//         hello wro
//       </DropDownMenu>
//
//     )
//   }
// }
import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const styles = {
  customWidth: {
    width: 200,
  },
};

export default class SideNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Wallet" />
          <MenuItem value={2} primaryText="Invest" />
          <MenuItem value={3} primaryText="Work" />
          <MenuItem value={4} primaryText="Communicate" />
        </DropDownMenu>
      </div>
    )
  }
}
