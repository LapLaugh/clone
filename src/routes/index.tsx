import SearchComponent from '~/components/Search';

const privateRoutes = []

const publicRoutes = [
    {
        path: '/',
        element: SearchComponent
    },
    {
        path: '/home',
        element: SearchComponent
    },
]

export { privateRoutes, publicRoutes }