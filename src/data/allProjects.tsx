import { ProjectItem } from "@/types/ProjectItem";

export const allProjects: ProjectItem[] = [
    {
        label: 'SOS Phishing',
        icon: 'pi pi-shield',
        subtitle: 'Nuxt.js / Django DRF / PrimeVue / PrimeFlex / Docker',
        description: 'Application that allows phishing studies to be carried out easily. (prototype)',
        image: '/stub/sos_phishing.png',
        link: 'https://github.com/T0my-commits/SOS-Phishing'
    },
    {
        label: 'Notebook Express Demo',
        icon: 'pi pi-book',
        subtitle: 'Express.js / EJS / PostgreSQL / Sequelize / i18n / Docker',
        description: 'A simple note-taking web application built with Express.js, EJS, and PostgreSQL using the Sequelize ORM. ',
        image: '/stub/express_notebook.png',
        link: 'https://github.com/T0my-commits/Notebook-Express-Demo'
    },
    {
        label: 'My Personal Website',
        icon: 'pi pi-globe',
        subtitle: 'Next.js / HTML5 / CSS3 / PrimeVue / PrimeFlex / Vercel',
        description: 'My personal website online.',
        image: 'stub/personal_website.png',
        link: 'https://example.com/pdf-generator'
    },
    {
        label: 'My simple friendly win-rootkit',
        icon: 'pi pi-lock',
        subtitle: 'C / Visual Studio / Batch scripts',
        description: 'Simple rootkit for Windows 10/11 x86_64 created for a graded course project. ',
        image: '/stub/friendly_rootkit.png',
        link: 'https://github.com/T0my-commits/my-friendly-win-rootkit-edu'
    },
    {
        label: 'Meteor Survive',
        icon: 'pi pi-star',
        subtitle: 'Java / JavaFX / Design Patterns',
        description: '2D video game created with Java FX in pairs as part of a supervised project',
        image: '/stub/meteor_survive.png',
        link: 'https://github.com/T0my-commits/MeteorSurvive/tree/main'
    },
    {
        label: 'CryptUrMess',
        icon: 'pi pi-mobile',
        subtitle: 'Android / Java',
        description: '2D video game created with Java FX in pairs as part of a supervised project',
        image: '/stub/crypturmess.png',
        link: 'https://github.com/Blarckest/CryptUrMess/blob/main'
    }
];
