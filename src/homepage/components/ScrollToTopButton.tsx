import {Fab, useScrollTrigger, Zoom} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useTranslation} from "react-i18next";

const ScrollToTopButton = () => {
  const {t} = useTranslation();

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
        title={t("tooltips.scrollToTop")}
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

export default ScrollToTopButton;