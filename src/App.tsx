import './index.css';

function App() {
  return (
    <div className='hero-section'>
      {/* CABECERA */}
      <header className='header'>
        <div className='logo'>ESTUDIO</div>
        <button className='menu-button' aria-label='Menu'>
          <span className='menu-line'></span>
          <span className='menu-line'></span>
          <span className='menu-line'></span>
        </button>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className='main-content'>
        <h1 className='title'>Arquitectura que<br />trasciende</h1>
      </main>

      {/* PIE DE PÁGINA DEL HERO */}
      <footer className='footer-hero'>
        <div className='scroll-indicator'>
          <span>DESLIZAR</span>
          <svg viewBox='0 0 24 24' className='arrow-icon' width='16' height='16'>
            <polyline points='6 9 12 15 18 9'></polyline>
          </svg>
        </div>
        <div className='footer-bottom'>
          <span style={{ textTransform: 'none' }}>© 2026</span>
          <span style={{ textTransform: 'capitalize' }}>Nicaragua</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
