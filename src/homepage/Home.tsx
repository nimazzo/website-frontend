import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Fab,
  Grid,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
  Zoom
} from "@mui/material";
import * as React from "react";
import {type ReactNode} from "react";
import {DarkMode, LightMode} from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import {useColorMode} from "../shared/UseColorMode.tsx";
import {useContent} from "./ContentContext.tsx";
import {ContentProvider} from "./ContentContextProvider.tsx";

const icons: Record<string, string | React.ReactNode> = {
  Java: '☕',
  Rust: '🦀',
  'C/C++': '📘',
  Python: '🐍',
  TypeScript: '🔷',
  'Spring Boot': '🌱',
  'Spring Security': '🔒',
  'Spring Data JPA': '📊',
  GraphQL: '🔺',
  Maven: '📦',
  Docker: '🐳',
  Jenkins: '👷‍♂️',
  JUnit: '🧪',
  Mockito: '🎭',
  Micrometer: '📈',
  Prometheus: '🔥',
  Grafana: '📊',
  PostgreSQL: '🐘',
  REST: '🔌',
  School: <SchoolIcon color="primary" sx={{mr: 1}}/>,
  Code: <CodeIcon color="primary" sx={{mr: 1}}/>,
};

const Home = () => {
  return (
    <>
      <ContentProvider>
        <Header/>
        <Content/>
        <ScrollToTopButton/>
        <Footer/>
      </ContentProvider>
    </>
  );
};

const sections = ['about', 'education', 'skills', 'projects'];

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

const Header = () => {
  const {content} = useContent();
  const theme = useTheme();
  const colorMode = useColorMode();

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const logout = () => {
    window.location.href = '/logout';
  };

  return (
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
          onClick={scrollToTop}
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            gap: 1,
            transformOrigin: 'left center',  // <-- add this line
            '&:hover': {
              opacity: 0.8,
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          <InitialsIcon/>
          <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
            {content.about.name}
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}>
          {sections.map((section) => (
            <Button
              key={section}
              color="inherit"
              href={`#${section}`}
              sx={{
                textTransform: 'capitalize',
                transition: 'color 0.3s ease',
                '&:hover': {color: theme.palette.secondary.light},
              }}
            >
              {section}
            </Button>
          ))}

          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <LightMode/> : <DarkMode/>}
          </IconButton>

          <IconButton onClick={logout} color="inherit" title="Logout">
            <LogoutIcon/>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const ScrollToTopButton: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Zoom in={trigger}>
      <Fab
        color="primary"
        size="small"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1300,
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon/>
      </Fab>
    </Zoom>
  );
};

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({id, title, children}) => {
  const {loading} = useContent();
  const theme = useTheme();

  return (
    <Box
      id={id}
      sx={{
        p: 4,
        borderRadius: 2,
        scrollMarginTop: '80px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ...(loading
          ? {} // no hover effect when loading
          : {
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 1,
        }}
      >
        <Link
          href={`#${id}`}
          underline="none"
          color="inherit"
          sx={{
            display: 'inline-block',
            '&:hover': {
              textDecoration: 'none',
              cursor: 'pointer',
            },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: 4,
                backgroundColor: theme.palette.primary.main,
                bottom: 0,
                left: 0,
                borderRadius: 2,
                opacity: 0.7,
              },
            }}
          >
            {title}
          </Typography>
        </Link>
      </Box>
      <Divider sx={{mb: 2}}/>
      {children}
    </Box>
  );
};

const About = () => {
  const {content, loading} = useContent();
  const theme = useTheme();

  return (
    <Section id="about" title="About Me">
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
              flexDirection: {xs: 'column', sm: 'row'},
              alignItems: 'center',
              gap: 4,
            }}
          >
            {/* Text */}
            <Box>
              {content.about.description.map((text, index) => (
                <Typography key={index} variant="body1" sx={{mb: 2}} dangerouslySetInnerHTML={{__html: text}}/>
              ))}

              <Typography variant="body2" color={theme.palette.text.secondary}>
                {content.about.footer}
              </Typography>
            </Box>

            {/* Avatar and GitHub */}
            <Box sx={{textAlign: 'center'}}>
              <Avatar
                alt={content.about.name}
                src={content.about.photo ?? ""}
                sx={{width: 240, height: 240, mx: 'auto'}}
              />
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

const getGradeColor = (grade: string): 'success' | 'warning' | 'default' => {
  const numeric = parseFloat(grade);
  if (numeric <= 1.3) return 'success';
  if (numeric <= 2.0) return 'warning';
  return 'default';
};

const Education = () => {
  const {content, loading} = useContent();
  const theme = useTheme();

  return (
    <Section id="education" title="Education">
      <Card
        elevation={3}
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          p: {xs: 2, md: 3},
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            pl: 4,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 20,
              height: '100%',
              width: 2,
              bgcolor: theme.palette.divider,
            },
          }}
        >
          <BlurredOverlay loading={loading}>
            {content.education.map((edu, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  mb: 6,
                  pl: 3,
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 6,
                    width: 16,
                    height: 16,
                    bgcolor: theme.palette.primary.main,
                    borderRadius: '50%',
                    border: `3px solid ${theme.palette.background.paper}`,
                  }}
                />

                <Typography variant="h6" component="h3" gutterBottom>
                  {edu.institution}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {edu.degree} in {edu.field}
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1, mt: 0.5}}>
                  <Typography variant="caption" color="text.secondary">
                    {edu.startDate} – {edu.endDate}
                  </Typography>
                  <Chip
                    size="small"
                    label={`Grade: ${edu.grade}`}
                    color={getGradeColor(edu.grade)}
                  />
                </Box>
                <Box sx={{display: 'flex', alignItems: 'flex-start', mt: 1}}>
                  {icons[edu.icon]}
                  <Typography variant="body2">{edu.description}</Typography>
                </Box>
              </Box>
            ))}
          </BlurredOverlay>
        </Box>
      </Card>
    </Section>
  );
};

const SkillLevel = ({level}: { level?: number }) => {
  if (level == null) return null;
  const filled = '●'.repeat(level);
  const empty = '○'.repeat(5 - level);
  return (
    <Typography variant="body2" color="text.secondary" fontFamily="monospace">
      {filled + empty}
    </Typography>
  );
};

const Skills = () => {
  const {content, loading} = useContent();
  const theme = useTheme();

  return (
    <Section id="skills" title="Skills">
      <BlurredOverlay loading={loading}>
        <Grid container direction="column" spacing={6}>
          {content.skills.map((group) => (
            <Grid
              key={group.title}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[1],
                p: {xs: 2, md: 3},
              }}
            >
              <Typography variant="h6" gutterBottom>
                {group.title}
              </Typography>

              {group.title === 'Programming Languages' ? (
                <Grid container spacing={2}>
                  {group.items.map((item) => (
                    <Grid
                      key={item.name}
                      sx={{display: 'flex', alignItems: 'center', gap: 2}}
                    >
                      <Box fontSize="1.8rem">{icons[item.name] || '🛠️'}</Box>
                      <Box sx={{flexGrow: 1}}>
                        <Typography variant="body1">{item.name}</Typography>
                        <SkillLevel level={item.level}/>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    mt: 1,
                    width: '100%',
                  }}
                >
                  {group.items.map((item) => (
                    <Box
                      key={item.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        px: 2,
                        py: 0.5,
                        fontSize: '1rem',
                        userSelect: 'none',
                        backgroundColor: theme.palette.action.hover,
                        flex: '1 0 auto',
                      }}
                    >
                      <Box fontSize="1.3rem">{icons[item.name] || '🛠️'}</Box>
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </BlurredOverlay>
    </Section>
  );
};

const Projects = () => {
  const {content, loading} = useContent();
  const theme = useTheme();

  return (
    <Section id="projects" title="Projects">
      <BlurredOverlay loading={loading}>
        <Grid container direction="column" spacing={6}>
          {content.projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <Grid
                key={project.title}
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
                  direction={isEven ? 'row-reverse' : 'row'}
                >
                  {/* Text Content */}
                  <Grid sx={{maxWidth: '65%'}}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" component="p">
                      {project.description}
                    </Typography>
                    <Box sx={{mb: 2}}>
                      {project.techStack.map((tech) => (
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
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source
                    </Button>
                  </Grid>

                  {/* Screenshot Image */}
                  <Grid
                    sx={{
                      maxWidth: '30%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={project.screenshotUrl ?? ""}
                      alt={`${project.title} screenshot`}
                      sx={{
                        width: '100%',
                        maxWidth: 350, // smaller max width
                        height: 'auto',
                        borderRadius: 2,
                        boxShadow: theme.shadows[3],
                        objectFit: 'contain',
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </BlurredOverlay>
    </Section>
  );
};

interface BlurredOverlayProps {
  loading: boolean;
  children?: ReactNode;
}

const BlurredOverlay = (props: BlurredOverlayProps) => {
  const {loading, children} = props;

  return (
    <Box sx={{position: 'relative', userSelect: 'none'}}>
      {/* Blurred content */}
      <Box
        sx={{
          '& > *': {
            filter: loading ? 'blur(5px)' : 'none',
            pointerEvents: loading ? 'none' : 'auto',
            transition: 'filter 0.3s ease',
          },
        }}
      >
        {children}
      </Box>

      {/* Spinner overlay */}
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <CircularProgress/>
        </Box>
      )}
    </Box>
  );
};

const Content = () => {
  return (
    <Container maxWidth="md" sx={{position: 'relative'}}>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
    </Container>
  );
}


const Footer = () => {
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
        © {new Date().getFullYear()} {content.about.name}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Home;