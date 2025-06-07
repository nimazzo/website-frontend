import {useMemo} from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
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

  const screenshot = useMemo(() => (
    <Box
      component="img"
      src={props.project.screenshotUrl ?? ""}
      alt={`${props.project.title} screenshot`}
      sx={{
        width: '100%',
        maxWidth: 350,
        height: 'auto',
        borderRadius: 2,
        boxShadow: theme.shadows[3],
        objectFit: 'contain',
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
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={props.isEven ? 'row-reverse' : 'row'}
      >
        <Grid sx={{maxWidth: '65%'}}>
          <Typography variant="h5" gutterBottom>
            {props.project.title}
          </Typography>
          <Typography variant="body1" component="p">
            {props.project.description}
          </Typography>
          <Box sx={{mb: 2}}>
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
        </Grid>

        <Grid
          sx={{
            maxWidth: '30%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {screenshot}
        </Grid>
      </Grid>
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