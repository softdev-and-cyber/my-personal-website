'use client';

import { motion } from "framer-motion";
import { SectionItem } from "@/types/SectionItem";
import { strToHtmlId } from "@/lib/stringUtils";
import { birthstone } from "@/app/ui/fonts";

interface ScrollSectionsProps {
  allSections: SectionItem[];
}

export default function ScrollSections({ allSections }: ScrollSectionsProps) {
  return (
    <div className="w-full">
      {allSections.map((section) => (
        <section
          key={section.label}
          id={strToHtmlId(section.label)}
          className="min-h-screen flex align-items-center justify-content-center p-0 sm:p-4"
        >
          <motion.div
            className="w-full sm:w-10 md:w-8 surface-50 p-3 sm:p-5 border-round text-center flex flex-column justify-content-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h3
              className={`${birthstone.className} text-5xl sm:text-5xl md:text-7xl font-bold mb-3 text-white`}
            >
              {section.label}
            </h3>
            <div className="text-sm sm:text-base text-white line-height-3">
              {section.content}
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
