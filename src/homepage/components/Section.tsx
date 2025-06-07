import {type ReactNode} from "react";
import {
  Box,
  Divider,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

import {useContent} from "../context/ContentContext.tsx";
import {useTranslation} from "react-i18next";

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section = (props: SectionProps) => {
  const {t} = useTranslation();

  const {loading} = useContent();
  const theme = useTheme();

  return (
    <Box
      id={props.id}
      sx={{
        p: 4,
        borderRadius: 2,
        scrollMarginTop: '80px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ...(loading
          ? {}
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
          href={`#${props.id}`}
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
            {t(`sections.${props.id}`)}
          </Typography>
        </Link>
      </Box>
      <Divider sx={{mb: 2}}/>
      {props.children}
    </Box>
  );
};

export default Section;