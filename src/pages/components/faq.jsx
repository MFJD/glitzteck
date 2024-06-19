import React, { FC } from 'react';
import dynamic from "next/dynamic";

const {Accordion} = dynamic(() => import("react-bootstrap-accordion"), {
  // Do not import in server side
  ssr: false,
});
// import { Accordion } from 'react-bootstrap-accordion'

const Faq = () => {
    return (
        <div className='mx-auto mt-20 max-w-7xl px-6 pb-2 pt-18 sm:pt-10 lg:px-8 lg:pt-20'>
            <div className="text-center">
                <h3 className="font-semibold text-3xl primaryText">Frequently ask questions</h3>
            </div>
            <div className='grid-cols-1 md:grid-cols-2 gap-3 grid mt-20'>
                <div className=''>
                    <div className='mt-4'>
                        <Accordion show title="Another Accordion Title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                    </div>
                    <div className='mt-4'>
                        <Accordion title="Another Accordion Title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                    </div>
                    <div className='mt-4'>
                        <Accordion title="Another Accordion Title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                    </div>

                </div>
                <div className=''>
                    <div className='mt-4'>
                        <Accordion  title="Another Accordion Title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                    </div>
                    <div className='mt-4'>
                        <Accordion title="Another Accordion Title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                    </div>
                    <div className='mt-4'>
                        <Accordion  title="Another Accordion Title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faq;