import { useNavigate } from 'react-router-dom';
import style from './Style.module.css'

function HomePage() {
  const nav = useNavigate();
  const goToHome = () => {
    nav('/catalog')
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.contentTitle}>Campers of your dreams</h1>
        <p className={style.contentText}>
          You can find everything you want in our catalog
        </p>
        <button onClick={goToHome} className={style.contentLink}>
          View Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;