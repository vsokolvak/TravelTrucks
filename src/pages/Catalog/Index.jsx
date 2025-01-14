import { useEffect } from 'react';
import style from './Style.module.css'
import { useDispatch } from 'react-redux';
import { getCemperList } from '../../redux/catalog/catalogOps';
import FilterForm from '../../components/FilterForm/Index';

function Catalog () {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getCemperList());
    }, [dispatch]);

    return(
        <div className={style.conteiner}>
            <FilterForm />
        </div>
    )
}

export default Catalog;