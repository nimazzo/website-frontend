import type {ReactNode} from "react";

import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BoltIcon from '@mui/icons-material/Bolt';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonIcon from '@mui/icons-material/Person';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const icons: Record<string, string | ReactNode> = {
  'Java': '☕',
  'Rust': '🦀',
  'C/C++': '📘',
  'Python': '🐍',
  'TypeScript': '🔷',
  'Spring Boot': '🌱',
  'Spring Security': '🔒',
  'Spring Data JPA': '📊',
  'GraphQL': '🔺',
  'Maven': '📦',
  'Docker': '🐳',
  'Jenkins': '👷‍♂️',
  'JUnit': '🧪',
  'Mockito': '🎭',
  'Micrometer': '📈',
  'Prometheus': '🔥',
  'Grafana': '📊',
  'PostgreSQL': '🐘',
  'REST': '🔌',
  'School': <SchoolIcon color="primary" sx={{mr: 1}}/>,
  'Code': <CodeIcon color="primary" sx={{mr: 1}}/>,
  "analytics": <PsychologyIcon color="primary" sx={{mr: 1}}/>,
  "concepts": <BoltIcon color="primary" sx={{mr: 1}}/>,
  "commitment": <WhatshotIcon color="primary" sx={{mr: 1}}/>,
  "independent": <PersonIcon color="primary" sx={{mr: 1}}/>,
  "teamwork": <Diversity3Icon color="primary" sx={{mr: 1}}/>
};




