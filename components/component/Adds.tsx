// components/AdComponent.js
'use client'
import { useEffect } from 'react';
const url = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+${process.env.AMADEUS_API_KEY}`
const AdComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

  
  }, []);

  return (
    <div className="ad-container">
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="YOUR_CLIENT_ID"
        data-ad-slot="YOUR_AD_SLOT"
        data-ad-format="auto">
      </ins>
    </div>
  );
};

export default AdComponent;
