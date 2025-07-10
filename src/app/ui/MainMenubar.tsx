'use client';

import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import styles from '@/app/ui/MainMenubar.module.css';
import { inter } from './fonts';
import { SectionItem } from '@/types/SectionItem';
import { ProjectItem } from '@/types/ProjectItem';

interface MainMenubarProps {
  allSections: SectionItem[];
  allProjects: ProjectItem[];
}

export default function MainMenubar({
    allSections,
    allProjects
}: MainMenubarProps) {
    const items: MenuItem[] = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
        window.scrollTo({ top: 0 });
        }
    },
    {
        label: 'Sections',
        icon: 'pi pi-list',
        items: allSections
    },
    {
        label: 'Projects',
        icon: 'pi pi-folder',
        items: allProjects
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => document.getElementById('contact')?.scrollIntoView()
    }
    ];
    
    return (
        <div className={`${styles.menubarContainer} ${inter.className} fixed top-0 left-0 w-full`} style={{ zIndex: '9999', }}>
            <Menubar model={items} />
        </div>
    );
}
