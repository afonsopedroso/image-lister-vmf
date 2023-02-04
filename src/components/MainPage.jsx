import style from '../components/MainPage.module.scss'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { setEmpty } from '../store';



function MainPage() {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setEmpty())
    })


    return (<div className={style.container}>
        <img src="https://vmfdigital.com/vmf/afonso/imagevideoapp/assets/00001/images/11.jpg" alt="" />
        <div className={style.box} >
            {localStorage.getItem('image') ? <img width={200} height={200} alt={localStorage.getItem('image')} src={'../assets' + localStorage.getItem('image')} /> : localStorage.getItem('video') ?
                <video controls="controls" width="200" >
                    <source width={200} src={'../assets' + localStorage.getItem('video')} type="video/mp4" />
                </video> : null}
            <button className={style.downloadbutton} >Download Video</button>
            <button className={style.contactbutton} >Contact Us</button>
            <Link to="/ImageList/00001">
                <button className={style.downloadbutton} >show images</button>
            </Link>

        </div>
    </div>);
}

export default MainPage;