
import { Button } from 'primereact/button';

export default function ContactContent() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:thomas.devienne.pro@proton.me?subject=Contact';
  };

  return (
    <div className="flex flex-column gap-3 pt-4">
      {/* Ligne 1 */}
      <div className="flex flex-column sm:flex-row justify-content-center gap-2">
        <Button
          className="text-sm w-full sm:w-auto"
          label="Email me"
          icon="pi pi-envelope"
          onClick={handleEmailClick}
        />
        <Button
          className="text-sm p-button-info w-full sm:w-auto"
          label="LinkedIn"
          icon="pi pi-linkedin"
          onClick={() => window.open('https://www.linkedin.com/in/thomas-devienne/', '_blank')}
        />
        <Button
          className="text-sm p-button-help w-full sm:w-auto"
          label="Root-Me"
          icon="pi pi-lock"
          onClick={() => window.open('https://www.root-me.org/MrNoDataFound', '_blank')}
        />
      </div>

      {/* Ligne 2 */}
      <div className="flex flex-column sm:flex-row justify-content-center gap-2">
        <Button
          className="text-sm p-button-secondary w-full sm:w-auto"
          label="GitHub Pro"
          icon="pi pi-github"
          onClick={() => window.open('https://github.com/softdev-and-cyber', '_blank')}
        />
        <Button
          className="text-sm p-button-secondary w-full sm:w-auto"
          label="GitHub Perso"
          icon="pi pi-github"
          onClick={() => window.open('https://github.com/T0my-commits', '_blank')}
        />
      </div>
    </div>
  );
}
