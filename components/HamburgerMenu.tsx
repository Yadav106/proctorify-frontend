import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './HamburgerMenu.module.css'; // Import CSS module

interface SidebarProps {
  isOpen: boolean; 
}

const HamburgerMenu: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={styles.hamburgerMenu}>
      <button onClick={()=>{}}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default HamburgerMenu;
