import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Nom est requis'),
  email: Yup.string().email('Email invalide').required('Email est requis'),
  subject: Yup.string().required('Sujet est requis'),
  message: Yup.string().required('Message est requis'),
});

const ContactUs = () => (
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
            <Form>
              <div className="client-personal-info">
                <div className="form-group">
                  <Field name="name" type="text" placeholder="Nom" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="form-group">
                  <Field name="email" type="email" placeholder="Email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="form-group client-request-info">
                <Field name="subject" type="text" placeholder="Sujet" />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group client-request-info">
                <Field name="message" as="textarea" placeholder="Message" />
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
);

export default ContactUs;
