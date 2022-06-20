import { useState } from "react";
import {Helmet} from "react-helmet";

import ErrorBoundery from "../errorBoundery/errorBoundery";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";

import decoration from '../../resources/img/vision.png';
import CharSearchForm from "../charSearchForm/CharSearchForm";

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);
    
    const onCharSelected = (id) => {
       setChar(id);
    }
    
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>

            </Helmet>
            <ErrorBoundery>
            <RandomChar/>
            </ErrorBoundery>
            <div className="char__content">
                <ErrorBoundery>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundery>
                <div>
                <ErrorBoundery>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundery>
                <ErrorBoundery>
                    <CharSearchForm/>
                </ErrorBoundery>
                </div>
                
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;