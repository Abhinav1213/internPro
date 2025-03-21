import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        try {
            await emailjs.send(
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
            );
            setIsSending(false);
            toast.success("Message sent successfully!");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        } catch (err) {
            setIsSending(false);
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="bg-blue-50 flex items-center justify-center py-10 px-4 min-h-[700px]" id="Contact">
            <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
                {/* Left Section - Google Map */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mt-6">Get in Touch</h2>
                    <div className="p-6 flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.8704255636242!2d72.8424941932527!3d19.119021468517936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d0553ed019%3A0xb0e9a300055aea53!2sRaj%20Kailash!5e0!3m2!1sen!2sin!4v1738645864365!5m2!1sen!2sin"
                            className="w-full max-w-lg h-[450px] md:h-[375px] rounded-lg border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>


                {/* Right Section - Form */}
                <div className="w-full md:w-1/2 bg-gray-50 p-4 flex flex-col justify-center">
                    <div className="bg-gray-200 text-center p-4 rounded-md mb-4">
                        <p className="text-md text-gray-700">
                            Ready to transform your investment approach? Get in touch with Skylife Research today. Let's build a smarter, more prosperous future together.
                        </p>
                    </div>
                    <form className="space-y-4 w-full max-w-lg mx-auto px-4 sm:px-6" onSubmit={handleSubmit}>
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>

                        {/* Email Field */}
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />

                        {/* Phone Field */}
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />

                        {/* Message Field */}
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

