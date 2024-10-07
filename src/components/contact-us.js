import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Stack, Typography, Link } from '@mui/material';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

const ContactSection = styled.div`
  width: 100%;
  max-width: var(--max-width);
  border: 1px solid var(--design-cream);
  display: flex;
  background-color: white;
  padding: 40px;
  gap: 50px;
  border-radius: 10px;
  color: var(--design-blue);
  align-self: center;
  align-items: flex-start;
  margin-bottom: 100px;

  @media (max-width: 1250px) {
    flex-direction: column;
    max-width: 80%;
    padding: 20px;
    gap: 20px;
  }
  @media (max-width: 725px) {
    max-width: 80%;
    padding: 20px;
    gap: 20px;
  }
`;

const FieldDiv = styled.div`
  margin-bottom: 20px;

  input,
  textarea {
    box-sizing: border-box;
  }
`;

const FormField = styled(Field)`
  border: 2px solid var(--design-blue);
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
  @media (max-width: 1250px) {
    width: 100%;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--design-blue);
  margin: 20px 0;
`;

const ContactUs = () => {
  const { t } = useTranslation('common');

  const validationSchema = Yup.object({
    name: Yup.string().required(t('contact-us.name-error')),
    email: Yup.string()
      .email(t('contact-us.email-error-invalid'))
      .required(t('contact-us.email-error-required')),
    subject: Yup.string().required(t('contact-us.object-error')),
    message: Yup.string().required(t('contact-us.message-error')),
  });

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send(
        'service_6maspdm', // EmailJS service ID
        'template_ug3phe3', // EmailJS template ID
        values, // Form values from Formik
        'WPG3CZRXZ1sDXegYH', // EmailJS user ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });

    resetForm(); // Resets the form fields after submission
  };

  return (
    <Stack id="contact" marginTop="100px">
      <Typography
        textAlign="center"
        variant="h1"
        fontSize="var(--font-xlarge)"
        fontWeight="600"
        color="var(--design-blue)"
        padding="20px var(--side-padding) 20px var(--side-padding)"
      >
        {t('contact-us.contact-us-title')}
      </Typography>
      <ContactSection>
        {/* <Stack 
          sx={{
            width:"min-content", 
            height:"100%", 
            gap:"30px"
          }}>
          <Typography
            variant="h3"
            fontSize="var(--font-xmedium)"
            color="var(--design-blue)"
            fontWeight="600"
          >
           {t("contact-us.contact-us-now")}
          </Typography>
          <Stack
            gap="10px"
          >
            <Stack direction="horizontal" alignItems="center" gap="20px">
              <PhoneIcon style={{ width: '30px', height: '30px' }} />
              <Typography
                fontSize="var(--font-small)"
                color="var(--design-blue)"
              >
                +1 (418) 930-4988
              </Typography>
            </Stack>

            <Stack direction="horizontal" alignItems="center" gap="20px">
              <EmailIcon style={{ width: '30px', height: '30px' }} />
              <Typography
                fontSize="var(--font-small)"
                color="var(--design-blue)"
              >
                <Link href="mailto:admin@kozzo.ca">admin@kozzo.ca</Link>
              </Typography>
            </Stack>
          </Stack>

          <Box>
            <Typography
              fontSize="var(--font-medium)"
              color="var(--design-blue)"
              fontWeight="bold"
            >
              {t("contact-us.stay-connected")}
            </Typography>
            <Stack direction="horizontal">
              <LinkedInIcon style={{ width: '40px', height: '40px' }} />
              <InstagramIcon style={{ width: '40px', height: '40px' }} />
            </Stack>
          </Box>
        </Stack> */}
        <Stack
          sx={{
            width: '100%',
          }}
        >
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <FieldDiv>
                  <CustomLabel htmlFor="name" required>
                    {t('contact-us.name-label')}
                  </CustomLabel>
                  <FormField id="name" name="name" type="text" />
                  <ErrorMessage name="name" component="div" className="error" />
                </FieldDiv>

                <FieldDiv>
                  <CustomLabel htmlFor="email" required>
                    {t('contact-us.email-label')}
                  </CustomLabel>
                  <FormField id="email" name="email" type="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </FieldDiv>

                <FieldDiv>
                  <CustomLabel htmlFor="subject" required>
                    {t('contact-us.object-label')}
                  </CustomLabel>
                  <FormField
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={t('contact-us.object-placeholder')}
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="error"
                  />
                </FieldDiv>

                <FieldDiv>
                  <CustomLabel htmlFor="message" required>
                    {t('contact-us.message-label')}
                  </CustomLabel>
                  <FormField
                    id="message"
                    name="message"
                    as="textarea"
                    placeholder={t('contact-us.message-placeholder')}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </FieldDiv>

                <Button style={{ fontWeight: '400' }} type="submit">
                  {t('contact-us.submit-button')}
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>
      </ContactSection>
    </Stack>
  );
};

export default ContactUs;
