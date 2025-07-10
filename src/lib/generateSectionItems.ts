import type { SectionItem, SectionItemBase } from "@/types/SectionItem";
import { strToHtmlId } from "@/lib/stringUtils";

export function generateSectionItems(rawItems: SectionItemBase[]): SectionItem[] {
  return rawItems.map((item) => ({
    ...item,
    command: () =>
      document
        .getElementById(strToHtmlId(item.label))
        ?.scrollIntoView(),
  }));
}
