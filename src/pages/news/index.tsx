import React from "react";
import Head from "../components/head";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/scrollButton";
import { DataOne, featuredPost, posts } from "../api/datas";
import { Datas } from "../api/datas";


const News = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}>
            <Head />
            <ScrollToTopButton />
            <div className="grid  mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 md:mb-20 mb-10">
                <h2 className="text-3xl font-bold tracking-tight px-5 text-gray-900 sm:text-4xl mt-10">From the blog</h2>
                <p className="mt-2 text-lg px-5 leading-8 text-gray-600 text-left">
                    Learn how to grow your business with our expert advice.
                </p>
                <div className="bg-white pb-24 sm:py-10">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
                        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                            <time dateTime={featuredPost.datetime} className="block text-sm leading-6 text-gray-600">
                                {featuredPost.date}
                            </time>
                            <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {featuredPost.title}
                            </h2>
                            <p className="mt-4 text-xl leading-8 text-gray-600">{featuredPost.description}</p>
                            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                                <div className="flex">
                                    <a
                                        href={featuredPost.href}
                                        aria-describedby="featured-post"
                                        className="text-sm font-semibold leading-6 text-indigo-600"
                                    >
                                        Continue reading <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                                <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                                    <a
                                        href={featuredPost.author.href}
                                        className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        <img alt="" src={featuredPost.author.imageUrl} className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                                        {featuredPost.author.name}
                                    </a>
                                </div>
                            </div>
                        </article>
                        <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                            <div className="-my-12 divide-y divide-gray-900/10">
                                {posts.map((post) => (
                                    <article key={post.id} className="py-12">
                                        <div className="group relative max-w-xl">
                                            <time dateTime={post.datetime} className="block text-sm leading-6 text-gray-600">
                                                {post.date}
                                            </time>
                                            <h2 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h2>
                                            <p className="mt-4 text-lg leading-6 text-gray-600">{post.description}</p>
                                        </div>
                                        <div className="mt-4 flex">
                                            <a
                                                href={post.author.href}
                                                className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                                            >
                                                <img alt="" src={post.author.imageUrl} className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                                                {post.author.name}
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
export default News

// <div className="w-full  flex mt-7">
//                     <div className="w-[50%]">
//                         <div className="w-full">
//                             {
//                                 DataOne.length <= 0 ? <></> :
//                                     DataOne.map((items, id) => {
//                                         return (
//                                             <div key={id}>
//                                                 <div className="h-[70vh] w-[70vh] rounded" style={{ background: `url(${items.img})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>

//                                                 </div>
//                                                 <div className="w-[70vh]">
//                                                     <p className="text-gray-600 text-sm mt-8">{items.datePosted}</p>
//                                                     <h3 className="text-2xl ">{items.title}</h3>
//                                                     <p className="text-gray-700">{items.description}</p>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })
//                             }
//                         </div>
//                     </div>
//                     <div className="w-[50%] ">
//                         <div className="grid grid-cols-2 gap-10">
//                             {
//                                 Datas.length <= 0 ? <></> :
//                                     Datas.map((items, id) => {
//                                         return (
//                                             <div className="w-full">
//                                                 <div className="w-full">
//                                                     <img className="h-56 w-full" src={items.img} alt="" />
//                                                 </div>
//                                                 <div className="">
//                                                     <h3 className="my-2 text-xl">{items.title}</h3>
//                                                      <p className="text-gray-700">{items.description}</p>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })
//                             }
//                         </div>
//                     </div>
//                 </div>