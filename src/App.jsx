import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Error from "./components/Error";
import Jobdetails, { jobsDetailsLoader } from "./components/Jobdetails";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import ContactLayout from "./layout/ContactLayout";
import JobsLayout from "./layout/JobsLayout";
import RootLayout from "./layout/RootLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Jobs, { jobsLoader } from "./Pages/Jobs";
import Products from "./Pages/Products";
import {
 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
        <Route path="info" element = {<ContactInfo/>}/>
        <Route path = "form" element = {<ContactForm/>}/>
        </Route>
        <Route path="jobs" element = {<JobsLayout/>} errorElement = {<Error/>}>
        <Route index element = {<Jobs/>} loader = {jobsLoader}/>
        <Route path=":id" element = {<Jobdetails/>} loader = {jobsDetailsLoader} />

        </Route>
        <Route path = '*' element = {<NotFound/>}/>
      </Route>
    )
  );

  return (
    
    <RouterProvider router={router}/>
    // <>
    //   <Navbar></Navbar>
    //   <div className="content">
    //     <Routes>
    //       {/* <Route path='/' element = {<Home/>}/>
    //   <Route path='/products' element = {<Products/>}/>
    //   <Route path='/about' element = {<About/>}/>
    //   <Route path='/contact' element = {<Contact/>}/> */}
    //     </Routes>
    //   </div>
    // </>
  );
}

export default App;
