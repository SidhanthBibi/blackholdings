
'use client';
import { useEffect } from 'react';

export default function ChartBackground() {
  useEffect(() => {
    const libScript = document.createElement('script');
    libScript.src = 'https://unpkg.com/lightweight-charts@4.1.0/dist/lightweight-charts.standalone.production.js';
    libScript.async = true;

    const chartScript = document.createElement('script');
    chartScript.src = '/chart/script.js';
    chartScript.async = true;

    document.body.appendChild(libScript);
    libScript.onload = () => {
      document.body.appendChild(chartScript);
    };

    return () => {
      document.body.removeChild(chartScript);
      document.body.removeChild(libScript);
    };
  }, []);

  return (
    <div id="container" style={{
      position: 'absolute',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
      opacity: 0.25,
      filter: 'brightness(0.6) saturate(1.2)',
    }}></div>
  );
}
