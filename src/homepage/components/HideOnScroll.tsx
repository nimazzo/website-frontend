import {type ReactElement, useEffect, useState} from "react";
import {
  Slide,
  useScrollTrigger,
} from "@mui/material";

interface HideOnScrollProps {
  children: ReactElement;
  forceShow?: boolean;
}

const HideOnScroll = ({children, forceShow = false}: HideOnScrollProps) => {
  const trigger = useScrollTrigger({threshold: 100});
  const [hoveringTop, setHoveringTop] = useState(false);

  useEffect(() => {
    const handleMouseHovering = (e: MouseEvent) => {
      setHoveringTop(e.clientY < 50);
    };

    window.addEventListener('mousemove', handleMouseHovering);
    return () => window.removeEventListener('mousemove', handleMouseHovering);
  }, []);

  const shouldShow = !trigger || hoveringTop || forceShow;

  return (
    <Slide appear={false} direction={"down"} in={shouldShow}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;