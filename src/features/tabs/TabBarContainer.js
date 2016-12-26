import React, { Component, PropTypes } from 'react';

import TabBar from './TabBar';

export default class TabBarContainer extends Component {
  static propTypes = {
    tabs: PropTypes.array,
  };

  constructor(props) {
    super(props);
    const { tabs = [{ name: null }] } = props;
    const firstTab = tabs[0];
    this.state = {
      currentTab: firstTab.name,
    };
  }

  onTabClick = name => this.setState({ currentTab: name });

  render() {
    const { tabs, ...otherProps } = this.props;
    const { currentTab } = this.state;

    return (
      <TabBar
        {...otherProps}
        currentTab={currentTab}
        onTabClick={this.onTabClick}
        tabs={tabs}
      />
    );
  }
}
