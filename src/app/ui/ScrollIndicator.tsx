"use client";

import { useEffect, useState } from "react";
import styles from "@/app/ui/ScrollIndicator.module.css";
import { SectionItem } from "@/types/SectionItem";
import { strToHtmlId } from "@/lib/stringUtils";

interface ScrollIndicatorProps {
  sections: SectionItem[];
}

export default function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionOffsets = sections.map((section) => {
        const el = document.getElementById(strToHtmlId(section.label));
        return el?.offsetTop || 0;
      });

      const currentIndex = sectionOffsets.findIndex((offset, index) => {
        const nextOffset = sectionOffsets[index + 1] ?? Infinity;
        return scrollY >= offset - 100 && scrollY < nextOffset - 100;
      });

      if (currentIndex !== -1) {
        setActiveIndex(currentIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className={styles.indicatorWrapper}>
      {sections.map((section, i) => (
        <a
          key={section.label}
          href={`#${strToHtmlId(section.label)}`}
          className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`}
        />
      ))}
    </div>
  );
}
