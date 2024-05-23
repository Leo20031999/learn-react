import React, { useRef } from 'react';
import { Card } from 'primereact/card';


function AnoView(){

    return (
        <>
        <Card title="Simple Card">
          <p> Entre com o Ano: 
            <input type = "number" min="2000" max="2024" step="1"></input>
          </p>
          <button> OK </button>
          <button> Cancelar </button>
        </Card>
        </>
    );
}

export default AnoView;