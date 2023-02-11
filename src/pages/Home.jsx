// React Imports
import React, { useState } from "react";

// Component Imports
import Navbar from "../components/Navbar";
import WelcomeMessage from "../components/WelcomeMessage";
import About from "../components/About";
import { Projects } from "../components/Projects";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

// Language Imports
import { useTranslation } from "react-i18next";
import languages from "../language/languages";

function Home() {
  // Hook imported from 'react-i18next'
  const { t } = useTranslation();

  // TODO Might need to code this differently
  let loc = "http://localhost:5173/";
  let params = new URL(document.location).searchParams;
  let language = params.get("lng");

  const [lang, setLang] = useState(language);

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <div className="app bg-primary-100">
      <Navbar t={t} languages={languages} onChange={handleChange} lang={lang} />
      <main>
        <WelcomeMessage t={t} />
        <About t={t} />
        <Projects t={t} />
        <Connect t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default Home;
