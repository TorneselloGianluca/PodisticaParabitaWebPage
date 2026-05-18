import React, { useState } from 'react';

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(true); // Forzato a TRUE per vederlo subito

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] w-[calc(100%-2rem)] max-w-3xl bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <h4 className="text-sm font-black text-orange-500 uppercase">Privacy & Cookie 🏃‍♂️</h4>
        <p className="text-xs text-slate-300 mt-1">Uso i cookie per far funzionare i tasti WhatsApp e i social.</p>
      </div>
      <div className="flex gap-2 w-full md:w-auto">
        <button onClick={() => setIsVisible(false)} className="bg-slate-800 text-xs py-2 px-4 rounded-xl w-full">Rifiuta</button>
        <button onClick={() => setIsVisible(false)} className="bg-orange-600 text-xs font-black py-2 px-4 rounded-xl w-full">Accetta</button>
      </div>
    </div>
  );
};

export default Cookie;