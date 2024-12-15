import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { ProjectOverview } from "./components/ProjectOverview";
import { WorkflowSection } from "./components/WorkflowSection";
import { Resources } from "./components/Resources";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";
import Video from "./pages/Video";
import Icons from "./pages/projects/Icons";

function App() {
  const [language, setLanguage] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <div className="flex flex-col">
          <Icons />
          <Header
            language={language}
            setLanguage={setLanguage}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <main>
                    <Hero language={language} />
                    <Benefits language={language} />
                    <ProjectOverview language={language} />
                    <WorkflowSection language={language} />
                    <Resources language={language} />
                    <Community language={language} />
                  </main>
                </>
              }
            />
            <Route path="/videos" element={<Video />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
