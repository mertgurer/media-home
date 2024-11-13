import { HomePageSectionIds } from "@/data/homePageSections";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EMAIL_JS, REGEX } from "@/constants/constants";
import Input from "@/components/input/input";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./styles.css";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const formRef = useRef(null);
    const isInView = useInView(formRef);

    const titleVariants = (delay: number) => ({
        hidden: {
            opacity: 0.5,
            filter: "blur(4px)",
        },
        shown: {
            opacity: delay === 0 ? 1 : 0.65,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                delay: delay * 0.15,
            },
        },
    });

    const inputVariants = (delay: number) => ({
        hidden: {
            opacity: 0.5,
            filter: "blur(1px)",
            x: 10,
            y: -1,
        },
        shown: {
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: delay * 0.2,
            },
        },
    });

    const buttonVariants = {
        hidden: {
            opacity: 0.5,
            filter: "blur(4px)",
            y: 16,
        },
        shown: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeInOut",
            },
        },
    };

    async function send(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const email = (form["email"] as HTMLInputElement).value;
        const name = (form["nameSurname"] as HTMLInputElement).value;
        const subject = (form["subject"] as HTMLInputElement).value;
        const message = (form["message"] as HTMLInputElement).value;

        if (!email && !name && !subject && !message) return;

        if (!email || !name || !message) {
            alert("Lütfen tüm alanları doldurunuz.");
            return;
        }

        if (!REGEX.email.test(email)) {
            alert("Lütfen geçerli bir e-posta adresi giriniz.");
            return;
        }

        try {
            setLoading(true);

            await emailjs.sendForm(
                EMAIL_JS.serviceId,
                EMAIL_JS.templateId,
                form,
                EMAIL_JS.publicKey
            );

            form.reset();

            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <section
            id={HomePageSectionIds.CONTACT}
            ref={formRef}
            className="flex flex-col w-full items-center px-16 py-12 rounded-md bg-background gap-10 max-md:px-0"
        >
            <motion.p
                animate={isInView ? "shown" : "hidden"}
                initial="hidden"
                variants={titleVariants(0)}
                style={{
                    textShadow:
                        "0 0px 20px rgba(255, 255, 255, 0.35), 0 0px 65px rgba(255, 255, 255, 0.2)",
                }}
                className="font-medium text-center text-4xl"
            >
                - İletişime Geçin -
            </motion.p>
            <div className="flex w-full px-[20%] gap-10 max-md:px-[5%]">
                <form
                    noValidate
                    onSubmit={send}
                    className="flex flex-col items-center w-full"
                >
                    <div className="grid grid-rows-[1fr_5fr] gap-4 w-full max-md:gap-4 max-md:grid-rows-2">
                        <div className="flex gap-4 max-md:flex-col max-md:gap-4">
                            <motion.div
                                animate={isInView ? "shown" : "hidden"}
                                initial="hidden"
                                variants={inputVariants(0)}
                                className="w-full"
                            >
                                <Input
                                    id="nameSurname"
                                    title="İsim Soyisim*"
                                    inline
                                    dark
                                />
                            </motion.div>
                            <motion.div
                                animate={isInView ? "shown" : "hidden"}
                                initial="hidden"
                                variants={inputVariants(1)}
                                className="w-full"
                            >
                                <Input
                                    id="email"
                                    title="E-posta*"
                                    type="email"
                                    inline
                                    dark
                                />
                            </motion.div>
                            <motion.div
                                animate={isInView ? "shown" : "hidden"}
                                initial="hidden"
                                variants={inputVariants(2)}
                                className="w-full"
                            >
                                <Input id="subject" title="Konu" inline dark />
                            </motion.div>
                        </div>
                        <motion.div
                            animate={isInView ? "shown" : "hidden"}
                            initial="hidden"
                            variants={inputVariants(0)}
                            className="flex w-full"
                        >
                            <Input
                                id="message"
                                title="Mesaj*"
                                type="textarea"
                                inline
                                dark
                            />
                        </motion.div>
                    </div>
                    <motion.button
                        type="submit"
                        animate={isInView ? "shown" : "hidden"}
                        initial="hidden"
                        variants={buttonVariants}
                        disabled={loading}
                        style={{
                            color: "var(--text)",
                            backgroundColor:
                                "color-mix(in srgb, var(--primary), transparent 50%)",
                        }}
                        className={`flex relative items-center gap-2 w-max font-normal text-background py-[12px] px-12 rounded-md mt-8 shadow-[0_0_22px_-10px] shadow-secondary sendButton max-md:text-base ${
                            loading ? "opacity-60" : "opacity-100"
                        }`}
                    >
                        Gönder
                        <Send size={18} strokeWidth={1.75} />
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
