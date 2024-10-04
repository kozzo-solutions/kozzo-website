import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const validationSchema = Yup.object({
  name: Yup.string().required('Nom est requis'),
  email: Yup.string().email('Email invalide').required('Email est requis'),
  subject: Yup.string().required('Sujet est requis'),
  message: Yup.string().required('Message est requis'),
});

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    object: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6maspdm',           // EmailJS service ID
      'template_ug3phe3',          // EmailJS template ID
      formData,                    // Form data
      'WPG3CZRXZ1sDXegYH'               // EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      console.error('FAILED...', error);
    });

    setFormData({ name: '', email: '',  object: '', message: '' });
  };

  return(
    <div className="contact-us-section">
      <h2>Contact</h2>
      <div className="contact-us-content">
        <div className="contact-us-content-left">
          <h3>Parlons de votre projet!</h3>
          <p>
            Besoin d'aide avec votre projet technologique? Nous pouvons vous
            aider!
          </p>
          <div className="contact-infos">
            <div className="contact-info">
              <PhoneIcon></PhoneIcon>
              <p>+1(418)-930-4988</p>
            </div>
            <div className="contact-info">
              <EmailIcon></EmailIcon>
              <p>admin@kozzo.ca</p>
            </div>
          </div>
          <p>Restons connectés</p>
          <div className="social-medias">
            <LinkedInIcon></LinkedInIcon>
            <InstagramIcon></InstagramIcon>
          </div>
        </div>
        <div className="contact-us-content-right">
          <h3>Comment pouvons-nous vous aider?</h3>
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {() => (
              <Form onSubmit={handleSubmit}>
                <div className="client-personal-info">
                  <div className="form-group">
                    <Field name="name" type="text" placeholder="Nom" value={formData.name} onChange={handleChange} />
                    <ErrorMessage name="name" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <Field name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>

                <div className="form-group client-request-info">
                  <Field name="object" type="text" placeholder="Sujet" value={formData.object} onChange={handleChange}/>
                  <ErrorMessage
                    name="object"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group client-request-info">
                  <Field name="message" as="textarea" placeholder="Message" value={formData.message} onChange={handleChange}/>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </div>

                <button type="submit">Envoyer</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
};

export default ContactUs;
