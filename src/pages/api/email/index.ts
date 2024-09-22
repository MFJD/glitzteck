import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';

interface EmailData {
    email: string;
}

interface EmailProps {
    email: string;
    message: string;
    subject: string;
    name: string;
}

export const Email = () => {
    const [isloading, setisloading] = useState(false)
    const EmailServer = async ({ email, message, subject, name }: EmailProps): Promise<void> => {
        setisloading(true)
        const emailTemplate = {
            name: name,
            email: email,
            message: message,
            subject: subject
        }
        const data: EmailData = {
            email: email
        }
        try {
            await emailjs.send(
                'service_h8u9gwk',
                'template_1og46mq',
                emailTemplate,
                {
                    publicKey: 'template_8l3quon',
                },
            );
            setisloading(false)
            toast.success("Message was successfully send to Glitzteck, Contact you shortly")
            // console.log('SUCCESS!');
        } catch (err) {
            setisloading(false)
            if (err instanceof EmailJSResponseStatus) {
                // console.log('EMAILJS FAILED...', err);
                return;
            }
            // console.log('ERROR', err);
            toast.error("Something went wrong")
            
        }
    }
    return { EmailServer, isloading }
}