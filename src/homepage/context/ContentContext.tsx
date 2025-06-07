import {createContext, useContext} from 'react';
import DefaultContent from "../data/DefaultContent.ts";

export interface ContentData {
  about: {
    name: string;
    domain: string;
    description: string[]
    photo: string | null;
    country: string;
    github: {
      text: string;
      url: string;
    }
    email: string;
    footer: string;
  }
  education: {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
    grade: string,
    icon: string,
  }[]
  skills: {
    title: string;
    withLevels?: boolean;
    items: { name: string, level?: number }[];
  }[]
  projects: {
    title: string;
    description: string;
    techStack: string[];
    screenshotUrl: string | null;
    githubUrl: string;
  }[]
}

interface ContentContextType {
  content: ContentData;
  setContent: (content: ContentData) => void;
  loading: boolean;
}

export const ContentContext = createContext<ContentContextType>({
  content: DefaultContent,
  setContent: () => {
  },
  loading: true,
});

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};

