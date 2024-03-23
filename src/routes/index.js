import config from "~/config";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from "~/pages/Live";

//public route
const publicRoutes = [
    {
        path: config.routesConfig.home,
        component: Home
    },
    {
        path: config.routesConfig.following,
        component: Following
    },
    {
        path: config.routesConfig.profile,
        component: Profile
    },
    {
        path: config.routesConfig.upload,
        component: Upload,
        layout: null
    },
    {
        path: config.routesConfig.search,
        component: Search,
    },
    {
        path: config.routesConfig.live,
        component: Live,
    }
];


const privateRoutes = [

];

export {privateRoutes, publicRoutes}