import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="header">
      <Image src="/logo.png" alt="Logo" width={500} height={500} />
      <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
        }
        .header h1 {
          color: #47663B;
        }
      `}</style>
    </div>
  );
}

export default Header;
