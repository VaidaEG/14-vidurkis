import { skaiciuKiekis } from '../skaiciuKiekis/skaiciuKiekis.js';

function atsPrint(skaiciuSarasas, vidurkis) {
    let kiekis = skaiciuKiekis(skaiciuSarasas);

    return `Iš pateiktų ${kiekis} skaičių, vidurkis gaunasi: ${vidurkis}.`;
}

export { atsPrint }