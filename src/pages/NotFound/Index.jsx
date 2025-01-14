import { Link } from 'react-router-dom';
import style from './Style.module.css'

function NotFound() {
  return (
    <div className={style.container}>
      <h1 className={style.errorCode}>
        404
      </h1>
      <h2 className={style.text}>Page not found</h2>
      <button className={style.btn}>
        <Link to="/">Home page</Link>
      </button>
    </div>
  );
}

export default NotFound;