import {useState} from 'react';
import PropTypes from 'prop-types';

import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";
import ErrorBoundery from '../errorBoundery/errorBoundery';

import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setChar] = useState(null);
    
    const onCharSelected = (id) => {
       setChar(id);
    }
    
    return (
        <div className="app">
            <AppHeader/>
            <main>
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
            </main>
        </div>
    )
}


App.propTypes = {
    onCharSelected: PropTypes.number
}

export default App;
