import MeuComponente from "./components/MeuComponente"


function App() {

  return (
    <div>
      <h1>Olá  Mundo, React!</h1>
      <MeuComponente />
      <NewButton conteudo='Click aqui'/>

      <NewButton conteudo='Novamente aqui'/>

      <NewButton conteudo='Aqui também'/>
    </div>
  )
}

export default App


function NewButton() {
  return (
    <button>Click her</button>
  )
}


