'use client';

// composables & utils
import { 
  useState, 
  useEffect 
} from "react";
import { strToHtmlId } from "@/lib/stringUtils";

// ui components
import { Button } from 'primereact/button';
import ButtonsBar from "@/app/ui/ButtonsBar";
import MainMenubar from "@/app/ui/MainMenubar";
import CustomParticules from "@/app/ui/CustomParticules";
import ScrollSections from "@/app/ui/ScrollSections";
import ScrollIndicator from "@/app/ui/ScrollIndicator";

// data
import { allSections } from "@/data/allSections";
import { allProjects } from "@/data/allProjects";

// animations
import {
    motion,
    AnimatePresence,
} from "motion/react";

// fonts
import { 
  calSans, 
  inter 
} from '@/app/ui/fonts';

const defaultSection = allSections[0];

// Nouveau composant uniquement pour le fond coloré
function BackgroundColorLayer({ color }: { color: string }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        backgroundColor: color,
        transition: 'background-color 0.3s ease',
        pointerEvents: 'none',
      }}
    />
  );
}

export default function App() {

  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target.id) {
            const section = allSections.find(s => {
              const safeId = strToHtmlId(s.label);
              return safeId === entry.target.id;
            });
            const newColor = section ? section.color : defaultSection.color;
            if (section) {
              setActiveSection(section);
            }
          }
        }
      },
      {
        threshold: 0.5
      }
    );

    allSections.forEach(section => {
      const safeId = strToHtmlId(section.label);
      const el = document.getElementById(safeId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <MainMenubar
        allSections={allSections.slice(1)}
        allProjects={allProjects}
      />

      {/* Couche de fond colorée en sibling */}
      <BackgroundColorLayer color={activeSection.color} />

      {/* Particules au-dessus du fond coloré */}
      <CustomParticules />

      {/* Contenu au-dessus */}
      <section id="thomas-devienne" className="relative min-h-screen w-full flex flex-column justify-content-center align-items-center z-10" style={{ height: '90%' }}>

        <div className="relative">
          <p className={`${calSans.className} text-white text-1xl md:text-2xl`}>
            Software Developer, spe. cybersecurity
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.h1
            key={activeSection.label}
            className={`${calSans.className} text-white text-7xl md:text-8xl font-bold mb-4 text-center px-8 border-round-3xl mt-0`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeSection.label}
          </motion.h1>
        </AnimatePresence>

        <ButtonsBar
          buttons={allSections.slice(1)}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          defaultSection={defaultSection}
          className="p-d-flex p-hidden-sm p-d-flex-md"
        />

        <div 
          className="absolute flex flex-column align-items-center"
          style={{
            left: '48%',
            bottom: '10%',
          }}>
          <Button
            label="Explore"
            onClick={() => document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${inter.className} p-0 border-none bg-transparent text-white text-base font-semibold relative overflow-hidden hover:underline transition-ease-in-out`}
          />
          <div className="relative h-6 mt-1">
            <span className="text-white text-3xl animate-bounce">↓</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 origin-left duration-300"></span>
          </div>
        </div>

      </section>

      {/* === SCROLLABLE SECTIONS === */}
      <div className="relative z-10">
        <ScrollSections
          allSections={allSections.slice(1)}
        />
      </div>
      <ScrollIndicator sections={allSections} />

    </div>
  );
}
