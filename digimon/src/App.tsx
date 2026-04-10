import { Search ,  Card , Menu } from './components';
import { useDigimon } from './hooks';

function App() {
  const { digimon, setFiltro, setNivelFiltro, nivelesUnicos } = useDigimon();
  return (
    <>
    <Search alEscribir = {(valor) => setFiltro(valor)} />
      <div className= "grid">

      <Menu nivel = {digimon} nivelesUnicos={nivelesUnicos} onNivelChange={setNivelFiltro} />

        {digimon.map((d) => (
          <Card
          key = {d.id}
          imagen = {d.imagen}
          nombre = {d.nombre}
          nivel = {d.nivel}
          />
        ))}

      </div>

    </>
  )
}

export default App