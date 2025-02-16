import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='name-text'>
          <div className='my-name'><p>Anastasiya Peretyatko</p></div>
          <div className='project-number'><p>Project 3</p></div>
        </div>
        <div className='box-button'>
          <button className='header-button'><img src='/home.svg' alt='Home' className='button-img'></img></button>
          <button className='header-button'><img src='/projects.svg' alt='Projects' className='button-img'></img></button>
          <button className='header-button'><img src='/about.png' alt='About me' className='button-img'></img></button>
          <button className='header-button'><img src='/contacts.png' alt='Contacts' className='button-img'></img></button>
        </div>
      </header>
      <main className="App-main">
        <article className='about-me'></article>
        <article className='skills'></article>
        <article className='projects'>
          <section className='project-1'></section>
          <section className='project-2'></section>
          <section className='project-3'></section>
        </article>
      </main>
      <aside className='App-sidebar'>
        <div className='my-photo'>
          <img src='/my-photo.jpg' alt='Me :)' className='my-photo-img'></img>
        </div>
        <div className='sidebar-box'></div>
      </aside>
      <footer className='App-footer'>
        <p className='Footer-p'>© 2025 All Rights Reserved by ib-themes.</p>
      </footer>
    </div>
  );
}

export default App;
