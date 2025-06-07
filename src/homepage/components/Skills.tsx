import {
  Box,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import {icons} from "../data/icons.tsx";
import {useContent} from "../context/ContentContext.tsx";
import Section from "./Section.tsx";
import BlurredOverlay from "./BlurredOverlay.tsx";

interface SkillLevelProps {
  level: number;
}

const SkillLevel = (props: SkillLevelProps) => {
  const filled = '●'.repeat(props.level);
  const empty = '○'.repeat(5 - props.level);
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
    <Section id="skills">
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

              {group.withLevels ? (
                <Grid container spacing={2}>
                  {group.items.map((item) => (
                    <Grid
                      key={item.name}
                      sx={{display: 'flex', alignItems: 'center', gap: 2}}
                    >
                      <Box fontSize="1.8rem">{icons[item.name] || '🛠️'}</Box>
                      <Box sx={{flexGrow: 1}}>
                        <Typography variant="body1">{item.name}</Typography>
                        <SkillLevel level={item.level!}/>
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

export default Skills;