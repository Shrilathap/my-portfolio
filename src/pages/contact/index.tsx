import { useState } from 'react';
import style from './contact.module.css'
const Contact = () => {

    const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone:"",
        message: "",
      });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setStatus("Sending...");
    
        try {
          const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setStatus("Email sent successfully!");
            setFormData({ name: "", email: "", phone:"", message: "" });
          } else {
            setStatus("Failed to send email.");
          }
        } catch (error) {
          setStatus("Error sending email.");
          console.error(error);
        }
      };
    return (
        <div className={`bg-cover bg-center mx-auto px-4 h-full custom-scrollbar py-4 w-full flex items-center gap-5 justify-center ${style.bg_custom}`}>
            <div className='absolute backdrop-blur bg-white/30 p-9 sm:min-w-[450px] min-w-fit'>
                <h2 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Get in touch</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange}
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>

                    <button type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
