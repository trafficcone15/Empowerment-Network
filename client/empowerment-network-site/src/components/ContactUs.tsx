import '../styles/ContactUs.scss';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [notificationType, setNotificationType] = useState<'success' | 'error' | null>(null);
    const contactUsPhone = import.meta.env.VITE_CONTACT_US_PHONE;
    const contactUsEmail = import.meta.env.VITE_CONTACT_US_EMAIL;

    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    const [dialogContent, setDialogContent] = useState('');
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let tempErrors = { firstName: '', lastName: '', email: '', phone: '', message: '' };
        let formIsValid = true;

        if (!formState.firstName.trim()) {
            tempErrors.firstName = 'First name is required';
            formIsValid = false;
        }

        if (!formState.lastName.trim()) {
            tempErrors.lastName = 'Last name is required';
            formIsValid = false;
        }

        if (!formState.email.trim()) {
            tempErrors.email = 'Email is required';
            formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            tempErrors.email = 'Email is not valid';
            formIsValid = false;
        }

        if (!formState.phone.trim()) {
            tempErrors.phone = 'Phone number is required';
            formIsValid = false;
        }

        if (!formState.message.trim()) {
            tempErrors.message = 'Message is required';
            formIsValid = false;
        }

        setErrors(tempErrors);
        return formIsValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        const formattedPayload = {
            name: formState.firstName.trim() + formState.lastName.trim(),
            email: formState.email.trim(),
            phone: formState.phone.trim(),
            message: formState.message.trim()
        }

        try {
            await axios.post(`${apiUrl}/api/contact/send-email`, formattedPayload);
            setDialogContent('Message sent successfully!');
            setNotificationType('success');
        } catch (error) {
            setDialogContent('Failed to send message. Please try again.');
            setNotificationType('error');
        } finally {
            setShowNotification(true);
            setIsLoading(false);
            setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
        }
    };

    return (
        <div className='contact-us-container'>
            <div className='contact-us-info-section'>
                <div className='contact-us-side-section'>
                    <div className='contact-us-side-wrapper'>
                        <h1 className="sub-heading-text">Contact Us</h1>
                        <div className='phone-number side-info'><p>{contactUsPhone}</p></div>
                        <div className='email-address side-info'><p>{contactUsEmail}</p></div>
                    </div>
                </div>
                <div className='contact-us-form-section'>
                    <Box sx={{ flexGrow: 1 }}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        variant="filled"
                                        value={formState.firstName}
                                        onChange={handleInputChange}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        variant="filled"
                                        value={formState.lastName}
                                        onChange={handleInputChange}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="email"
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        variant="filled"
                                        value={formState.email}
                                        onChange={handleInputChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        fullWidth
                                        variant="filled"
                                        value={formState.phone}
                                        onChange={handleInputChange}
                                        error={!!errors.phone}
                                        helperText={errors.phone}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="message"
                                        name="message"
                                        label="Message"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant="filled"
                                        value={formState.message}
                                        onChange={handleInputChange}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: '#F8E6E8', color: 'black' }}
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Sending...' : 'Submit'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                    {showNotification && (
                        <div className={`notification ${notificationType}`}>
                            <p>{dialogContent}</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default ContactUs;