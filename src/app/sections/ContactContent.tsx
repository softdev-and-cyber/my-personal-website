import { Button } from 'primereact/button';

export default function ContactContent() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:thomas.devienne.pro@proton.me?subject=Contact';
  };

  return (
    <div className="flex flex-column gap-3 flex-wrap justify-content-center pt-4">
      <div className="flex flex-row justify-content-center gap-2">
        <Button
          className="text-sm"
          label="Email me"
          icon="pi pi-envelope"
          onClick={handleEmailClick}
        />
        <Button
          className="text-sm p-button-info"
          label="LinkedIn"
          icon="pi pi-linkedin"
          onClick={() => window.open('https://www.linkedin.com/in/thomas-devienne/', '_blank')}
        />
        <Button
          className="text-sm p-button-help"
          label="Root-Me"
          icon="pi pi-lock" // PrimeIcons doesn't have a Root-Me icon, so we use lock
          onClick={() => window.open('https://www.root-me.org/MrNoDataFound', '_blank')}
        />
      </div>
      <div className="flex flex-row justify-content-center gap-2">
        <Button
          className="text-sm p-button-secondary"
          label="GitHub Pro"
          icon="pi pi-github"
          onClick={() => window.open('https://github.com/softdev-and-cyber', '_blank')}
        />
        <Button
          className="text-sm p-button-secondary"
          label="GitHub Perso"
          icon="pi pi-github"
          onClick={() => window.open('https://github.com/T0my-commits', '_blank')}
        />
      </div>
    </div>
  );
}
