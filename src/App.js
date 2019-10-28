import React from 'react';
import logo from './logo.svg';
import './App.css';

import { VisibleFilter, DynamicFilter, ModernFilter } from './components/table-filter-search';

function App() {
	return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <VisibleFilter
          headlines={[
            {
              name: "First Name"
            },
            {
              name: "Last Name"
            },
            {
              name: "E-Mail"
            },
            {
              name: "Birthday"
            }
          ]}
          datas={[
            {
              firstname: "Adam",
              lastname: "Mueller",
              email: "adam.mueller@live.com",
              birthday: "21-01-1980"
            },
            {
              firstname: "Mary",
              lastname: "White",
              email: "m-white@icloud.com",
              birthday: "11-04-1978"
            }
          ]}
          id="tableDataOne"
          searchField="searchMainFilter"
          ></VisibleFilter>
        <DynamicFilter
          headlines={[
            {
              name: "First Name"
            },
            {
              name: "Last Name"
            },
            {
              name: "E-Mail"
            },
            {
              name: "Birthday"
            }
          ]}
          datas={[
            {
              firstname: "Adam",
              lastname: "Mueller",
              email: "adam.mueller@live.com",
              birthday: "21-01-1980"
            },
            {
              firstname: "Mary",
              lastname: "White",
              email: "m-white@icloud.com",
              birthday: "11-04-1978"
            },
            {
              firstname: "",
              lastname: "",
              email: "",
              birthday: ""
            }
          ]}
          id="tableData"
          searchField="searchFilter"
          ></DynamicFilter>
          <ModernFilter
            headlines={[
              {
                name: "First Name"
              },
              {
                name: "Last Name"
              },
              {
                name: "E-Mail"
              },
              {
                name: "Birthday"
              }
            ]}
            datas={[
              {
                firstname: "Adam",
                lastname: "Mueller",
                email: "adam.mueller@live.com",
                birthday: "21-01-1980"
              },
              {
                firstname: "Mary",
                lastname: "White",
                email: "m-white@icloud.com",
                birthday: "11-04-1978"
              },
              {
                firstname: "",
                lastname: "",
                email: "",
                birthday: ""
              }
            ]}
            id="tableDataModern"
            searchField="searchFilterModern"
            dynamic={false}
            ></ModernFilter>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
	);
}

export default App;
