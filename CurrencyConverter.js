import React, { useEffect, useState } from 'react';

function CurrencyConverter() {
  const [data, setdata] = useState([]);
  const [key, setkey] = useState([]);
  const [val, setValue] = useState([]);
  const [answer, setanswer] = useState('you have chosen nothing till now');
  const [curr, setcurr] = useState('USD');
  const [destcurr, setdestcurr] = useState('INR');
  const [timelastupdate , settimelastupdate] = useState('');
  const [nextupdate , setnextupdate] = useState('');
  const [display , setdisplay] = useState('');
  const [sdisplay , setsdisplay] = useState('');
  const [colr , setcolor] = useState('white');

  useEffect(() => {
    fetchData();
  }, [curr]);

  useEffect(() => {
    setkey(Object.keys(data));
    setValue(Object.values(data));
  }, [data]);

  async function fetchData() {
    try {
      const response = await fetch(`https://open.er-api.com/v6/latest/${curr}`);
      const jsonData = await response.json();
      setdata(jsonData.rates);
      settimelastupdate(jsonData.time_last_update_utc);
      setnextupdate(jsonData.time_next_update_utc);
    } catch (e) {
      console.log('https://open.er-api.com/v6/latest/${curr}');
      console.log(e);
    }
  }

  function change(event) {
    setanswer(val[event.target.selectedIndex]);
    setdestcurr(key[event.target.selectedIndex]);
    setsdisplay('You Have choosen ' + key[event.target.selectedIndex]);
    setcolor('magenta');
  }

  function your(event) {
    setdisplay("You Have choosen " + key[event.target.selectedIndex]);
    setcurr(key[event.target.selectedIndex]);
  }

  return (
    <div>
        <h1>"Please Note This Data was last updated at {timelastupdate} GMT"</h1>
      <hr />
      <h1 style={{ fontSize: '1rem' }}>
        Want to check the value of your currency in other countries, ok so choose the currency in which you earn
      </h1>


      <select onChange={your} style={{ marginLeft: '50px' }}>
  
        {key.map((ele, index) => (
          <option key={index} value={ele}>
            {ele}
          </option>
        ))}
      </select>
      
      <p style = {{fontSize : "2rem" , color : "red"}}>{display}</p>
      <hr />
      <h1 style={{ fontSize: '1rem' }}>Now Tell the currency in which you want to see the value of your 1 {curr}</h1>

      <select onChange={change} style={{ marginLeft: '50px' }}>
        
        {key.map((ele, index) => (
          <option key={index} value={ele}>
            {ele}
          </option>
        ))}
      </select>
      
      <p style = {{fontSize : "2rem" , color : "red"}}>{sdisplay}</p>

      <h1 style={{color : colr}}>
        The value of 1 {curr} in {destcurr} is {answer}
      </h1>

      <hr />

      <h1>The next data update would be done at {nextupdate} GMT</h1>
      <p>The current update and the next update timings are updated in real time</p>
      <h1>Thanks For Visiting , have a good day ahead</h1>
    </div>
  );
}

export default CurrencyConverter;
