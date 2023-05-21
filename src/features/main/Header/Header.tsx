import { Box, InputBase, Modal } from '@mui/material';
import { FC, PropsWithChildren, memo, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';

import styles from './Header.module.css';
import { LoginPage } from 'features/auth/pages/LoginPage';

/** Anime page component. */
const HeaderComponent: FC<PropsWithChildren> = ({ children }) => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    height: '50%',
    width: '100%',
    marginRight: '16px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '50%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      height: '50%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const [isAuthOpen, setAuthOpen] = useState(false);

  const handleAuthOpen = (() => {
    setAuthOpen(true);
  })

  const handleAuthClose = (() => {
    setAuthOpen(false);
  })

  return (
    <header>
      <div className={styles.menu_links}>
        <a href='/' className={styles['logo']}>AMR</a>
        <nav className={styles['AMR_links']}>
          <a className={styles['AMR_link']} href='/anime'>Аниме</a>
          <a className={styles['AMR_link']} href='/manga'>Манга</a>
          <a className={styles['AMR_link']} href='/'>Ранобе</a>
          <a className={styles['AMR_link']} href='/admin'>Админка</a>
          
        </nav>
      </div>
      <div className={styles.other_links}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <div className={styles['reg_links']}>
          <button className={styles['auth_button']} onClick={handleAuthOpen}>Вход</button>
          <a className={styles['reg_link']} href="reg.html">Регистрация</a>
        </div>
      </div>
      <Modal
        open={isAuthOpen}
        onClose={handleAuthClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal_box}>
          <LoginPage />
        </Box>
      </Modal>
    </header>
  );
};

export const Header = memo(HeaderComponent);
