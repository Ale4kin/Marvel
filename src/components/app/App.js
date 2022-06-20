import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/appHeader";
import Spinner from '../spinner/spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));

const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route exact path="/" element={<MainPage/>}/>
                            <Route exact path="/comics" element={ <ComicsPage/>}/>
                            <Route exact path="/comics/:id" element={<SingleComicPage Component={SingleComicLayout} dataType='comic' />} />
                            
                            <Route exact path="/characters/:id" element={<SingleComicPage Component={SingleCharacterLayout} dataType='character'/>}/>
                           
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}


export default App;
