import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        emailjs
            .send(
                import.meta.env.SERVICE_ID,
                import.meta.env.TEMPLETE_ID,
                {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    to_email: "abhinavr9955@gmail.com",
                },
                import.meta.env.EMAIJS_API
            )
            .then(
                () => {
                    setIsSending(false);
                    toast.success("Message sent successfully!");
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                },
                (error) => {
                    setIsSending(false);
                    toast.error("Failed to send message. Please try again.");
                    console.error("EmailJS error:", error);
                }
            );
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 flex items-center justify-center p-4 sm:p-6"
            id="Contact"
        >
            <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg flex flex-wrap">
                {/* Left Section */}
                <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-12 flex flex-col space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                        Get in touch
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <span className="material-icons text-gray-500">location_on</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                Mumbai, India
                            </p>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <span className="material-icons text-gray-500">phone</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                +1 (555) 234-5678
                            </p>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <span className="material-icons text-gray-500">email</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                hello@example.com
                            </p>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="aspect-w-16 aspect-h-9 w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.498976539351!2d73.01316207430318!3d19.04178693614547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAyJzMwLjQiTiA3M8KwMDEnMDQuOSJF!5e0!3m2!1sen!2sin!4v1737376509318!5m2!1sen!2sin"
                            className="w-full h-full border-0 rounded-lg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 bg-gray-50 p-4 sm:p-6 md:p-12">
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            className="w-full bg-blue-600 text-white text-sm sm:text-base font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
