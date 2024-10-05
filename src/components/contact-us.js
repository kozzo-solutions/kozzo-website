import React, { useEffect, useRef } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Stack, Typography, Box } from '@mui/material';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';




const ContactUs = () => {

  const [t] = useTranslation('common');
  
  const validationSchema = Yup.object({
    name: Yup.string().required({t("contact-us.kozzo-description")}),
    email: Yup.string().email('Courriel invalide').required('Courriel est requis'),
    subject: Yup.string().required('Sujet est requis'),
    message: Yup.string().required('Message est requis'),
  });

  const sectionRef = useRef(null); // Create a ref for the ContactSection

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const ContactSection = styled.div`
    width: 100%;
    max-width: var(--max-width);
    min-height: 500px;
    border: 1px solid var(--design-blue);
    display: flex;
    background-color: white;
    padding: 40px;
    margin: 30px;
    gap: 50px;
    border-radius: 30px;
    color: var(--design-blue);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    align-self: center;
    /* Add animation class */
    opacity: 0; 
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    transform: translateY(50px);
    &.show {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 1250px) {
      flex-direction: column;
      max-width: 80%;
      padding: 20px;
      gap: 20px;
      align-items: center;
    }
    @media (max-width: 725px) {
      flex-direction: column;
      max-width: 80%;
      padding: 20px;
      gap: 20px;
      align-items: center;
    }
  `;

  const FieldDiv = styled.div`
    margin-bottom: 20px;
  `;


  const FormField = styled(Field)`
    border: 2px solid var(--design-blue);
    width: 100%;
  `;

  const CustomLabel = styled.label`
    color: var(--design-blue);
    font-size: var(--font-medium)
    font-family: var(--font-family);
    font-weight: bold;
  `;

  const Button = styled.button`
  padding: 12px !important;
  font-size: var(--font-small) !important;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border-radius: 20px;
  color: var(--design-cream);
  background-color: var(--design-blue);
  @media (max-width: 1250px){
    width: 100%;
  }
`;

  const handleSubmit = (values, { resetForm }) => {
    emailjs.send(
      'service_6maspdm',          // EmailJS service ID
      'template_ug3phe3',         // EmailJS template ID
      values,                     // Form values from Formik
      'WPG3CZRXZ1sDXegYH'         // EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });

    resetForm();  // Resets the form fields after submission
  };

  return (
    <Stack marginTop="100px">
      <Typography
        variant="h1"
        fontSize="80px"
        fontWeight="600"
        color="var(--design-blue)"
        fontFamily="var(--font-family)"
        alignSelf="center"
      >
        Parlons de votre projet!
      </Typography>
      <ContactSection ref={sectionRef} className="fade-in-up">
        <Stack width="50%" height="100%" gap="30px">

          <Typography
            variant="h3"
            fontSize="var(--font-medium)"
            color="var(--design-blue)"
            fontWeight="bold"
          >
            Besoin d'aide avec votre projet technologique? <br /><br /> Contactez-nous dès maintenant!
          </Typography>
          <Stack gap="10px" borderBottom="2px solid var(--design-blue)" paddingBottom="25px">
            <Stack direction="horizontal" alignItems="center" gap="20px">
              <PhoneIcon style={{ width: '40px', height: '40px' }} />
              <Typography fontSize="var(--font-medium)" color="var(--design-blue)">
                +1(418)-930-4988
              </Typography>
            </Stack>

            <Stack direction="horizontal" alignItems="center" gap="20px">
              <EmailIcon style={{ width: '40px', height: '40px' }} />
              <Typography fontSize="var(--font-medium)" color="var(--design-blue)">
                admin@kozzo.ca
              </Typography>
            </Stack>
          </Stack>

          <Box>
            <Typography fontSize="var(--font-medium)" color="var(--design-blue)" fontWeight="bold">
              Restons connectés
            </Typography>
            <Stack direction="horizontal">
              <LinkedInIcon style={{ width: '50px', height: '50px' }} />
              <InstagramIcon style={{ width: '50px', height: '50px' }} />
            </Stack>
          </Box>

        </Stack>
        <Stack width="50%">
          <Typography
            variant="h2"
            fontSize="var(--font-large)"
            color="var(--design-blue)"
            fontWeight="bold"
            marginBottom="20px"
          >
            Comment pouvons-nous vous aider?
          </Typography>
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <FieldDiv>
                  <CustomLabel htmlFor='name' required>Nom</CustomLabel>
                  <FormField id='name' name="name" type="text" placeholder="Kozzo" />
                  <ErrorMessage name="name" component="div" className="error" />
                </FieldDiv>

                <FieldDiv>
                  <CustomLabel htmlFor="email" required>Courriel</CustomLabel>
                  <FormField id="email" name="email" type="email" placeholder="admin@kozzo.ca" />
                  <ErrorMessage name="email" component="div" className="error" />
                </FieldDiv>


                <FieldDiv>
                  <CustomLabel htmlFor="subject" required>Sujet</CustomLabel>
                  <FormField id="subject" name="subject" type="text" placeholder="Let's work together!" />
                  <ErrorMessage name="subject" component="div" className="error" />
                </FieldDiv>


                <FieldDiv>
                  <CustomLabel htmlFor='message' required>Message</CustomLabel>
                  <FormField id='message' name="message" as="textarea" placeholder="Kozzo is looking forward to work with you!" />
                  <ErrorMessage name="message" component="div" className="error" />
                </FieldDiv>


                <Button type="submit">Commencez votre aventure</Button>
              </Form>
            )}
          </Formik>
        </Stack>
      </ContactSection>
    </Stack>
  );
};

export default ContactUs;
