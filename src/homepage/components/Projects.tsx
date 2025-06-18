import {useMemo, useState} from "react";
import {Box, Button, Chip, Dialog, Grid, Typography, useTheme,} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

import {useContent} from "../context/ContentContext.tsx";
import Section from "./Section.tsx";
import BlurredOverlay from "./BlurredOverlay.tsx";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    screenshotUrl: string | null;
    githubUrl: string;
  },
  isEven: boolean;
}

const ProjectCard = (props: ProjectCardProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const screenshot = useMemo(() => (
    <Box
      component="img"
      src={props.project.screenshotUrl ?? ""}
      alt={`${props.project.title} screenshot`}
      sx={{
        width: '100%',
        height: 'auto',
        borderRadius: 2,
        boxShadow: theme.shadows[3],
        objectFit: 'cover',
      }}
    />
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [props.project.screenshotUrl]);

  return (
    <Grid
      sx={{
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        p: {xs: 2, md: 3},
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: props.isEven ? 'row-reverse' : 'row'},
          gap: 4,
        }}
      >
        <Box justifyItems={props.isEven ? 'end' : 'start'}>
          <Typography variant="h5" gutterBottom>
            {props.project.title}
          </Typography>
          <Typography variant="body1" component="p">
            {props.project.description}
          </Typography>
          <Box sx={{mt: 2, mb: 2}}>
            {props.project.techStack.map((tech: string) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
                sx={{mr: 1, mb: 1}}
              />
            ))}
          </Box>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon/>}
            href={props.project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </Button>
        </Box>

        <Box
          sx={{
            maxWidth: {xs: '100%', md: '50%'},
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={handleOpen}
        >
          {screenshot}
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <Box
          component="img"
          src={props.project.screenshotUrl ?? ""}
          alt={`${props.project.title} screenshot`}
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 2,
          }}
        />
      </Dialog>
    </Grid>
  );
};

const Projects = () => {
  const {content, loading} = useContent();

  return (
    <Section id="projects">
      <BlurredOverlay loading={loading}>
        <Grid container direction="column" spacing={6}>
          {content.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isEven={index % 2 === 1}
            />
          ))}
        </Grid>
      </BlurredOverlay>
    </Section>
  );
};

export default Projects;