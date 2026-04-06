import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Share2, // Usiamo questo per i social se Instagram/Facebook mancano
  Globe   // Un'altra icona sicura
} from 'lucide-react';

const Contatti = () => {
  const infoRapide = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: "Email",
      value: "info@podisticaparabita.it",
      link: "mailto:info@podisticaparabita.it"
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      label: "Telefono",
      value: "+39 0833 123456",
      link: "tel:+390833123456"
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      label: "Sede",
      value: "Parabita (LE), Via dello Sport",
      link: "https://goo.gl/maps/example"
    }
  ];

  return (
    <section id="contatti" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Restiamo in contatto</span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase">
            Corriamo <span className="text-blue-600">Insieme</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              Hai domande sulle iscrizioni, sugli allenamenti di gruppo o sulle prossime gare? Il nostro team è a tua disposizione.
            </p>

            <div className="grid gap-4">
              {infoRapide.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-900 font-bold text-lg">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Pulsanti Social con icone sicure */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="flex-1 flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl hover:bg-blue-600 transition-colors group text-center">
                <Share2 size={20} />
                <span className="font-bold uppercase text-xs tracking-widest">Instagram</span>
              </a>
              <a href="#" className="flex-1 flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl hover:bg-blue-600 transition-colors group text-center">
                <Globe size={20} />
                <span className="font-bold uppercase text-xs tracking-widest">Facebook</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-blue-600 p-3 rounded-2xl">
                    <MessageCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Inviaci un messaggio</h3>
                </div>

                <form className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-1">Nome Completo</label>
                    <input type="text" placeholder="Mario Rossi" className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all text-white placeholder:text-white/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-1">Email</label>
                    <input type="email" placeholder="mario@email.com" className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all text-white placeholder:text-white/30" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-1">Messaggio</label>
                    <textarea rows="4" placeholder="Vorrei ricevere informazioni..." className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all resize-none text-white placeholder:text-white/30"></textarea>
                  </div>
                  <button type="button" className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-xl">
                    Invia Richiesta <Send size={18} />
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