import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setFile, setFilesEmpty, setId, setMark } from "../store";
import style from '../components/ImageVideoList.module.scss'
import { useParams, redirect, useNavigate } from "react-router-dom";

function PageList(props) {
    let files = useSelector((state) => state.Config.files);
    let mark = useSelector((state) => state.Config.mark)
    let { id = '00001' } = useParams();
    let ref = useRef(false);
    const navigate = useNavigate();
    const [isSet, setIsSet] = useState(false)

    const dispatch = useDispatch();
    const handleClick = (item, index, e) => {
        e.preventDefault()
        dispatch(setMark(index))
        if (isSet == true) {
            console.log("here")
            navigate('/')
        } else {
            dispatch(setFile(item))
            localStorage.setItem('image', item)
            localStorage.removeItem('video')
            setIsSet(true)
        }
    }

    const url = 'https://vmfdigital.com/vmf/afonso/imagevideoapp/lista.json'
    const handleData = () => {
        dispatch(getData(url))
    }

    useEffect(() => {

        dispatch(setId(id))
        if (ref == true) { return }
        ref = true
        handleData()
    }, [id])

    return (
        <div className={style.container}>
            <div className={style.row} >
                {files.images ? files.images.map((item, index) =>
                    <div className={style.casing} key={index}>{item.includes(id) ?
                        <button onClick={(e) => handleClick(item, index, e)} ><img className={mark && mark.payload == index ? style.selected : style.imgs} alt={item} src={item} />
                        </button>
                        :
                        null}
                    </div>
                )
                    : null
                }
            </div>
        </div>
    );
}

export default PageList;