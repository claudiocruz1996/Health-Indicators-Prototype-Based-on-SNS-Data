import React, { useState } from 'react';
//set actual month and year by default
const inicialGlobalState = {
    indicador: "hipertensao",
    subindicador: "cntg_hipertensos_pa_menor_150_90_mmhg_n_norm",
    ano: 2021,
    mes: 1,
    dataset: "",
    rows: 0,
    data: [],
}


export const Context = React.createContext();

export default function Global({ children }) {
    const [globalState, setGlobalState] = useState(inicialGlobalState);
    return (
        <Context.Provider value={[globalState, setGlobalState]}>{children}</Context.Provider>
    )
}