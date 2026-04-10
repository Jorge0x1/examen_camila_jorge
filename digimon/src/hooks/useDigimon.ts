import { useEffect, useState } from 'react';
import type { Digimon } from '../types';

const useDigimon = () => {
    const [filtro, setFiltro] = useState("");
    const [nivelFiltro, setNivelFiltro] = useState<string>("");
    
    const [digimons, setDigimons] = useState<Digimon[]>([]);
    const traerDigimons = async () => {
        try {
            const respuesta = await fetch("https://digimon-api.vercel.app/api/digimon");
            const datos = await respuesta.json();
            const listadoreal = datos.map((d: any, index: number) => ({
                id: index + 1,
                imagen: d.img,
                nombre: d.name,
                nivel: d.level
                }))

            setDigimons(listadoreal);

        } catch (error) {
            console.error("error al traer los digimons", error);
        }
    }
    useEffect(() => {
        traerDigimons();
    }, []);

    const digimonfiltrado = digimons.filter((d) => {
        const cumpleName = d.nombre.toLowerCase().includes(filtro.toLowerCase());
        const cumpleLevel = nivelFiltro === "" || d.nivel === nivelFiltro;
        return cumpleName && cumpleLevel;
    });
    
    const nivelesUnicos = Array.from(new Set(digimons.map((d) => d.nivel))).sort();
    
    return { digimon: digimonfiltrado, setFiltro, setNivelFiltro, nivelesUnicos };
    
}

export default useDigimon;