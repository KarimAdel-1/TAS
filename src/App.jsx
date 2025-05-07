import ScrollZoom from './pages/ScrollZoom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
