import { generateSectionItems } from "@/lib/generateSectionItems";
import IntroductionContent from "@/app/sections/IntroductionContent";
import DegreesContent from "@/app/sections/DegreesContent";
import ContactContent from "@/app/sections/ContactContent";
import PersonalProjectsContent from "@/app/sections/PersonalProjectsContent";
import ProfessionalExperienceContent from "@/app/sections/ProfessionalExperienceContent";
import AboutMeContent from "@/app/sections/AboutMeContent";
import { SectionItemBase } from "@/types/SectionItem";

export const rawSections: SectionItemBase[] = [
  { 
    label: 'Thomas Devienne',
    icon: '',
    color: '#000000',
    hueA: 0,
    hueB: 20,
    content: null,
  },
  {
    label: "Introduction",
    icon: "pi pi-user",
    color: "#2980b9",
    hueA: 30,
    hueB: 50,
    content: <IntroductionContent />,
  },
  {
    label: "Degrees",
    icon: "pi pi-book",
    color: "#1abc9c",
    hueA: 210,
    hueB: 230,
    content: <DegreesContent />,
  },
  { 
    label: 'Personal projects',
    icon: 'pi pi-code',
    color: '#3498db',
    hueA: 30,
    hueB: 50,
    content: <PersonalProjectsContent />,
  },
  { 
    label: 'Professional experience',
    icon: 'pi pi-briefcase',
    color: '#9b59b6',
    hueA: 60,
    hueB: 80,
    content: <ProfessionalExperienceContent />,
  },
  { 
    label: 'About me',
    icon: 'pi pi-bullseye',
    color: '#34495e',
    hueA: 30,
    hueB: 50,
    content: <AboutMeContent />
  },
  { 
    label: 'Contact',
    icon: 'pi pi-envelope',
    color: '#e74c3c',
    hueA: 180,
    hueB: 200,
    content: <ContactContent />,
  },
];

export const allSections = generateSectionItems(rawSections);
