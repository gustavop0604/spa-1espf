import MeuComponente from "./components/MeuComponente";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Section from "./components/Section";
import viteLogo from "./assets/vite.svg";

export default function App(){

  let viteLogoAlt = "Vite Logo";

  return (
    <>
      <h1>App - Componente principal!</h1>
      <div>
        {/* Iniciando área do cabeçalho */}
        <Cabecalho/>
        
        {/* Iniciando a área do conteúdo */}
        <Section viteLogoProps={viteLogo} 
        viteLogoAltProps={viteLogoAlt} />
        
        {/* Iniciando a área do rodapé */}
       <Rodape/>
      </div>
    </>
  )
}