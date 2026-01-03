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
                    '/images/users/tchoumtayann.png',
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
                '/images/users/tchoumtayann.png',
        },
    }
    return {featuredPost,posts}
}




