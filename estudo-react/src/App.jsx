import './App.css'
 
function App() {
 
  return (
    <>
    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png" height = "100" width = "100"></img>
    <h1>Estudo React</h1>
    <h2>Bem vindo ao estudo-react 1.0</h2>
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
    <button onClick={() => window.location.href = '/'}>Voltar para Apresentacao</button>
    <footer><br></br>Created by Leonardo</footer>
    </>
  )
}
 
export default App