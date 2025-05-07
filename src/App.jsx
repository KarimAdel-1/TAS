import ScrollZoom from './pages/ScrollZoom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="max-w-full overflow-hidden">
      <NavBar />
      <ScrollZoom />
      <Footer />
    </div>
  );
}

export default App;
