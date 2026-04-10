import type { Digimon } from '../../types';
import './Menu.css';

interface MenuProps {
    nivel: Digimon[];
    nivelesUnicos: string[];
    onNivelCambio: (nivel: string) => void;
}

function Menu({ nivel, nivelesUnicos, onNivelCambio }: MenuProps) {
    return (
        <div className="menu">
            <div className="nivel-selector">
                <label>Filtrar por nivel:</label>
                <select
                    id="nivel"
                    onChange={(e) => onNivelCambio(e.target.value)}
                    defaultValue=""
                >
                    <option value="">Todos</option>
                    {nivelesUnicos.map((n) => (
                        <option key={n} value={n}>
                            {n}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Menu