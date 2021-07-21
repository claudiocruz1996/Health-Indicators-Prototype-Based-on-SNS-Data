/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

/* export default function ComboBox({mainTitle, indicator}) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={mainTitle} variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
]; */

export default function ComboBox({mainTitle}) {

  const [indicator, setIndicator] = useState({ title: "Hipertensao", dataset: "hipertensao" });

  
/*   useEffect(() => 
  alert(indicator.dataset),
  alert(indicator.title)
  ); */

  function onTagsChange(event, values){
    setIndicator({
      title: values.title,
      dataset: values.dataset
    })
    
  }

    return (
      <div style={{ width: 500 }}>
        <Autocomplete
          id="combo-box-demo"
          disableClearable
          options={indicators}
          defaultValue={indicator}
          getOptionLabel={(option) => option.title}
          style={{ width: 500 }}
          onChange={onTagsChange}
          renderInput={params => (
            <TextField {...params} label={mainTitle} variant="outlined" />
          )}
        />
      </div>
    );
  
}

const indicators = [
  { title: 'Hipertensao', dataset: "hipertensao" },
  { title: 'Diabetes', dataset: "diabetes" },
  { title: 'Saúde da mulher e da crianca', dataset: "saude_da_mulher_e_crianca" },
];
