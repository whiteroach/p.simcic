import React from 'react'
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit,formState: {errors}} = useForm();
    const onSubmit = (data, r) => {
        alert(`Thank you for your message ${data.name}`);
        const templateId = 'template_m8on1ym';
        const serviceID = 'my_email_account';
        sendFeedback(serviceID, templateId, { from_name: data.name, message: data.comment, reply_to: data.email })
        r.target.reset();
}
    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
        serviceID, templateId,
        variables
        ).then(res => {
        console.log('Email successfully sent!')
        })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

    return (
        <div className="contactForm pt-4 mb-3">
        <form onSubmit={handleSubmit(onSubmit)}className='pt-3 pb-3'>
            
            <input name="name" {...register('name', {required:true, maxLength: {value:20, message: 'You exceed the amount of characters'}})} placeholder='Full Name'/><br/><small>{errors.name && errors.name.message}</small><br/>
            <input name="email" {...register('email', {required:true, pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , message:"Invalid email address"}})} placeholder='Email'/><br/><small>{errors.email && errors.email.message}</small><br/>
            
            <textarea name="comment" {...register('comment', {required:true})} placeholder='Leave a Message'/><br/><small>{errors.comment && "Please leave a comment"}</small><br/>
            <button type="submit" >Submit</button>
        </form>
    </div>
    )
}

export default ContactForm
