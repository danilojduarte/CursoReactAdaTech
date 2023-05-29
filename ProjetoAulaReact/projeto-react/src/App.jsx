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


function NewButton(props) {
  return (
    <button>{props.conteudo}</button>
  )
}


export default App


