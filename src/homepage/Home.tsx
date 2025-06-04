import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Link,
  Fab,
  Chip,
  Grid,
  Card,
  Zoom,
  useScrollTrigger,
  useTheme
} from "@mui/material";
import {type ReactNode} from "react";
import * as React from "react";
import {DarkMode, LightMode} from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import {useColorMode} from "../shared/UseColorMode.tsx";

const config = {
  name: "Nico Mazzotti",
  photo: "assets/photo.jpg",
  country: "Germany",
  github: "https://github.com/nimazzo",
  email: "mazzotti.nico@gmail.com"
}

const Home = () => {
  return (
    <>
      <Header/>
      <Content/>
      <ScrollToTopButton/>
      <Footer/>
    </>
  );
}

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
    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
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
  const theme = useTheme();
  const colorMode = useColorMode();

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
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
          <InitialsIcon />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {config.name}
          </Typography>
        </Box>

        <Box>
          {sections.map((section) => (
            <Button
              key={section}
              color="inherit"
              href={`#${section}`}
              sx={{
                textTransform: 'capitalize',
                transition: 'color 0.3s ease',
                '&:hover': { color: theme.palette.secondary.light },
              }}
            >
              {section}
            </Button>
          ))}

          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
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

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const theme = useTheme();

  return (
    <Box
      id={id}
      sx={{
        p: 4,
        borderRadius: 2,
        scrollMarginTop: '80px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
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
      <Divider sx={{ mb: 2 }} />
      {children}
    </Box>
  );
};

const About = () => {
  const theme = useTheme();

  return (
    <Section id="about" title="About Me">
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          p: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Text */}
          <Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Hi! I’m <strong>{config.name}</strong>, a software developer with a passion for building
              efficient and beautiful web applications. I specialize in full-stack development and love
              working with modern technologies like React, TypeScript, and Spring Boot.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              I’m especially interested in crafting seamless user experiences and writing clean,
              maintainable code. Outside of coding, I enjoy contributing to open source, hiking, and
              learning new things.
            </Typography>

            <Typography variant="body2" color={theme.palette.text.secondary}>
              Based in 🌍 {config.country} – open to remote or hybrid work opportunities.
            </Typography>
          </Box>

          {/* Avatar and GitHub */}
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              alt={config.name}
              src={config.photo}
              sx={{ width: 240, height: 240, mx: 'auto' }}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              mt={1}
            >
              <GitHubIcon fontSize="small" />
              <Link
                href={config.github}
                target="_blank"
                rel="noopener"
                underline="hover"
                color="inherit"
              >
                My GitHub
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};


type EducationEntry = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  grade: string;
  icon: React.ReactNode;
};

const educationData: EducationEntry[] = [
  {
    institution: 'Universität Duisburg-Essen',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    startDate: '2018',
    endDate: '2024',
    description:
      'Studied software engineering, algorithms, data structures, and systems programming. ' +
      'Deepened my knowledge in both theory and practice, and gained hands-on experience through various projects and teamwork challenges.',
    grade: '1.1',
    icon: <SchoolIcon color="primary" sx={{mr: 1}}/>,
  },
  {
    institution: 'Mercator Berufskolleg Moers',
    degree: 'Abitur',
    field: 'Mathematics and Computer Science',
    startDate: '2015',
    endDate: '2018',
    description:
      'Focused on advanced mathematics and computer science courses preparing for university studies. ' +
      'This was also my first real contact with programming — an experience that ignited my passion for software development and has driven me ever since.',
    grade: '1.0',
    icon: <CodeIcon color="primary" sx={{mr: 1}}/>,
  },
];

const getGradeColor = (grade: string): 'success' | 'warning' | 'default' => {
  const numeric = parseFloat(grade);
  if (numeric <= 1.3) return 'success';
  if (numeric <= 2.0) return 'warning';
  return 'default';
};

// const Education = () => {
//   const theme = useTheme();
//
//   return (
//     <Section id="education" title="Education">
//       <Box
//         sx={{
//           position: 'relative',
//           pl: 4,
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 20,
//             height: '100%',
//             width: 2,
//             bgcolor: theme.palette.divider,
//           },
//         }}
//       >
//         {educationData.map((edu, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: 'relative',
//               mb: 6,
//               pl: 3,
//             }}
//           >
//             {/* Timeline dot */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 left: 0,
//                 top: 6,
//                 width: 16,
//                 height: 16,
//                 bgcolor: theme.palette.primary.main,
//                 borderRadius: '50%',
//                 border: `3px solid ${theme.palette.background.paper}`,
//               }}
//             />
//
//             <Typography variant="h6" component="h3" gutterBottom>
//               {edu.institution}
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//               {edu.degree} in {edu.field}
//             </Typography>
//             <Box sx={{display: 'flex', alignItems: 'center', gap: 1, mt: 0.5}}>
//               <Typography variant="caption" color="text.secondary">
//                 {edu.startDate} – {edu.endDate}
//               </Typography>
//               <Chip
//                 size="small"
//                 label={`Grade: ${edu.grade}`}
//                 color={getGradeColor(edu.grade)}
//               />
//             </Box>
//             <Box sx={{display: 'flex', alignItems: 'flex-start', mt: 1}}>
//               {edu.icon}
//               <Typography variant="body2">{edu.description}</Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Section>
//   );
// };

const Education = () => {
  const theme = useTheme();

  return (
    <Section id="education" title="Education">
      <Card
        elevation={3}
        sx={{
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          p: { xs: 2, md: 3 },
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
          {educationData.map((edu, index) => (
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">
                  {edu.startDate} – {edu.endDate}
                </Typography>
                <Chip
                  size="small"
                  label={`Grade: ${edu.grade}`}
                  color={getGradeColor(edu.grade)}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 1 }}>
                {edu.icon}
                <Typography variant="body2">{edu.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </Section>
  );
};

// Placeholder icons (can be replaced with actual SVGs/images later)
const icons: Record<string, string> = {
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
};

type Skill = {
  name: string;
  level?: number;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: [
      {name: 'Java', level: 5},
      {name: 'Rust', level: 3},
      {name: 'C/C++', level: 3},
      {name: 'Python', level: 2},
      {name: 'TypeScript', level: 1},
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      {name: 'Spring Boot'},
      {name: 'Spring Security'},
      {name: 'Spring Data JPA'},
      {name: 'GraphQL'},
    ],
  },
  {
    title: 'Tools',
    skills: [
      {name: 'Maven'},
      {name: 'Docker'},
      {name: 'Jenkins'},
      {name: 'JUnit'},
      {name: 'Mockito'},
      {name: 'Micrometer'},
      {name: 'Prometheus'},
      {name: 'Grafana'},
    ],
  },
  {
    title: 'Other',
    skills: [
      {name: 'Design Patterns'},
      {name: 'Agile Development'},
      {name: 'Clean Code'},
      {name: 'TDD'},
      {name: 'REST'},
      {name: 'PostgreSQL'},
    ],
  },
];

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
  const theme = useTheme();

  return (
    <Section id="skills" title="Skills">
      <Grid container direction="column" spacing={6}>
        {skillGroups.map((group) => (
          <Grid
            key={group.title}
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[1],
              p: { xs: 2, md: 3 },
            }}
          >
            <Typography variant="h6" gutterBottom>
              {group.title}
            </Typography>

            {group.title === 'Programming Languages' ? (
              <Grid container spacing={2}>
                {group.skills.map((skill) => (
                  <Grid
                    key={skill.name}
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <Box fontSize="1.8rem">{icons[skill.name] || '🛠️'}</Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <SkillLevel level={skill.level} />
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
                {group.skills.map((skill) => (
                  <Box
                    key={skill.name}
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
                    <Box fontSize="1.3rem">{icons[skill.name] || '🛠️'}</Box>
                    <Typography variant="body2">{skill.name}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

type Project = {
  title: string;
  description: string;
  techStack: string[];
  screenshotUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'This is a cool project where I built something awesome using React and Spring Boot.',
    techStack: ['React', 'Spring Boot', 'TypeScript'],
    screenshotUrl: '/assets/photo.jpg',
    githubUrl: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description:
      'Another project focusing on backend APIs with GraphQL and MongoDB.',
    techStack: ['GraphQL', 'MongoDB', 'Node.js'],
    screenshotUrl: '/assets/photo.jpg',
    githubUrl: 'https://github.com/yourusername/project-two',
  },
  // add more projects here
];

const Projects = () => {
  const theme = useTheme();

  return (
    <Section id="projects" title="Projects">
      <Grid container direction="column" spacing={6}>
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <Grid
              key={project.title}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[1],
                p: { xs: 2, md: 3 },
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
                    src={project.screenshotUrl}
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
    </Section>
  );
};

const Content = () => {
  return (
    <Container maxWidth="md">
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
    </Container>
  );
}


const Footer = () => {
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
          href={config.github}
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <GitHubIcon/>
        </Link>
        <Link
          href={`mailto:${config.email}`}
          color="inherit"
        >
          <EmailIcon/>
        </Link>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} {config.name}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Home;