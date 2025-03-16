import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";


const ContactUs = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // console.log(import.meta.env.VITE_SERVICE_ID);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        try {
            await emailjs
                .send(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLETE_ID,
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                        to_email: "abhinavr9955@gmail.com",
                    },
                    import.meta.env.VITE_EMAIJS_API
                )
            setIsSending(false);
            toast.success("Message sent successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        }
        catch (err) {
            setIsSending(false);
            toast.error("Failed to send message. Please try again.");
            console.error("EmailJS error:", err);
        }
    };

    return (
        <div
            className="bg-gradient-to-b from-blue-100 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-8"
            id="Contact"
        >
            <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg flex flex-wrap">
                <div className="w-full md:w-[42%] p-6 md:p-8 flex flex-col space-y-8 items-center">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        Get in Touch
                    </h2>
                    <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.8704255636242!2d72.8424941932527!3d19.119021468517936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d0553ed019%3A0xb0e9a300055aea53!2sRaj%20Kailash!5e0!3m2!1sen!2sin!4v1738645864365!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="w-full md:w-[58%] bg-gray-50 p-6">
                    <div className="space-y-4 w-full">
                        <div className="p-4 mb-10 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-base text-gray-700 text-center">
                                Ready to transform your investment approach? Get in touch with Skylife Research today. Let’s build a smarter, more prosperous future together.
                            </p>
                        </div>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Phone number"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {isSending ? "Sending..." : "Send message"}
                        </button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>



    );
};

export default ContactUs;
