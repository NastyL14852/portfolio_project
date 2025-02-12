import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className='header-button-main header-button'>Main</button>
        <button className='header-button-projects header-button'>Projects</button>
        <button className='header-button-about header-button'>About me</button>
        <button className='header-button-contacts header-button'>Contacts</button>
      </header>
      <main className="App-main">
        <p className='main-p'>Main</p>
      </main>
      <aside className='App-sidebar'>
        <p className='Sidebar-p'>Sidebar</p>
      </aside>
      <footer className='App-footer'>
        <p className='Footer-p'>Footer</p>
      </footer>
    </div>
  );
}

export default App;
