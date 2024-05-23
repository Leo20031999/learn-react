import React, { useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';


function SemanaGrad(){

    return (
      <>
        <Card>
          <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",flexDirection:"row", justifyContent:"flex-start"}}>  
                <label periodo="periodo">Período:</label>
                <input type="text" id="periodo" name="periodo" style={{width: "300px"}}></input>
            </div>
            <div style={{display:"flex",flexDirection:"row", justifyContent:"flex-start"}}>
                <label estagiarios="estagiarios">Total de estagiários:</label>
                <input type="integer" id="estagiarios" name="estagiarios" style={{width: "100px"}}></input>
            </div>
            <div style={{display:'flex', flexDirecton: 'row', justifyContent: 'space-evenly',}}>
              <Button>Salvar</Button>
              <Button>Cancelar</Button>
            </div>
          </div>
        </Card>
      </>
    );
}

export default SemanaGrad;