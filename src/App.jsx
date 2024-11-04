import React from 'react';
import LinkTree from './components/LinkTree';
import profileImage from './images/MarkTech_Logo2.png';

function App() {
  const links = [
    { name: 'YouTube', url: 'https://www.youtube.com/@MarkTech32' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@marktech32' },
    { name: 'Instagram', url: 'https://www.instagram.com/mark.tech32?igsh=N29kMHc3ZGY0b281&utm_source=qr' },
    { name: 'GitHub', url: 'https://github.com/MarkTech32' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#046281] via-[#046281]/80 to-[#046281]/60 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDUwIDAgTCAwIDAgMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
      <LinkTree links={links} profileImage={profileImage} />
    </div>
  );
}

export default App;