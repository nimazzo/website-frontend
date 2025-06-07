import {
  Box,
  Card,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";

import {useTranslation} from "react-i18next";

import {icons} from "../data/icons.tsx";
import {useContent} from "../context/ContentContext.tsx";
import Section from "./Section.tsx";
import BlurredOverlay from "./BlurredOverlay.tsx";

const getGradeColor = (grade: string): 'success' | 'warning' | 'default' => {
  const numeric = parseFloat(grade);
  if (numeric <= 1.3) return 'success';
  if (numeric <= 2.0) return 'warning';
  return 'default';
};

const Education = () => {
  const {t} = useTranslation();
  const {content, loading} = useContent();
  const theme = useTheme();

  return (
    <Section id="education">
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
                    label={`${t("education.grade")}: ${edu.grade}`}
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

export default Education;