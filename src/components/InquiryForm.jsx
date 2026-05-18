import React, { useState, useEffect } from 'react';
import { Loader2, Send } from 'lucide-react';

export default function InquiryForm() {
    const [categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false); // Track loading state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category_id: '',
        service_id: '',
        message: '', // New message field
    });
    const [status, setStatus] = useState({ text: "", type: "" });

    // Fetch categories on mount
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/categories/`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Error fetching categories:", err));
    }, []);

    // Fetch services when category_id changes
    useEffect(() => {
        if (formData.category_id) {
            fetch(`${import.meta.env.VITE_API_URL}/api/categories/${formData.category_id}/services/`)
                .then(res => res.json())
                .then(data => setServices(data))
                .catch(err => console.error("Error fetching services:", err));
        } else {
            setServices([]);
        }
    }, [formData.category_id]);

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'category_id') {
            setFormData({ ...formData, [name]: value, service_id: '' });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ text: "", type: "" });

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/inquiry/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus({ text: "Inquiry sent successfully!", type: "success" });
                // Reset form including new message field
                setFormData({ name: "", email: "", phone: "", category_id: "", service_id: "", message: "" });
            } else {
                setStatus({ text: `Error: ${data.error || 'Check your details'}`, type: "error" });
            }
        } catch (err) {
            setStatus({ text: "Network error—please try again.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form 
            className="bg-white p-8 rounded-[2rem] shadow-2xl w-full max-w-md border border-emerald-50 relative overflow-hidden" 
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-black mb-6 text-slate-900 flex items-center gap-2">
                Make an Inquiry
            </h2>

            <div className="space-y-4">
                <input 
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-slate-400 text-slate-700" 
                    type="text" placeholder="Full Name" name="name" 
                    value={formData.name} onChange={handleChange} required 
                />
                
                <input
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-slate-400 text-slate-700" 
                    type="email" placeholder="Email Address" name="email" 
                    value={formData.email} onChange={handleChange} required
                />

                <input 
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-slate-400 text-slate-700" 
                    type="tel" placeholder="Phone Number" name="phone" 
                    value={formData.phone} onChange={handleChange} required 
                />

                <select
                    className="w-full border border-slate-200 p-3 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all text-slate-700"
                    name="category_id" value={formData.category_id} onChange={handleChange} required 
                >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>

                <select
                    className={`w-full border p-3 rounded-xl bg-white transition-all text-slate-700 ${!formData.category_id ? 'bg-slate-50 opacity-50 cursor-not-allowed' : 'focus:ring-2 focus:ring-emerald-500'}`}
                    name="service_id" value={formData.service_id} onChange={handleChange}
                    disabled={!formData.category_id}  
                >
                    <option value="">Select Service (Optional)</option>
                    {services.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                </select>

                {/* New Optional Message Field */}
                <textarea 
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-slate-400 text-slate-700 min-h-[100px]"
                    placeholder="Tell us about your project (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button 
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                    type="submit"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send size={18} />
                            Send Inquiry
                        </>
                    )}
                </button>
            </div>

            {status.text && (
                <div className={`mt-6 p-4 rounded-xl text-center text-sm font-bold transition-all animate-in fade-in slide-in-from-top-2 ${
                    status.type === 'success' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                    : 'bg-red-50 text-red-700 border border-red-100'
                }`}>
                    {status.text}
                </div>
            )}
        </form>
    );
}