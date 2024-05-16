import React, { useEffect } from 'react';

const UnityLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/Build/UnityLoader.js`;
    script.onload = () => {
      UnityLoader.instantiate('unityContainer', `${process.env.PUBLIC_URL}/Build/Build.json`);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div id="unityContainer" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default UnityLoader;
