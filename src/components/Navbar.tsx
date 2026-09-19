import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { Close, DarkMode, LightMode, Menu as MenuIcon } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logov1.png';
import { useThemeMode } from '@/context/ThemeModeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollToId } from '@/lib/scroll';
import { profile } from '@/data/portfolio';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/icons';

const NAV_ITEMS = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'services', key: 'nav.services' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'blog', key: 'nav.blog' },
  { id: 'contact', key: 'nav.contact' },
] as const;

const SECTION_IDS = NAV_ITEMS.map(item => item.id);

export const Navbar = () => {
  const { mode, toggleMode } = useThemeMode();
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 899px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  const isHome = location.pathname === '/';

  const goTo = (id: string) => {
    setDrawerOpen(false);
    if (isHome) {
      scrollToId(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <AppBar position="sticky" color="transparent">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', gap: 1 }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            onClick={() => goTo('home')}
            sx={{
              height: 44,
              width: 44,
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          />

          {isMobile ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Button
                onClick={toggleLang}
                size="small"
                sx={{ minWidth: 36, color: 'text.secondary', fontWeight: 700 }}
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </Button>
              <Tooltip title={t('common.ariaMenu')}>
                <IconButton
                  onClick={() => setDrawerOpen(true)}
                  color="inherit"
                  edge="end"
                  aria-label={t('common.ariaMenu')}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          ) : (
            <Stack direction="row" alignItems="center" spacing={1}>
              {NAV_ITEMS.map(item => (
                <Button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  size="small"
                  sx={{
                    color: activeId === item.id ? 'primary.main' : 'text.secondary',
                    fontWeight: activeId === item.id ? 700 : 400,
                    textTransform: 'none',
                  }}
                >
                  {t(item.key)}
                </Button>
              ))}
              <Box sx={{ width: 12 }} />
              <Tooltip title={t('common.changeLang')}>
                <Button
                  onClick={toggleLang}
                  size="small"
                  sx={{ minWidth: 36, color: 'text.secondary', fontWeight: 700 }}
                >
                  {lang === 'es' ? 'EN' : 'ES'}
                </Button>
              </Tooltip>
              <Tooltip title={mode === 'dark' ? t('common.ariaLight') : t('common.ariaDark')}>
                <IconButton onClick={toggleMode} color="inherit" size="small">
                  {mode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
                </IconButton>
              </Tooltip>
              <IconButton
                component="a"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                size="small"
                aria-label="GitHub"
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                size="small"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Button
              onClick={toggleLang}
              size="small"
              sx={{ minWidth: 36, color: 'text.secondary', fontWeight: 700 }}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </Button>
            <IconButton onClick={() => setDrawerOpen(false)} color="inherit" aria-label="close">
              <Close />
            </IconButton>
          </Stack>
          <List>
            {NAV_ITEMS.map(item => (
              <ListItemButton
                key={item.id}
                onClick={() => goTo(item.id)}
                selected={activeId === item.id}
              >
                <ListItemText primary={t(item.key)} />
              </ListItemButton>
            ))}
          </List>
          <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: 'center' }}>
            <IconButton
              component="a"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href={`https://wa.me/${profile.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};
