import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./components/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./components/pages/User";
function App() {
  return (
    <>
    <GithubProvider>
      <AlertProvider>
     <Router className="bg-purple-500">

       <div className="flex flex-col justify-between h-screen ">
       <Navbar className="text-xl"/> 
       <main className="container mx-auto px-3 pb-12 ">
        <Alert/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="/user/:login" element={<User/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
       </main>


       <Footer/>
         </div> 
       
     
    
     </Router>
     </AlertProvider>
     </GithubProvider>
    </>
  );
}

export default App;
