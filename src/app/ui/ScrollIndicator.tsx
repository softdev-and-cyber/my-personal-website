"use client";

import { useEffect, useState } from "react";
import styles from "@/app/ui/ScrollIndicator.module.css";
import { SectionItem } from "@/types/SectionItem";
import { strToHtmlId } from "@/lib/stringUtils";

interface ScrollIndicatorProps {
  sections: SectionItem[];
  activeSection: SectionItem;
}

export default function ScrollIndicator({ sections, activeSection }: ScrollIndicatorProps) {
  return (
    <div className={styles.indicatorWrapper}>
      {sections.map((section) => {
        const isActive = section.label === activeSection.label;
        return (
          <a
            key={section.label}
            href={`#${strToHtmlId(section.label)}`}
            className={`${styles.dot} ${isActive ? styles.active : ""}`}
          />
        );
      })}
    </div>
  );
}
