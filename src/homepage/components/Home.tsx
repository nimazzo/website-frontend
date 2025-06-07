import {Container,} from "@mui/material";

import {useTranslation} from "react-i18next";

import {ContentProvider} from "../context/ContentContextProvider.tsx";
import Header from "./Header.tsx";
import ScrollToTopButton from "./ScrollToTopButton.tsx";
import About from "./About.tsx";
import Education from "./Education.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Footer from "./Footer.tsx";

import '../locales/i18n.ts';

const Home = () => {
  const {i18n} = useTranslation();
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'de';
  if (i18n.language !== savedLanguage) {
    i18n.changeLanguage(savedLanguage)
      .then(() => {
        console.log(`Language changed to ${savedLanguage}`);
      })
      .catch((err) => {
        console.error('Language switch failed:', err);
      });
  }

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

export default Home;