'use client';

import React, { useRef } from 'react';
import { SectionItem } from '@/types/SectionItem';

interface ButtonsBarProps {
  buttons: SectionItem[];
  activeSection: SectionItem;
  setActiveSection: (button: SectionItem) => void;
  defaultSection: SectionItem;
  className?: string;
}

export default function ButtonsBar({
  buttons,
  activeSection,
  setActiveSection,
  defaultSection,
  className = ''
}: ButtonsBarProps) {
  const isClickingRef = useRef(false);

  const handleClick = (item: SectionItem) => {
    isClickingRef.current = true; // 🔒 Bloque temporairement le onMouseLeave
    setActiveSection(item);
    item.command?.();

    // 🔓 Réactive le onMouseLeave après un délai
    setTimeout(() => {
      isClickingRef.current = false;
    }, 500); // Ajuste le timing selon le scroll
  };

  return (
    <div
      className={`relative hidden md:flex flex-row mb-5 border-round-3xl surface-400 px-5 ${className}`}
      style={{
        backdropFilter: 'blur(10px)',
        border: '1px solid white',
      }}
    >
      {buttons.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(item)}
          onMouseEnter={() => {
            if (!isClickingRef.current) setActiveSection(item);
          }}
          onMouseLeave={() => {
            if (!isClickingRef.current) setActiveSection(defaultSection);
          }}
          className="flex surface-0 items-center justify-center p-3 px-5 transition duration-300 cursor-pointer border border-white hover:scale-110"
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: activeSection.label === item.label ? item.color : '#444',
            color: activeSection.label === item.label ? 'white' : '#aaa',
          }}
        >
          <i className={item.icon} style={{ fontSize: '1.2rem' }}></i>
        </div>
      ))}
    </div>
  );
}
