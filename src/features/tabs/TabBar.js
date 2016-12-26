import React, { PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';

import Tab from './Tab';

function TabBar({
  tabs,
  currentTab,
  onTabClick,
  ...restProps
}) {
  return (
    <div>
      <Menu tabular attached="top" {...restProps}>
        {tabs.map(({ name, label }) => {
          return (
            <Tab
              onClick={onTabClick}
              key={name}
              label={label}
              name={name}
              active={currentTab === name}
            />
          );
        })}
      </Menu>
    </div>
  );
}

TabBar.propTypes = {
  tabs: PropTypes.array,
  currentTab: PropTypes.string,
  onTabClick: PropTypes.func,
};

export default TabBar;
