import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "react-toastify";

interface EmailProps {
  email: string;
  message: string;
  subject: string;
  name: string;
}

// rename to hook-style
export const useEmail = () => {
  const [isLoading, setIsLoading] = useState(false);

  const EmailServer = async ({
    email,
    message,
    subject,
    name,
  }: EmailProps): Promise<boolean> => {
    setIsLoading(true);

    const templateParams = {
      name,
      email,
      message,
      subject,
    };

    try {
      await emailjs.send(
        "service_h8u9gwk",      // ✅ your service ID
        "template_8l3quon",     // ✅ your template ID
        templateParams,
        {
          publicKey: "2z_EgJFGkQB1QYtPa", // ⬅️ VERY IMPORTANT: replace this
        }
      );

      toast.success(
        "Message was successfully sent to Glitzteck."
      );
      setIsLoading(false);
      return true; // success
    } catch (err) {
      setIsLoading(false);

      if (err instanceof EmailJSResponseStatus) {
        console.error("EMAILJS FAILED...", err);
      } else {
        console.error("ERROR", err);
      }

      toast.error("Something went wrong. Please try again.");
      return false; // failed
    }
  };

  return { EmailServer, isLoading };
};
