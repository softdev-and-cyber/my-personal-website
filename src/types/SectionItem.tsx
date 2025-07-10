// raw data only
export interface SectionItemBase {
  label: string;
  icon: string;
  color: string;
  hueA: number;
  hueB: number;
  content: React.ReactNode;
};

// complet type
export interface SectionItem extends SectionItemBase {
  command: () => void;
};
