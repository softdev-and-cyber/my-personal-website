import { motion } from "framer-motion";
import styles from "@/app/ui/ScrollSections.module.css";
import { SectionItem } from "@/types/SectionItem";
import { strToHtmlId } from "@/lib/stringUtils";
import { birthstone } from "@/app/ui/fonts";

interface ScrollSectionsProps {
  allSections: SectionItem[];
}

export default function ScrollSections({ allSections }: ScrollSectionsProps) {
  return (
    <div className={styles.timelineWrapper}>
      {allSections.map((section) => (
        <section
          key={section.label}
          id={strToHtmlId(section.label)}
          className={styles.section}
        >
          <motion.div
            className={styles.content}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h3 className={`${birthstone.className} text-7xl font-bold mb-2 text-white`}>
              {section.label}
            </h3>
            <div className="text-base">{section.content}</div>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
