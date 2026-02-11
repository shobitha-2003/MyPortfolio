
import './App.css';
import Landing from './Pages/Landing';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import EducationPage from './Pages/EducationPage';
import ExperiencePage from './Pages/ExperiencePage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContactPage';


function App() {
  

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path='/education' element={<EducationPage/>}/>
    <Route path='/experience' element={<ExperiencePage/>}/>
    <Route path="projects" element={<ProjectPage/>}/>
    <Route path="/skills" element={<SkillsPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>

    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
