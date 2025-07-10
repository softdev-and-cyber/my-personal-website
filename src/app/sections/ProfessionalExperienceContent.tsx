import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ProfessionalExperienceContent() {
  const [activeIndex, setActiveIndex] = useState([0, 1]);

  return (
    <div
      className="w-full flex flex-col align-items-center justify-content-center text-black"
    >
    <div className="card" style={{ width: '90%', maxWidth: 1000 }}>
        <Accordion
        activeIndex={activeIndex}
        onTabChange={e => setActiveIndex(e.index)}
        className="bg-gray-800 text-900 border-round"
        >
        <AccordionTab
            header={
            <span className="text-900 flex align-items-center gap-2 w-full">
                <Avatar image="/img/rg_logo.png" shape="square" />
                <span className="font-bold white-space-nowrap">Cybersecurity apprentice - Penetration testing unit</span>
                <Badge value="2023-2025" severity="info" className="ml-auto" />
            </span>
            }
        >
            <div className="m-0 text-left">
                <ul className="mb-2">
                  <li className="mb-2">
                    <span className="card-sub-menu">Tool Development :</span>
                    <ul className="mb-2">
                      <li className="mb-2">
                        Forked and modified an open-source Vue.js/Express.js web app.<br />
                        📈 Impact: this initiative saved ~0,5 day of work per audit, for 200+ audits/year + automated recurring coordination tasks across three teams.
                      </li>
                      <li className="mb-2">
                        Built a Python CLI tool to parse and interpret (AI) security audit reports.<br /> 
                        📈 Impact: saved 30+ min. of work per report, across ~100 reports per year.
                      </li>
                      <li className="mb-2">Deployed a web app. on GCP using GitLab CI/CD, Docker, Kubernetes.</li>
                      <li className="mb-2">Developed an SMS phishing web platform using Python Flask and ADB.</li>
                    </ul>
                  </li> 
                  <li className="mb-2">
                    <span className="card-sub-menu">Audit Reporting :</span>
                    <ul className="mb-2">
                      <li className="mb-2">
                        Created a findings catalog referencing CWE ids<br />
                        📈 150+ vulns types classified.
                      </li>
                      <li className="mb-2">Designed a standardized audit report format for Renault Group, including a default template, writing guidelines, and identification of required fields.</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="card-sub-menu">Technical Security Audits & Mission Scoping :</span>
                    <ul className="mb-2">
                      <li className="mb-2">Conducted web pentests, Android & x64 DLL reverse engineering analysis.</li>
                      <li className="mb-2">Scoped technical security audits in compliance with UNR 155/156 (CSMS, SUMS) automotive cybersecurity regulations.</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="card-sub-menu">Technical Training :</span>
                    <ul className="mb-2">
                      <li className="mb-2">Malware development (AV & EDR evasion in ASM, process injection in C).</li>
                      <li className="mb-2">Distributed Systems (A.S. Tanenbaum & M. van Steen).</li>
                      <li className="mb-2">Access control strategies and enforcement mechanisms (DAC, MAC, RBAC).</li>
                    </ul>
                  </li>
                </ul>
            </div>
        </AccordionTab>

        <AccordionTab
            header={
            <span className="text-900 flex align-items-center gap-2 w-full">
                <Avatar image="/img/rg_logo.png" shape="square" />
                <span className="font-bold white-space-nowrap">Security configurator - Lead apprentice</span>
                <Badge value="2022-2023" severity="info" className="ml-auto" />
            </span>
            }
        >
            <div className="m-0 text-left">
                <ul className="mb-2">
                    <li className="mb-2">
                      <span className="card-sub-menu">Enhanced the security configurator: </span>
                      added new features with formulas & VBA, gathered needs and feedback, reviewed Renault's cybersecurity requirements, documented the tool, and trained international colleagues.<br />
                      📈 Impact: this tool handle cybersecurity req. for 400+ projects/year at Renault Group.
                    </li>
                </ul>
            </div>
        </AccordionTab>

        <AccordionTab
            header={
            <span className="text-900 flex align-items-center gap-2 w-full">
                <Avatar image="/img/occe_logo.png" shape="square" />
                <span className="font-bold white-space-nowrap">PHP developer - End-of-studies intership</span>
                <Badge value="2022-2022" severity="info" className="ml-auto" />
            </span>
            }
        >
            <div className="m-0 text-left">
              <ul className="mb-2">
                <li className="mb-2">
                  <span className="card-sub-menu">Web development</span>
                  <ul className="mb-2">
                    <li className="mb-2">Generating PDFs from web pages using FPDF;</li>
                    <li className="mb-2">Creating a script to encrypt user passwords and updating authentication methods in the project;</li>
                    <li className="mb-2">Modern design and development of certain CRAAD services following the MVC architecture;</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="card-sub-menu">Documentation</span>
                  <ul className="mb-2">
                    <li className="mb-2">Developing technical documentation for the CRAAD services;</li>
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
