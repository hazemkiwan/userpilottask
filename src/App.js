import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserTable from './Components/User/UserTable/UserTable';
import {CountryContext} from './Context/CountryContext'
import UserDetails from './Components/User/UserDetails/UserDetails';
import {apis} from './Constant/apis'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  const [counries, setCounries] = useState([]);
  useEffect(() => { 
      axios.get(apis.countryUrl)
          .then(res =>{ 
            let countriesData = []
            res.data.map((country, key) => 
              countriesData.push({name: country.name, value: country.alpha2Code})
            )
            setCounries(countriesData)
          });
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user/:userId" children={<UserDetails />} />
        </Switch>
        <CountryContext.Provider value={counries}>
          <div>
            <UserTable />
          </div>
        </CountryContext.Provider>
      </Router>
    </div>
  );
}

export default App;
