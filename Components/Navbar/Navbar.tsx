import {
  Language as LanguageIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [navState, setNavState] = useState<{
    appSettings: boolean;
    navMenu: HTMLElement | null;
  }>({
    appSettings: false,
    navMenu: null
  });

  return (
    <nav>
      <Link href="/">
        <a>
          <h2>Albergo</h2>
        </a>
      </Link>
      <ul className="nav__navLinks">
        <li>
          <Link href="/search">
            <a>Find a hotel</a>
          </Link>
        </li>
        <li>
          <Link href="/blogs">
            <a>Stories</a>
          </Link>
        </li>
      </ul>
      <ul className="nav__actions">
        <li>
          <Link href="/becomePartner">
            <a className="nav__partnerBtn">Become a partner</a>
          </Link>
        </li>
        <li>
          <IconButton>
            <LanguageIcon />
          </IconButton>
        </li>
        <li>
          <IconButton
            onClick={(e) => {
              setNavState((prevNavState) => {
                return { ...prevNavState, navMenu: e.currentTarget };
              });
            }}
          >
            <MenuIcon />
          </IconButton>
        </li>
      </ul>
      <Menu
        id="navMenu"
        anchorEl={navState.navMenu}
        open={Boolean(navState.navMenu)}
        onClose={() =>
          setNavState((prevNavState) => {
            return { ...prevNavState, navMenu: null };
          })
        }
      >
        <MenuItem>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/help">
            <a>Help center</a>
          </Link>
        </MenuItem>
      </Menu>
      <IconButton className="nav__hamburger">
        <MenuIcon />
      </IconButton>
    </nav>
  );
};

export default Navbar;
