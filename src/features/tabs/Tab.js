import React, { PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';

function Tab({
  name,
  label,
  onClick,
  active,
}) {
  const onClickMenu = () => onClick(name);
  return (
    <Menu.Item
      name={name}
      content={label}
      active={active}
      onClick={onClickMenu}
    />
  );
}

Tab.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tab;
