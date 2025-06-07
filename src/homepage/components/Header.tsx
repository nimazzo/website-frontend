import * as React from "react";
import {useState} from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageIcon from '@mui/icons-material/Language';

import {useColorMode} from "../context/ColorModeContext.tsx";
import {useContent} from "../context/ContentContext.tsx";
import {useTranslation} from "react-i18next";

import HideOnScroll from "./HideOnScroll.tsx";

const InitialsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fontSize="14"
      fill="currentColor"
    >
      NM
    </text>
  </svg>
);

const sections = ['about', 'education', 'skills', 'projects'];

const Header = () => {
  const {content} = useContent();
  const theme = useTheme();
  const colorMode = useColorMode();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const languageMenuOpen = Boolean(anchorEl);
  const {t, i18n} = useTranslation();

  const handleLanguageMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    localStorage.setItem('preferredLanguage', lang);
    i18n.changeLanguage(lang)
      .then(() => {
        console.log(`Language changed to ${lang}`);
      })
      .catch((err) => {
        console.error('Language switch failed:', err);
      });
    handleLanguageMenuClose();
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const logout = () => {
    window.location.href = '/logout';
  };

  return (
    <HideOnScroll forceShow={languageMenuOpen}>
      <AppBar
        position="sticky"
        color="primary"
        elevation={4}
        sx={{
          backdropFilter: 'blur(8px)',
          backgroundColor: theme.palette.mode === 'light'
            ? 'rgba(63,81,181, 0.85)'
            : 'rgba(48,48,48, 0.85)',
          borderBottom: `2px solid ${theme.palette.secondary.main}`,
          transition: 'background-color 0.3s ease',
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              gap: 1
            }}
          >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              transformOrigin: 'left center',  // <-- add this line
              '&:hover': {
                opacity: 0.8,
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease',
              }
            }}>
              <InitialsIcon/>
              <Typography onClick={scrollToTop} variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                {content.about.name}
              </Typography>
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: {
              xs: '0px',
              md: '5px'
            },
            flexWrap: 'wrap',
          }}>
            {sections.map((section) => (
              <Button
                key={section}
                color="inherit"
                href={`#${section}`}
                sx={{
                  textTransform: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': {color: theme.palette.secondary.light},
                }}
              >
                {t(`sections.${section}`)}
              </Button>
            ))}

            <Box sx={{ml: 'auto'}}>
              <IconButton
                color="inherit"
                onClick={handleLanguageMenuClick}
                title={t("tooltips.language")}
              >
                <LanguageIcon/>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={languageMenuOpen}
                onClose={handleLanguageMenuClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
              >
                <MenuItem onClick={() => handleLanguageChange('de')}>Deutsch</MenuItem>
                <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
              </Menu>

              <IconButton onClick={colorMode.toggleColorMode} color="inherit" title={
                theme.palette.mode === 'dark' ? t("tooltips.lightMode") : t("tooltips.darkMode")
              }>
                {theme.palette.mode === 'dark' ? <LightMode/> : <DarkMode/>}
              </IconButton>

              <IconButton onClick={logout} color="inherit" title={t("tooltips.logout")}>
                <LogoutIcon/>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;