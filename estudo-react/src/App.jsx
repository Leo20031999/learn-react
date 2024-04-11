import './App.css'
 
function App() {
 
  return (
    <>
    <h1>Estudo React</h1>
    <h2>Bem vindo ao estudo-react 1.0<br></br></h2>
    <div>
      <label>
        Nome:
        <input
          type="text"
          placeholder="Digite seu nome"
        />
      </label>
    </div>
    <div>
      <label>
        Email:
        <input
          type="text"
          placeholder="Digite seu email"
        />
      </label>
    </div>
    <div>
      <label>
        Matricula:
        <input
          type="text"
          placeholder="Digite sua matrícula"
        />
      </label>
    </div>
    <div>
      <label>
        Data de nascimento:
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
        />
      </label>
    </div>
    </>
  )
}
 
export default App