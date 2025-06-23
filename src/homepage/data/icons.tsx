import type {ReactNode} from "react";

import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BoltIcon from '@mui/icons-material/Bolt';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonIcon from '@mui/icons-material/Person';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ScienceIcon from '@mui/icons-material/Science';
import CableIcon from '@mui/icons-material/Cable';
import ExtensionIcon from '@mui/icons-material/Extension';
import SoapIcon from '@mui/icons-material/Soap';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import StorageIcon from '@mui/icons-material/Storage';
import MonitorIcon from '@mui/icons-material/Monitor';
import {LinuxIcon, ReactIcon} from "./CustomIcons.tsx";

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
  'School': <SchoolIcon color="primary" sx={{mr: 1}}/>,
  'Code': <CodeIcon color="primary" sx={{mr: 1}}/>,
  "analytics": <PsychologyIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  "concepts": <BoltIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  "commitment": <WhatshotIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  "independent": <PersonIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  "teamwork": <Diversity3Icon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  "Design Patterns": <ExtensionIcon color="primary" sx={{mr: 1, mt: 1}}/>,
  "Clean Code": <SoapIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  "TDD": <ScienceIcon color="primary" sx={{mr: 1, mt: 1}}/>,
  "REST": <CableIcon color="primary" sx={{mr: 1, mt: 1}}/>,
  'Spring': <SettingsEthernetIcon color="primary" sx={{mr: 1, mt: 1}}/>,
  'Spring MVC': <IntegrationInstructionsIcon color="primary" sx={{mr: 1, mt: 1}}/>,
  'IntelliJ Idea': <TerminalIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  'Git': <GitHubIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  'Postman': <MailOutlineIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  'Swagger/OpenAPI': <DescriptionIcon color="primary" sx={{mr: 1, mt: 0.5}}/>,
  'React': <ReactIcon color="primary" sx={{mr: 1, mt: 1}}/>,
  'Postgres/SQL': <StorageIcon color="primary" sx={{mr: 1, mt: 1}}/>,
  'JavaFX': <MonitorIcon color="primary" sx={{mr: 1, mt: 1}}/>,
  'Linux': <LinuxIcon color="primary" sx={{mr: 1, mt: 1}}/>
};




