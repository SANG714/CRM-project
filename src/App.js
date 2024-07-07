import './App.css';
// import Entry from './Pages/entry/Entry.page';
import DefaultLayout from './Layout/DefaultLayout';
// import Dashboard from './Pages/Dashboard/Dashboard.page';
import AddTicket from './Pages/New-ticket/AddTicket.page'; 

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout >
       {/* <Dashboard/>  */}
       <AddTicket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
