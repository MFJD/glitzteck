import React from "react";


const ContactForm = () => {
    return (
        <div className="w-full mt-5 md:mt-36">
            <div className="mt-5">
                <input type="text"  className="w-full border py-2.5 pl-2" placeholder="Name *"/>
            </div>
            <div className="mt-5">
                <input type="text"  className="w-full border py-2.5 pl-2" placeholder="Email@gmail.com *"/>
            </div>
            <div className="mt-5">
                <input type="text"  className="w-full border py-2.5 pl-2" placeholder="Subject *"/>
            </div>
            <div className="mt-5">
                <textarea name="" id="" className="w-full border py-2.5 p-2 outline-none" rows={8} placeholder="Message"></textarea>
            </div>
            <div className="w-full mt-5">
                <button className="w-full py-2.5 text-white primarybg">Sbmit Message</button>
            </div>
        </div>
    )
}

export default ContactForm