import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='my-name'><h1>Anastasiya Peretyatko</h1></div>
        <div className='project-number'><h2>Project 3</h2></div>
        <button className='header-button'><img src='/home.svg' alt='Home' className='button-img'></img></button>
        <button className='header-button'><img src='/projects.svg' alt='Projects' className='button-img'></img></button>
        <button className='header-button'><img src='/about.png' alt='About me' className='button-img'></img></button>
        <button className='header-button'><img src='/contacts.png' alt='Contacts' className='button-img'></img></button>
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
