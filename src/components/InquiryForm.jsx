import React, { useState, useEffect } from 'react';
import { Loader2, Send } from 'lucide-react';
import { mockCategories } from '../mockData';

export default function InquiryForm() {
  const [categories, setCategories] = useState(mockCategories);
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '', 
    service: '',  
    message: '',
  });
  
  const [status, setStatus] = useState({ text: "", type: "" });
  
  // Set to false for Netlify. Change to true when Django is live.
  const useBackend = false;

  useEffect(() => {
    if (!useBackend) return;
    fetch("https://your-django-url.com/api/categories/")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, [useBackend]);

  useEffect(() => {
    if (formData.category) {
      const selectedCat = categories.find(c => String(c.id) === String(formData.category));
      setServices(selectedCat && selectedCat.services ? selectedCat.services : []);
    } else {
      setServices([]);
    }
  }, [formData.category, categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') {
      setFormData({ ...formData, [name]: value, service: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ text: "", type: "" });

    if (!useBackend) {
      setTimeout(() => {
        setStatus({ text: "Inquiry sent successfully! (Demo Mode)", type: "success" });
        setFormData({ name: '', email: '', phone: '', category: '', service: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      const res = await fetch("https://your-django-url.com/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ text: "Inquiry sent successfully!", type: "success" });
        setFormData({ name: '', email: '', phone: '', category: '', service: '', message: '' });
      } else {
        setStatus({ text: "Error sending inquiry.", type: "error" });
      }
    } catch (err) {
      setStatus({ text: "Network error.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="bg-white p-8 rounded-[2rem] shadow-2xl w-full max-w-md border border-emerald-50 relative" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-black mb-6 text-slate-900 flex items-center gap-2">Start a Conversation</h2>
      <div className="space-y-4">
        <input className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
        <input className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
        <input className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" type="tel" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
        
        <select className="w-full border p-3 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 outline-none" name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>

        <select className={`w-full border p-3 rounded-xl bg-white ${!formData.category ? 'opacity-50 cursor-not-allowed' : 'focus:ring-2 focus:ring-emerald-500'}`} name="service" value={formData.service} onChange={handleChange} disabled={!formData.category}>
          <option value="">Select Service (Optional)</option>
          {services.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <textarea className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none min-h-[100px]" placeholder="Tell us about your project" name="message" value={formData.message} onChange={handleChange}></textarea>

        <button disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2" type="submit">
          {isSubmitting ? <><Loader2 className="animate-spin" size={18} /> Sending...</> : <><Send size={16} /> Send Inquiry</>}
        </button>
      </div>
      {status.text && (
        <div className={`mt-6 p-4 rounded-xl text-center text-sm font-bold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {status.text}
        </div>
      )}
    </form>
  );
}