import React, {useEffect, useState} from "react";
import {DefaultContent} from "./DefaultContent.ts";
import {ContentContext, type ContentData} from "./ContentContext.tsx";

export const ContentProvider = ({children}: { children: React.ReactNode }) => {
  const [content, setContent] = useState<ContentData>(DefaultContent);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/content')
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
  }, []);

  return (
    <ContentContext.Provider value={{content, setContent, loading}}>
      {children}
    </ContentContext.Provider>
  );
};