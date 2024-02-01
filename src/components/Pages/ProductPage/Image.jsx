import classes from "./ProductPage.module.css";
import {useState} from "react";

export const Image = ({color}) => {
    const [currentImg, setCurrentImg] = useState(0)
    return (
        <div onClick={() => currentImg === 0 ? setCurrentImg(1) : setCurrentImg(0)}>
            <img className={classes.image} src={color.images[currentImg]} alt=""/>
        </div>
    );
};

