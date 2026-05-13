import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Share2,
  Globe 
} from 'lucide-react';

const Contatti = () => {
  const infoRapide = [
    {
      // Modificato: text-blue-600 -> text-orange-600
      icon: <Mail className="text-orange-600" size={24} />,
      label: "Email",
      value: "info@podisticaparabita.it",
      link: "mailto:info@podisticaparabita.it"
    },
    {
      // Modificato: text-blue-600 -> text-orange-600
      icon: <Phone className="text-orange-600" size={24} />,
      label: "Telefono",
      value: "+39 0833 123456",
      link: "tel:+390833123456"
    },
    {
      // Modificato: text-blue-600 -> text-orange-600
      icon: <MapPin className="text-orange-600" size={24} />,
      label: "Sede",
      value: "Parabita (LE), Via dello Sport",
      link: "https://goo.gl/maps/example"
    }
  ];

  return (
    <section id="contatti" className="pt-10 pb-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Sezione */}
        <div className="mb-14 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            {/* Modificato: bg-blue-600 -> bg-orange-600 */}
            <span className="h-px w-10 bg-orange-600"></span>
            {/* Modificato: text-blue-600 -> text-orange-600 */}
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px]">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            {/* Modificato: text-blue-600 -> text-orange-600 */}
            Corriamo <span className="text-orange-600">Insieme</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-xl">
            Hai domande sulle iscrizioni o sugli allenamenti? Il nostro team è a tua disposizione.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Colonna Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid gap-4">
              {infoRapide.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  /* Modificato hover: border-orange-200 e bg-orange-50/50 */
                  className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-900 font-bold text-lg">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Pulsanti Social */}
            <div className="flex gap-4 pt-4">
              {/* Modificato hover: bg-orange-600 */}
              <a href="https://www.instagram.com/podisticaparabita" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl hover:bg-orange-600 transition-colors group text-center">
                <Share2 size={20} />
                <span className="font-black uppercase text-[10px] tracking-widest">Instagram</span>
              </a>
              <a href="https://www.facebook.com/podisticaparabita" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl hover:bg-orange-600 transition-colors group text-center">
                <Globe size={20} />
                <span className="font-black uppercase text-[10px] tracking-widest">Facebook</span>
              </a>
            </div>
          </div>

          {/* Colonna Form */}
          <div className="lg:col-span-7">
            {/* Modificato shadow: shadow-orange-900/20 */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-orange-900/20">
              {/* Glow decorativo modificato: bg-orange-600/20 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  {/* Modificato: bg-orange-600 e shadow-orange-600/20 */}
                  <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-lg shadow-orange-600/20">
                    <MessageCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Scrivici un messaggio</h3>
                </div>

                <form className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Nome Completo</label>
                    {/* Modificato: focus:border-orange-500 */}
                    <input type="text" placeholder="Mario Rossi" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all text-white placeholder:text-white/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Email</label>
                    {/* Modificato: focus:border-orange-500 */}
                    <input type="email" placeholder="mario@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all text-white placeholder:text-white/20" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Messaggio</label>
                    {/* Modificato: focus:border-orange-500 */}
                    <textarea rows="4" placeholder="Vorrei ricevere informazioni su..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all resize-none text-white placeholder:text-white/20"></textarea>
                  </div>
                  {/* Modificato: bg-orange-600, hover:bg-orange-500, shadow-orange-900/40 */}
                  <button type="button" className="md:col-span-2 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-xl shadow-orange-900/40">
                    Invia Messaggio <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contatti;