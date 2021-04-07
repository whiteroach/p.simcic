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
        <div className="contactForm">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label for='name'>Full Name: </label><br/>
            <input name="name" {...register('name', {required:true, maxLength: {value:20, message: 'You exceed the amount of characters'}})} /><br/>{errors.name && errors.name.message}<br/>
            <label for='email'>Your Email: </label><br/>
            <input name="=email" {...register('email', {required:true, pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , message:"Invalid email address"}})} /><br/>{errors.email && errors.email.message}<br/>
            <label for='comment'>Your Message: </label><br/>
            <textarea name="comment" {...register('comment', {required:true})} /><br/>{errors.comment && "Please leave a comment"}<br/>
            <button type="submit" >Submit</button>
        </form>
    </div>
    )
}

export default ContactForm
