import {
  Box,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import {useTranslation} from "react-i18next";

import {useContent} from "../context/ContentContext.tsx";

const Footer = () => {
  const {t} = useTranslation();
  const {content} = useContent();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 6,
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={2} mb={1}>
        <Link
          href={content.about.github.url}
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <GitHubIcon/>
        </Link>
        <Link
          href={`mailto:${content.about.email}`}
          color="inherit"
        >
          <EmailIcon/>
        </Link>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} {content.about.domain}. {t("legal.copyright")}
      </Typography>
    </Box>
  );
};

export default Footer;