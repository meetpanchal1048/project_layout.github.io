import { Navbar } from './Navbar/Navbar';
import { HtmlHeader } from './Html - Css/HtmlHeader';
import { HtmlProjects } from './Html - Css/HtmlProjects';
import { JsHeader } from './JavaScript/JsHeader';
import { JsProjects } from './JavaScript/JsProjects';
import { ReactProjects } from './React JS/ReactProjects';
import { ReactHeader } from './React JS/ReactHeader';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <HtmlHeader/>
      <HtmlProjects/>
      <JsHeader/>
      <JsProjects/>
      <ReactHeader/>
      <ReactProjects/>
      <Footer/>
    </div>
  );
}

export default App;
