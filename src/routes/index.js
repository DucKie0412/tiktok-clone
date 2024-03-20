import config from "~/config";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

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
    }
];


const privateRoutes = [

];

export {privateRoutes, publicRoutes}