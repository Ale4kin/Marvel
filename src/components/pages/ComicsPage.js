import ComicsList from "../comicsList/comicsList";
import AppBanner from "../appBanner/appBanner";
import {Helmet} from 'react-helmet';

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of all comics"
                />
                <title>Comics page</title>

            </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;