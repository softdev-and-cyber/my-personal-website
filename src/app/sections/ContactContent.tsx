import { Button } from 'primereact/button';

export default function ContactContent() {
  const handleClick = () => {
    window.location.href = 'mailto:thomas.devienne.pro@proton.me?subject=Contact';
  };

  return (
    <Button
      className='text-sm'
      label="Contact me"
      icon="pi pi-envelope"
      onClick={handleClick}
    />
  );
}
