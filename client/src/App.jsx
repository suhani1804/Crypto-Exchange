import {Navbar , Footer , Transaction , Welcome , Loader , Service } from './component';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar /> 
        <Welcome />
      </div>
      <Service />
      
      
      <Transaction />
      <Loader/>
      <Footer />

    </div>
  )
}

export default App;
