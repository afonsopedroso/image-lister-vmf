import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setFile, setFileEmpty } from "../store";

import style from '../components/ImageVideoList.module.scss'
import { Link, useParams } from "react-router-dom";

function PageList(props) {
    let files = useSelector((state) => state.Config.files);
    let videos = useSelector((state) => state.Config.videos);
    let { id = '00001' } = useParams()



    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(setFile(item))
        localStorage.setItem('image', item)
        localStorage.removeItem('video')
    }
    const handleVideo = (video) => {
        dispatch(setFileEmpty())
        localStorage.setItem('video', video)
        localStorage.removeItem('image')
    }
    const url = 'https://mycorsproxy-alaska.herokuapp.com/https://vmfdigital.com/vmf/afonso/imagevideoapp/lista.json'
    const handleData = () => {
        console.log("here")
        dispatch(getData(url))
        console.log("here2")



    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <div className={style.container}>
            <div className={style.row} >
                {files ? files.map((item, index) =>
                    <div className={style.casing} key={index}><Link onClick={() => handleClick(item.payload)} to="/"><img alt={item.payload} width={80} height={80} src={process.env.PUBLIC_URL + '/assets' + item.payload} /></Link>
                    </div>)
                    : null}
                {videos ? videos.map((item, index) => <div key={index} className={style.casing} >
                    <Link to="/" onClick={() => { handleVideo(item.payload) }}>
                        <video className={style.videobox} width="80">
                            <source width={80} height={80} src={process.env.PUBLIC_URL + '/assets' + item.payload} type="video/mp4" />
                        </video></Link>
                </div>) : null}
            </div>
        </div>
    );
}

export default PageList;