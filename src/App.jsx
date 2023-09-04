import MeuComponente from "./components/MeuComponente";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Section from "./components/Section";

export default function App(){
  return (
    <>
      <h1>App - Componente principal!</h1>
      <div>
        {/* Iniciando área do cabeçalho */}
        <Cabecalho/>
        
        {/* Iniciando a área do conteúdo */}
        <Section/>
        
        {/* Iniciando a área do rodapé */}
       <Rodape/>
      </div>
    </>
  )
}