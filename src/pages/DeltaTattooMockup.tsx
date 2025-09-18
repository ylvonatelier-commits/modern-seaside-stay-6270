import React, { useEffect } from 'react';

const DeltaTattooMockup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-screen">
      <iframe 
        src="/delta-tattoo-mockup.html" 
        width="100%" 
        height="100%" 
        frameBorder="0"
        title="Delta Tattoo Calella - Mockup"
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default DeltaTattooMockup;