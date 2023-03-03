import style from '../components/MainPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { setEmpty } from '../store';
import { Download } from '../functions/Download';
import { setFilesEmpty } from '../store';


function MainPage() {
    const file = useSelector((state) => state.Config.file)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setEmpty())
        dispatch(setFilesEmpty())

    }, [])

    const handleDownload = (e) => {
        e.preventDefault()
        Download(file.payload.replace(/images/g, "videos").replace(/jpg/g, "mp4"), null)
    }


    return (<div className={style.container}>
        <div className={style.box} >
            {file.payload ?
                <video controls="controls" height="480" width="350" >
                    <source width="350" height="480" src={file.payload.replace(/images/g, "videos").replace(/jpg/g, "mp4")} type="video/mp4" />
                </video> : <div className={style.occ}></div>}
            <button onClick={handleDownload} className={style.downloadbutton} >Download Video</button>
            <button className={style.contactbutton} >Contact Us</button>
            <Link to="/ImageList/00001">
                <button className={style.downloadbutton} >Choose Video</button>
            </Link>
        </div>
    </div>);
}

export default MainPage;