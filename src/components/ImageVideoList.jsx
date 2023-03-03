import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setFile, setId, setMark, setScrollPos } from "../store";
import style from '../components/ImageVideoList.module.scss'
import { useParams, useNavigate } from "react-router-dom";
import { Observer } from "../functions/Observer";

function PageList(props) {
    let files = useSelector((state) => state.Config.files);
    let scrollPos = useSelector((state) => state.Config.scrollPos);
    let mark = useSelector((state) => state.Config.mark);
    let { id = '00001' } = useParams();
    let ref = useRef(false);
    const targetsRef = useRef([]);
    const divRef = useRef(null)
    const imgRef = useRef(null)
    const navigate = useNavigate();
    const [time, setTime] = useState(null)
    const dispatch = useDispatch();
    const handleClick = (item, index, e) => {
        e.preventDefault()
        dispatch(setMark(index))
        localStorage.setItem('image', item)
        localStorage.removeItem('video')
        dispatch(setFile(item))
        navigate('/')
    }

    const url = 'https://mycorsproxy-alaska.herokuapp.com/https://vmfdigital.com/vmf/afonso/imagevideoapp/lista.json'
    const handleData = () => {
        Observer();
        dispatch(getData(url)).then(() => {

            divRef.current.scrollTop = scrollPos ? scrollPos.payload : 0

        });

    }

    const handleScroll = (e) => {
        e.preventDefault()
        dispatch(setScrollPos(e.target.scrollTop))
        setTime(e.timeStamp)
    }

    useEffect(() => {
        Observer(imgRef)
    }, [time])
    const handleLoad = (e) => {
        e.preventDefault()

    }
    useEffect(() => {
        dispatch(setId(id))
        if (ref == true) { return }
        ref = true
        handleData()
        Observer(targetsRef)
    }, [id])

    return (
        <div ref={divRef} className={style.container} onScroll={handleScroll}>
            <div className={style.row} >
                {files.images ? files.images.map(
                    (item, index) => <div className={style.casing} key={index}>{item.includes(id) ?
                        <button onClick={(e) => handleClick(item, index, e)} ><img onLoad={handleLoad} ref={imgRef} style={{ width: '47vw', height: '47vw' }} className={mark && mark.payload == index ? style.selected : style.imgs} alt={item} src={index < 12 ? item : process.env.PUBLIC_URL + "/assets/ldd.gif"} data-src={item} />
                        </button>
                        :
                        null
                    }
                    </div>) : null
                }
            </div>
        </div>
    );
}

export default PageList;