
import Header from './components/Header/Header';
import './App.css';
import Home from './components/Home/Home';
import ChatGPT from './components/ChatGPT/ChatGpt';
import Footer from './Footer/Footer';
import Bottom from './components/Bottom/Bottom';
import Footer2 from './components/Footer2/Footer2';


function App() {
  const title = "SearchGPT Prototype";
  const content = "GPT-4o mini:Advancing cost-efficient intellingence"

  return (
    <div className="App">

      <Header />
      <Home />
      <ChatGPT title={title} content={content} />
      <Footer />
      <Bottom />
      <Footer2 />



    </div>
  );
}

export default App;
