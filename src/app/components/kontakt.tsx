"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", tel: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    // Formspree endpoint (kostenlos, keine Registrierung nÃ¶tig fÃ¼r kleine Seiten)
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgblabn"; // <-- eigenen Formspree-Link eintragen!

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        // Simple client-side validation
        if (!form.name || !form.email || !form.message) {
            setError("Bitte fÃ¼llen Sie alle Pflichtfelder aus.");
            setLoading(false);
            return;
        }
        if (!privacyAccepted) {
            setError("Bitte akzeptieren Sie die DatenschutzerklÃ¤rung.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setSuccess("Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich.");
                setForm({ name: "", email: "", tel: "", message: "" });
                setPrivacyAccepted(false);
            } else {
                setError("Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
            }
        } catch {
            setError("Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
        }
        setLoading(false);
    };

    return (
        <div className="relative flex dark:bg-gray-900 items-center py-16">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 xl:px-10 md:mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                            <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-800 dark:text-white font-bold tracking-tight">
                                Treten Sie mit uns in Kontakt
                            </h1>
                            <p className="text-normal text-sm sm:text-base lg:text-lg xl:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                Schneller geht's kaum!
                            </p>
                            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-green-600 dark:text-green-400 flex-shrink-0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a href="tel:+4917645861339" className="ml-4 text-xs sm:text-sm md:text-base lg:text-xl sm:py-2 lg:py-6 tracking-wide font-semibold hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                    +49 176 4586 1339
                                </a>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-green-600 dark:text-green-400 flex-shrink-0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a href="mailto:kontakt@hausmeisterservice-braun.de" className="ml-4 text-xs sm:text-sm md:text-base lg:text-xl tracking-wide font-semibold break-words hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                    kontakt@<wbr />hausmeisterservice-braun.de
                                </a>
                            </div>
                        </div>

                        {/* Formular */}
                        <form className="px-4 flex flex-col justify-center" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="md:mt-0 mt-4 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-sm sm:text-base text-gray-800 dark:text-gray-200 font-semibold focus:border-indigo-500 focus:outline-none placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mt-2 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-sm sm:text-base text-gray-800 dark:text-gray-200 font-semibold focus:border-indigo-500 focus:outline-none placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">Telefon</label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telefon"
                                    className="mt-2 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-sm sm:text-base text-gray-800 dark:text-gray-200 font-semibold focus:border-indigo-500 focus:outline-none placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                    value={form.tel}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">Nachricht</label>
                                <div className="mt-2 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Ihre Nachricht"
                                        className="w-full h-full bg-transparent text-sm sm:text-base text-gray-800 dark:text-gray-200 font-semibold focus:outline-none resize-none scrollbar-hidden placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        style={{ overflow: "hidden", border: "none" }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    checked={privacyAccepted}
                                    onChange={e => setPrivacyAccepted(e.target.checked)}
                                    className="mr-2"
                                    required
                                />
                                <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 select-none">
                                    Ich habe die{" "}
                                    <Link href="/datenschutz" className="underline text-indigo-600 hover:text-indigo-800" target="_blank">
                                        Datenschutzerklärung
                                    </Link>{" "}
                                    gelesen und akzeptiere sie.
                                </label>
                            </div>
                            {error && <div className="text-red-600 mt-2 font-bold text-xs sm:text-sm">{error}</div>}
                            {success && <div className="text-green-600 mt-2 font-bold text-xs sm:text-sm">{success}</div>}
                            <button
                                type="submit"
                                className={`md:w-32 font-bold py-2 px-6 rounded-lg mt-3 text-sm sm:text-base transition ease-in-out duration-300 ${
                                    privacyAccepted && !loading
                                        ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                                        : "bg-gray-400 text-white cursor-not-allowed"
                                }`}
                                disabled={!privacyAccepted || loading}
                            >
                                {loading ? "Senden..." : "Absenden"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
