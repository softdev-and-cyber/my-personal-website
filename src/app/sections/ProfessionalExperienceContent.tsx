import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ProfessionalExperienceContent() {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  return (
    <div className="w-full flex flex-column align-items-center justify-content-center text-black px-4 sm:px-6 md:px-8">
      <div className="card w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <Accordion
          multiple
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(Array.isArray(e.index) ? e.index : [e.index])}
          className="bg-gray-800 text-900 border-round"
        >
          <AccordionTab
            header={
              <span className="text-left flex flex-column sm:flex-row align-items-center gap-2 w-full">
                <Avatar image="/img/rg_logo.png" shape="square" className="hidden md:block" />
                <span className="font-bold truncate sm:whitespace-nowrap">
                  Cybersecurity apprentice - Penetration testing unit
                </span>
                <Badge value="2023-2025" severity="info" className="ml-auto hidden md:block" />
              </span>
            }
          >
            <div className="m-0 text-left text-sm sm:text-base line-height-3">
              <ul className="pl-3 mb-2">
                <li className="mb-1 sm:mb-2">
                  <span className="card-sub-menu">Tool Development :</span>
                  <ul className="pl-3 mb-1 sm:mb-2">
                    <li className="mb-1 sm:mb-2">
                      Forked and modified an open-source Vue.js/Express.js web app.<br />
                      📈 Details: Specifications, RFI, RFP, programming with Express.js for PoC, etc.
                    </li>
                    <li className="mb-1 sm:mb-2">
                      Built a Python CLI tool to parse and interpret (AI) security audit reports.<br />
                      📈 Impact: This tool makes it possible to streamline recurring coordination tasks between three teams & save time during reporting.
                    </li>
                    <li className="mb-1 sm:mb-2">
                      Deployed a web app. on GCP using GitLab CI/CD, Docker, Kubernetes.
                    </li>
                    <li className="mb-1 sm:mb-2">
                      Developed an SMS phishing web platform using Python Flask and ADB.
                    </li>
                  </ul>
                </li>
                <li className="mb-1 sm:mb-2">
                  <span className="card-sub-menu">Audit Reporting :</span>
                  <ul className="pl-3 mb-1 sm:mb-2">
                    <li className="mb-1 sm:mb-2">
                      Created a findings catalog referencing CWE ids<br />
                      📈 150+ vulns types classified.
                    </li>
                    <li className="mb-1 sm:mb-2">
                      Designed a standardized audit report format for Renault Group, including a default template, writing guidelines, and identification of required fields.
                    </li>
                  </ul>
                </li>
                <li className="mb-1 sm:mb-2">
                  <span className="card-sub-menu">Technical Security Audits & Mission Scoping :</span>
                  <ul className="pl-3 mb-1 sm:mb-2">
                    <li className="mb-1 sm:mb-2">
                      Conducted web pentests, Android & x64 DLL reverse engineering analysis.
                    </li>
                    <li className="mb-1 sm:mb-2">
                      Scoped technical security audits in compliance with UNR 155/156 (CSMS, SUMS) automotive cybersecurity regulations.
                    </li>
                  </ul>
                </li>
                <li className="mb-1 sm:mb-2">
                  <span className="card-sub-menu">Technical Training :</span>
                  <ul className="pl-3 mb-1 sm:mb-2">
                    <li className="mb-1 sm:mb-2">
                      Malware development (AV & EDR evasion in ASM, process injection in C).
                    </li>
                    <li className="mb-1 sm:mb-2">
                      Distributed Systems (A.S. Tanenbaum & M. van Steen).
                    </li>
                    <li className="mb-1 sm:mb-2">
                      Access control strategies and enforcement mechanisms (DAC, MAC, RBAC).
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="text-left flex flex-column sm:flex-row align-items-center gap-2 w-full">
                <Avatar image="/img/rg_logo.png" shape="square" className="hidden md:block" />
                <span className="font-bold truncate sm:whitespace-nowrap">Security configurator - Lead apprentice</span>
                <Badge value="2022-2023" severity="info" className="ml-auto hidden md:block" />
              </span>
            }
          >
            <div className="m-0 text-left text-sm sm:text-base line-height-3">
              <ul className="pl-3 mb-2">
                <li className="mb-1 sm:mb-2">
                  <span className="card-sub-menu">Enhanced the security configurator: </span>
                  added new features with formulas & VBA, gathered needs and feedback, reviewed Renault&apos;s cybersecurity requirements, documented the tool, and trained international colleagues.<br />
                  📈 Impact: this tool handle cybersecurity req. for 400+ projects/year at Renault Group.
                </li>
              </ul>
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="text-left flex flex-column sm:flex-row align-items-center gap-2 w-full">
                <Avatar image="/img/occe_logo.png" shape="square" className="hidden md:block" />
                <span className="font-bold truncate sm:whitespace-nowrap">PHP developer - End-of-studies intership</span>
                <Badge value="2022-2022" severity="info" className="ml-auto hidden md:block" />
              </span>
            }
          >
            <div className="m-0 text-left text-sm sm:text-base line-height-3">
              <ul className="pl-3 mb-2">
                <li className="mb-1 sm:mb-2">
                  <span className="card-sub-menu">Web development</span>
                  <ul className="pl-3 mb-1 sm:mb-2">
                    <li className="mb-1 sm:mb-2">Generating PDFs from web pages using FPDF;</li>
                    <li className="mb-1 sm:mb-2">Creating a script to encrypt user passwords and updating authentication methods in the project;</li>
                    <li className="mb-1 sm:mb-2">Modern design and development of certain CRAAD services following the MVC architecture;</li>
                  </ul>
                </li>
                <li className="mb-1 sm:mb-2">
                  <span className="card-sub-menu">Documentation</span>
                  <ul className="pl-3 mb-1 sm:mb-2">
                    <li className="mb-1 sm:mb-2">Developing technical documentation for the CRAAD services;</li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};
