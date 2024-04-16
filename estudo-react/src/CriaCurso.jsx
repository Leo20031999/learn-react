import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

function criaCurso() {
  return (
    <>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png" height = "100" width = "100"></img>
        <h1>Grade</h1>
        <div className="Campo">
            <label>Nome</label>
            <InputText/>
        </div>
        <div className="Campo">
            <label>Sigla</label>
            <InputText/>
        </div>
        <div className="Campo">
            <label>Data de início</label>
            <input type = 'date'
             placeholder='data de início'/>
        </div>
        <div className="Campo">
        <label>Data de fim</label>
            <input type = 'date'
             placeholder='data de fim'/>
        </div>
        <div className="card">
            <label>Descrição</label>
            <Editor style={{ height: '320px' }} />
        </div>
        <br/>
        <Button label = 'Criar Curso'/>
        <Link to = "/">
            <Button label = 'Voltar para a Apresentação'/>
        </Link>
        </>
  )
}
 
export default criaCurso