import { useTranslation } from 'react-i18next';
export const New = ()=>{
    const { t} = useTranslation();
     const posts = [
        {
            id: 1,
            title: t('pt1'),
            href: '#',
            description:
                t('p1desc'),
            date: t('p1date'),
            datetime: '2024-07-10',
            author: {
                name: 'Yann Tchoumta',
                href: '#',
                imageUrl:'/images/users/tchoumtayann.png'
            },
        },
        {
            id: 2,
            title: t('pt2'),
            href: '#',
            description: t('p2desc'),
            date: t('p2date'),
            datetime: '2024-09-10',
            author: {
                name: 'Tech News',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        // More posts...
    ]
    
     const featuredPost = {
        id: 1,
        title: t('f1title'),
        href: '#',
        description:
            t('f1desc'),
        date: t('fdate1'),
        datetime: '2024-09-10',
        author: {
            name: 'Yann Tchoumta',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
    return {featuredPost,posts}
}




