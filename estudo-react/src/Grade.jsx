import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Editor } from 'primereact/editor';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import './Grade.css'


function Grade(){
    return(
        <>
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
        <Link to = "/">
            <Button label = 'Voltar para a Apresentação'/>
        </Link>
        </>
    )
}

export default Grade