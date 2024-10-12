import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import SocialMediaLinks from './SocialMediaLinks';
import { useTranslation } from 'react-i18next';


function Contact() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Pole jest wymagane'),
    email: Yup.string().email('Nieprawidłowy email').required('Pole jest wymagane'),
    message: Yup.string().required('Pole jest wymagane'),
  });
  const { t } = useTranslation();

  const handleSubmit = (values, { resetForm }) => {
    emailjs.send(
      'service_oagxhyi',
      'template_hvs7x5y',
      values,
      'VCyCIvoy98sFSxbmf'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        resetForm();
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  return (
    <Box id="contact" sx={{ mt: 4 }}>
      <SocialMediaLinks />
      <Typography variant="h4" gutterBottom>
        {t('contact')}
      </Typography>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="name"
              as={TextField}
              label="Imię"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
            <Field
              name="message"
              as={TextField}
              label="Wiadomość"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              error={touched.message && !!errors.message}
              helperText={touched.message && errors.message}
            />
            <Button type="submit" variant="contained" color="primary">
              Wyślij
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Contact;
