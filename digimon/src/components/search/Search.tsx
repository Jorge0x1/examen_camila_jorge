import "./Search.css"

interface SearchProps {
    alEscribir: (valor: string) => void;
}

const Search = ({ alEscribir }: SearchProps) => {
    return (
        <input
        type = "text"
        className = "Search"
        placeholder = "Busca tu digimon"
        onChange = {(e) => alEscribir(e.target.value)}
        />
        
    )
}

export default Search
