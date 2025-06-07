import type {ReactNode} from "react";

import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

export const icons: Record<string, string | ReactNode> = {
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
  Code: <CodeIcon color="primary" sx={{mr: 1}}/>
};




