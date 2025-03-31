import React, { useState, FormEvent, ChangeEvent } from 'react';

// Define interface for form data
interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

// Define interface for form errors
interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validatePhone = (phone: string): boolean => {
        // Remove any non-digit characters
        const phoneDigits = phone.replace(/\D/g, '');
        
        // Validate Brazilian phone number format (10-11 digits)
        return phoneDigits.length >= 10 && phoneDigits.length <= 11;
    };

    const validateEmail = (email: string): boolean => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // Special handling for phone number (only allow digits)
        if (name === 'phone') {
            const digitsOnly = value.replace(/\D/g, '');
            setFormData(prev => ({
                ...prev,
                [name]: digitsOnly
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Reset previous errors
        const newErrors: FormErrors = {};

        // Validate each field
        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }

        if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Telefone inválido (10-11 dígitos)';
        }

        if (!validateEmail(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mensagem é obrigatória';
        }

        // If there are errors, prevent submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If validation passes, submit the form
        const form = e.target as HTMLFormElement;
        form.submit();
    };

    return (
        <section className="py-20 bgcontact">
            <div className="text-black maxW flex justify-end">
                <article className='bg-white lg:w-[50%] flex justify-center'>
                    <form 
                        className='flex flex-col py-20 gap-4 w-[75%]' 
                        action="https://getform.io/f/bejrnzna" 
                        method='post'
                        onSubmit={handleSubmit}
                    >
                        <h1 className='text-4xl uppercase text-OrangeP font-bold'>Entre em contato</h1>
                        <h5 className='text-black font-normal'>
                            Nos conte sobre você, a sua experiência aqui no Mosteiro, críticas, sugestões e elogios, ou mesmo nos peça orações. Evoluir é ouvir as críticas, crescer é compreender as sugestões e sonhar passa primeiro pelos elogios!
                        </h5>
                        
                        <div>
                            <input 
                                className={`border-b-2 px-4 py-2 outline-none w-full ${errors.name ? 'border-red-500' : 'border-OrangeP'}`}
                                placeholder='Seu Nome' 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                        </div>
                        
                        <div>
                            <input 
                                className={`border-b-2 px-4 py-2 outline-none w-full ${errors.phone ? 'border-red-500' : 'border-OrangeP'}`}
                                placeholder='Seu Telefone' 
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                maxLength={11}
                            />
                            {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
                        </div>
                        
                        <div>
                            <input 
                                className={`border-b-2 px-4 py-2 outline-none w-full ${errors.email ? 'border-red-500' : 'border-OrangeP'}`}
                                placeholder='Seu Email' 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                        </div>
                        
                        <div>
                            <textarea 
                                className={`border-b-2 px-4 py-2 resize-none outline-none w-full ${errors.message ? 'border-red-500' : 'border-OrangeP'}`}
                                rows={4} 
                                placeholder='Escreva sua mensagem aqui'
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
                        </div>
                        
                        <div>
                            <button 
                                className='bg-OrangeP px-10 mt-6 py-4 rounded-full uppercase text-white'
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </article>
            </div>
        </section>
    );
}