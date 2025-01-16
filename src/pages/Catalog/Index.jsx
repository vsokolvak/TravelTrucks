import style from './Style.module.css'
import FilterForm from '../../components/FilterForm/Index';
import CarList from '../../components/CarList/Index';

function Catalog () {

    return(
        <div className={style.conteiner}>
            <FilterForm />
            <CarList />
        </div>
    )
}

export default Catalog;