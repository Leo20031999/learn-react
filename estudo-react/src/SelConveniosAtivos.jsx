import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { RadioButton } from "primereact/radiobutton";
import { Card } from 'primereact/card';


function SelConveniosAtivos(){

  return (
    <>
    <Card>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
          <label htmlFor="Agente">Agente</label>
          <RadioButton inputId='Agente' name="agente" value='A'></RadioButton>
          <input list="agentes" />
          <datalist id="agentes">
          <option value="John Doe" />
          <option value="Jane Smith" />
          <option value="Michael Johnson" />
          <option value="Emily Davis" />
          <option value="David Wilson" />
          </datalist> 
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
          <label htmlFor="Empresa">Empresa</label>
          <RadioButton inputId='Empresa' name="empresa" value='E'></RadioButton>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
          <label htmlFor="Professor">Professor</label>
          <RadioButton inputId='Professor' name="professor" value='P'></RadioButton>
          <input list="professores" />
          <datalist id="professores">
          <option value="John Doe" />
          <option value="Jane Smith" />
          <option value="Michael Johnson" />
          <option value="Emily Davis" />
          <option value="David Wilson" />
          </datalist>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
        <label for="inicio">Início:</label>
        <input type="date" id="iniico" name="inicio"></input>
        <label for="fim">Fim:</label>
        <input type="date" id="fim" name="fim"></input>
        </div>
        <div style={{display:'flex', flexDirecton: 'row', justifyContent: 'space-evenly',}}>
          <Button label="OK"></Button>
          <Button label="Cancela"></Button>
        </div>
      </div>
    </Card>
    </>
  );
}

export default SelConveniosAtivos;