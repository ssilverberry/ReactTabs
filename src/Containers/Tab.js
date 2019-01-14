import React, { Component } from 'react';
import propTypes from 'prop-types';
import {TabTitle} from '../Styles/TabElements';

class Tab extends Component {
  static propTypes = {
    onClick: propTypes.func,
    tabTitle: propTypes.string,
    tabIndex: propTypes.number
  }
  
  state = {
    active: false,
    index: this.props.tabIndex
  }

  handleClick = () => {
    this.setState((state, props) => ({
      active: !state.active,
      index: props.tabIndex
    }));
    this.props.handleActive(this.state);
    console.log(this.state);
  } 
  render() {
    return (  
      <TabTitle onClick={this.handleClick} className={this.state.active ? 'active' : 'notactive'}>
        {this.props.tabTitle}
      </TabTitle>
    );
  }
}

export default Tab;