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
        <article className='about-me'>
          <h2 className='article_title'>Обо мне</h2>
          <div className='article_text'><p>Я студентка третьего курса Московского Технического Университета Связи и Информатики, 
            на специальности Информатика и вычислительная техника с профилем Искусственный интеллект и машинное обучение. 
            Очень трудолюбивый, ответственный и позитивный человек! Люблю креативить и писать код!</p></div>
        </article>
        <article className='projects'>
          <h2 className='article_title'>Проекты</h2>
          <div className='wrap-projects'>
            <section className='project-1 project-card'><img src='/pr1.jpg' alt='Проект 1 фото'></img></section>
            <section className='project-2 project-card'><img src='/pr2.jpg' alt='Проект 2 фото'></img></section>
            <section className='project-3 project-card'><img src='/pr3.jpg' alt='Проект 3 фото'></img></section>
          </div>
        </article>
        <article className='skills'>
        <h2 className='article_title'>Мои умения</h2>
        <div className='article_text'><p>Я студентка третьего курса Московского Технического Университета Связи и Информатики, 
            на специальности Информатика и вычислительная техника с профилем Искусственный интеллект и машинное обучение. 
            Очень трудолюбивый, ответственный и позитивный человек! Люблю креативить и писать код!</p></div>
        </article>
      </main>
      <aside className='App-sidebar'>
        <div className='my-photo'>
          <img src='/my-photo.jpg' alt='Me :)' className='my-photo-img'></img>
        </div>
        <div className='sidebar-box'>
          <div className='name-place'><p>Перетятько Анастасия</p></div>
          <div className='profession-place'><p>Frontend-developer</p></div>
          <div className='location-place'><p>Moscow, Russia</p></div>
          <div className='social-networks-box'>
            <a href='https://vk.com/anesthesia2203'><img src='/vk.svg' alt='VK' className='button-img social-network'></img></a>
            <a href='https://vk.com/anesthesia2203'><img src='/tg.svg' alt='TG' className='button-img social-network'></img></a>
            <a href='https://vk.com/anesthesia2203'><img src='/mail.svg' alt='Yandex' className='button-img social-network'></img></a>
          </div>
        </div>
      </aside>
      <footer className='App-footer'>
        <p className='Footer-p'>© 2025 All Rights Reserved by ib-themes.</p>
      </footer>
    </div>
  );
}

export default App;
