function arPrasmingasSarasas(sarasas) {
    if (!Array.isArray(sarasas)) {
        console.error('ERROR: duotas ne array.');
        return false;
    }
    if (sarasas.length === 0) {
        console.error('ERROR: duotas array yra tuščias.');
        return false;
    }
    return true;
}

function arNormalusSkaicius(skaicius, tikrinamoObjektoPavadinimas) {
    if (typeof tikrinamoObjektoPavadinimas !== 'string') {
        console.warn('WARNING: skačiaus tipo tikrinimui nėra duotas tikrinamo objekto pavadinimas');
        tikrinamoObjektoPavadinimas = 'reikšmė/objektas';
    }
    if (typeof skaicius !== 'number') {
        console.error(`ERROR: gautas ${tikrinamoObjektoPavadinimas} nėra skaičiaus tipo.`);
        return false;
    }
    if (!isFinite(skaicius)) {
        console.error(`ERROR: gautas ${tikrinamoObjektoPavadinimas} nėra tikras skaičius.`);
        return false;
    }
    return true;
}

export { arPrasmingasSarasas, arNormalusSkaicius }