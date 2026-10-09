import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            });
            toast.success("Thanks for reaching out! We will get back to you soon.");
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            toast.error("Oops! Something went wrong.");
        }
        setLoading(false);
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-5" style={{ minHeight: '60vh' }}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 card shadow-lg p-4">
                    <p className="text-muted text-center">Have a question or feedback? Send us a message and it will be stored securely using Netlify Forms!</p>
                    <form onSubmit={handleSubmit} name="contact" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input type="email" className="form-control" name="email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label>Message</label>
                            <textarea className="form-control" name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" disabled={loading} className="btn btn-primary btn-block mt-4">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
