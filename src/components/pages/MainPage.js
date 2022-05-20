import { useState } from "react";

import ErrorBoundery from "../errorBoundery/errorBoundery";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);
    
    const onCharSelected = (id) => {
       setChar(id);
    }
    
    return (
        <>
            <ErrorBoundery>
            <RandomChar/>
            </ErrorBoundery>
            <div className="char__content">
                <ErrorBoundery>
                <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundery>
                <ErrorBoundery>
                <CharInfo charId={selectedChar}/>
                    </ErrorBoundery>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;