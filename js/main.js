import { skaiciai } from './data/skaiciai.js';
import { vidurkis } from './components/vidurkis/vidurkis.js';

const ats = vidurkis(skaiciai) ;

// Is pateiktu 4 skaiciu, vidurkis gaunasi: 6.
console.log(`Iš pateiktų ${skaiciai.length} skaičių, vidurkis gaunasi: ${ats}.`);