import React, { useState } from "react";
import { Email } from "@/pages/api/email";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t} = useTranslation();
    const [email, setEmail] = useState('')
    const [name, setName] = useState<string>('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const EmailSend = Email()
    const handleEmail = (e: any) => {
        e.preventDefault()
        EmailSend.EmailServer({ email, name, subject, message })
    }
    return (
        <div className="w-full mt-5 md:mt-36">
            <div className="mt-5">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border py-2.5 pl-2"
                    placeholder={t('contactname')}
                />
            </div>
            <div className="mt-5">
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border py-2.5 pl-2"
                    placeholder="Email@gmail.com *"
                />
            </div>
            <div className="mt-5">
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border py-2.5 pl-2"
                    placeholder={t('contactsubject')}
                />
            </div>
            <div className="mt-5">
                <textarea
                    name=""
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id=""
                    className="w-full border py-2.5 p-2 outline-none"
                    rows={8}
                    placeholder={t('contactmessage')}
                >

                </textarea>
            </div>
            <div className="w-full mt-5">
                <button onClick={handleEmail} className="w-full py-2.5 text-white primarybg">{EmailSend.isloading ? <p>{t('contactbuttonsending')}</p> : <p>{t('contactbuttonsend')}</p>}</button>
            </div>
        </div>
    )
}

export default ContactForm