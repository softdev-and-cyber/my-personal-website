import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

export default function AboutMeContent() {
  return (
    <div className="grid justify-content-center gap-4 p-4 max-w-screen-lg m-auto">
      {/* HARD SKILLS */}
      <Card className="col-12 md:col-12 lg:col-4 line-height-3 text-black text-left">
        <h3 className="mb-3 font-bold text-base">HARD SKILLS</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Dev:</strong> Python, C, Web (HTML5, CSS3, Javascript, PHP, Django, Nuxt.js), Bash, C++, C#, .NET, Java, PostgreSQL.</li>
          <li><strong>DevOps:</strong> Kubernetes, Gitlab, Docker.</li>
          <li><strong>Security:</strong> Web, Android & AD pentesting, malware dev (Windows), code audit & reverse engineering, EBIOS RM, BloodHound, Nmap, Burp.</li>
          <li><strong>Office:</strong> Excel (formulas, macros)</li>
        </ul>
      </Card>

      {/* SOFT SKILLS */}
      <Card className="col-12 md:col-12 lg:col-4 line-height-3 text-black text-left">
        <h3 className="mb-3 font-bold text-base">SOFT SKILLS</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Proactive and motivated</li>
          <li>Team player (Agile, V-model, SAFe)</li>
          <li>Curious and eager to learn</li>
          <li>Rigorous and well-organized</li>
          <li>Comfortable in multicultural teams</li>
          <li>Versatile and adaptable</li>
        </ul>
      </Card>

      {/* MY TOOLS */}
      <Card className="col-12 md:col-12 lg:col-4 line-height-3 text-black text-left">
        <h3 className="mb-3 font-bold text-base">MY TOOLS</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Docker, Kubernetes</li>
          <li>Visual Studio Code, Python</li>
          <li>OWASP Suite, ANSSI guidelines and NIST SP 800-218 (SSDF)</li>
          <li>Gitlab CI/CD pipelines</li>
        </ul>
      </Card>

      {/* CYBER CERTIFICATIONS */}
      <Card className="col-12 md:col-12 lg:col-4 line-height-3 text-black text-left">
        <h3 className="mb-3 font-bold text-base">CYBER CERTIFICATIONS</h3>
        <div className="flex flex-row items-start">
          <Image
            src="/img/dante_logo.png"
            alt="Hack The Box logo"
            width={25}
            height={25}
          />
          <p className="ml-2 mt-0 pt-0">
            Dante Pro Lab – 2025<br />
            Hack The Box<br />
            ID: HTBCERT-C35ECCBDF3
          </p>
        </div>
        <div className="flex flex-row items-start">
          <Image
            src="/img/dfir_logo.png" 
            alt="Elpaco-Team Ransomware logo"
            width={25}
            height={25}
          />
          <p className="ml-2 mt-0 pt-0">Elpaco-Team Ransomware – 2025<br />DFIR Report</p>
        </div>
      </Card>

      {/* INTERESTS */}
      <Card className="col-12 md:col-12 lg:col-4 line-height-3 text-black text-left">
        <h3 className="mb-3 font-bold text-base flex items-center gap-2">
          <i className="" /> INTERESTS
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Contemporary theatre</li>
          <li>Photography</li>
          <li>Literature: science fiction, thrillers</li>
          <li>Cinema & video games: Matrix, Better Call Saul, Whiplash, Thronebreaker, Frostpunk, The Last of Us</li>
          <li>CTF competitions & IA tools</li>
        </ul>
      </Card>

      {/* CONTACT */}
      <Card className="col-12 md:col-12 lg:col-4 line-height-3 text-black text-left">
        <h3 className="mb-3 font-bold text-base flex items-center gap-2">
          <i className="" /> CONTACT
        </h3>
        <ul className="list-none list-inside space-y-1">
          <li>
            <i className="pi pi-envelope mr-2" />
            thomas.devienne.pro@proton.me
          </li>
          <li>
            <i className="pi pi-mobile mr-2" />
            (+33) 7 44 90 53 73<br/>(Please leave a voicemail)
          </li>
          <li>
            <i className="pi pi-globe mr-2" />
            Native French, Professional English
          </li>
          <li>
            <i className="pi pi-map-marker mr-2" />
            Open to relocation
          </li>
        </ul>
      </Card>
    </div>
  );
}
