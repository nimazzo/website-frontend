import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {ContentContext, type ContentData} from "./ContentContext.tsx";
import DefaultContent from "../data/DefaultContent.ts";

interface ContentProviderProps {
  children: React.ReactNode;
}

export const ContentProvider = (props: ContentProviderProps) => {
  const [content, setContent] = useState<ContentData>(DefaultContent);
  const [loading, setLoading] = useState<boolean>(true);
  const {i18n} = useTranslation();

  useEffect(() => {
    fetch(`/private/content?lang=${i18n.language}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => {
        console.error('Failed to load content, using default');
        setContent(DefaultContent);
        setLoading(false);
      });
  }, [i18n.language]);

  return (
    <ContentContext.Provider value={{content, setContent, loading}}>
      {props.children}
    </ContentContext.Provider>
  );
};