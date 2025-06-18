import {useMemo} from "react";
import {Avatar, Box, Link, Stack, Typography, useTheme} from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';

import {useContent} from "../context/ContentContext.tsx";
import Section from "./Section.tsx";
import BlurredOverlay from "./BlurredOverlay.tsx";

const About = () => {
  const {content, loading} = useContent();
  const theme = useTheme();

  const avatar = useMemo(() => {
    return (
      <Avatar
        alt={content.about.name}
        src={content.about.photo ?? ""}
        sx={{width: 240, height: 240, mx: 'auto'}}
      />
    );
  }, [content.about.name, content.about.photo]);

  return (
    <Section id="about">
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          p: {xs: 2, md: 3},
        }}
      >
        <BlurredOverlay loading={loading}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {xs: 'column-reverse', md: 'row'},
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box>
              {content.about.description.map((text, index) => (
                <Typography key={index} variant="body1" sx={{mb: 2}} dangerouslySetInnerHTML={{__html: text}}/>
              ))}

              <Typography variant="body2" color={theme.palette.text.secondary}>
                {content.about.footer}
              </Typography>
            </Box>

            <Box sx={{textAlign: 'center'}}>
              {avatar}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                mt={1}
              >
                <GitHubIcon fontSize="small"/>
                <Link
                  href={content.about.github.url}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  color="inherit"
                >
                  {content.about.github.text}
                </Link>
              </Stack>
            </Box>
          </Box>
        </BlurredOverlay>
      </Box>
    </Section>
  );
};

export default About;