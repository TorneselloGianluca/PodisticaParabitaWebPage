import VincenzoCataldo from '../assets/VincenzoCataldo.png';
import PierluigiToma from '../assets/PierluigiToma.png';
import AndreaMarsano from '../assets/AndreaMarsano.png';
import AntonioLeopizzi from '../assets/AntonioLeopizzi.png';
import AntonioMargarito from '../assets/AntonioMargarito.png';
import PieraPastore from '../assets/Piera.png';
import AntonioTornesello from '../assets/AntonioTornesello.jpeg';
import CataldoBiagio from '../assets/CataldoBiagio.png';
import ProvenzanoGiuseppe from '../assets/GiuseppeProvenzano.png';
import NicolettiLuigi from '../assets/Nicoletti.png';


function Team() {
  return (
    <div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-xl">
      <h2 class="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">IL NOSTRO TEAM</h2>
      <p class="mt-6 text-lg/8 text-gray-400">Non ci unisce solo un pettorale, ma ogni singolo chilometro percorso insieme sotto il sole del Salento. Il nostro team è nato dalla passione pura per l'atletica e cresce ogni giorno grazie all'impegno di chi non teme la sveglia all'alba o la fatica della salita. Corriamo per superare i nostri limiti, ma soprattutto per condividere la gioia di un traguardo raggiunto insieme. Ogni goccia di sudore è il nostro modo di onorare lo sport e il nostro territorio.</p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <div class="flex items-center gap-x-6">
          <img src={AntonioTornesello} alt="Antonio Tornesello" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Antonio Tornesello</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Presidente</p>
          </div>
        </div>
      <li>
        <div class="flex items-center gap-x-6">
          <img src={CataldoBiagio} alt="Cataldo Biagio" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Cataldo Biagio</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Vice Presidente</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src={ProvenzanoGiuseppe} alt="Provenzano Giuseppe" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Provenzano Giuseppe</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Vicepresidente</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src={VincenzoCataldo} alt="Cataldo Vincenzo" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Cataldo Vincenzo</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Consigliere</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src={NicolettiLuigi} alt="Nicoletti Luigi" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Nicoletti Luigi</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Consigliere</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
          <img src={PierluigiToma} alt="Toma Pierluigi" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Toma Pierluigi</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Segretario</p>
          </div>
        </div>
      </li>
        <li>
        <div class="flex items-center gap-x-6">
          <img src={AndreaMarsano} alt="Marsano Andrea" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Marsano Andrea</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Consigliere</p>
          </div>
        </div>
      </li>
              <li>
        <div class="flex items-center gap-x-6">
          <img src={AntonioLeopizzi} alt="Leopizzi Antonio" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Leopizzi Antonio</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Presidente Onorario</p>
          </div>
        </div>
      </li>
                    <li>
        <div class="flex items-center gap-x-6">
          <img src={AntonioMargarito} alt="Margarito Antonio" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Margarito Antonio</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Tecnico Federale</p>
          </div>
        </div>
      </li>
                    <li>
        <div class="flex items-center gap-x-6">
          <img src={PieraPastore} alt="Pastore Piera" class="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10" />
          <div>
            <h3 class="text-base/7 font-semibold tracking-tight text-white">Pastore Piera</h3>
            <p class="text-sm/6 font-semibold text-indigo-400">Tecnico Federale</p>
          </div>
        </div>
      </li>
      
    </ul>
  </div>
  
</div>

  );
}

export default Team;