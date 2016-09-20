/*
 *
 * NavDrawer
 *
 */

import React from 'react';
import styles from './styles.css';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';

const NavDrawer = ({
  isOpen,
  onCloseClick,
  currentPage,
  links,
}) =>
  <div className={styles.navDrawer} >
    <Drawer
      open={isOpen}
    >
      <button onClick={onCloseClick}>close me</button>
      {links.filter(l => l.to !== currentPage)
            .map(l => <div onClick={onCloseClick} key={l.text}><Link to={l.to}>{l.text}</Link><br /></div>)}
    </Drawer>
  </div>;

NavDrawer.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  onCloseClick: React.PropTypes.func.isRequired,
  currentPage: React.PropTypes.string.isRequired,
  links: React.PropTypes.array,
};

export default NavDrawer;

