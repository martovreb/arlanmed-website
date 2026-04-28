import { useEffect } from "react";
import Home from "./Home";

// Legacy index route — Layout/LanguageProvider are provided by App.
const Index = () => {
  useEffect(() => {
    document.title = "ArlanMed — Семейная стоматология №1 в Алматы | 4 филиала";
  }, []);
  return <Home />;
};

export default Index;
