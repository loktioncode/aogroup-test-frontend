import React from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import {
  Container,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit
} from "./styles";
import Modal from "./modal";

import { useSelector, useDispatch } from 'react-redux'
import { submitData } from '../redux-config/contactSlice'

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(4, "Name is too short")
    .required("Please enter your fullname"),
  email: Yup.string()
    .email("Email is incorrect")
    .required("Please enter Email address")
});

function ContactForm() {
  const contact = useSelector((state) => state.contact.value)
  const dispatch = useDispatch()
  const [active, setActive] = React.useState(false);


  React.useEffect(() => {
    console.log(">>>", contact)
  }, [contact])


  return (
    <Container>
      <Title>
        CONTACT US
      </Title>
      <Modal />

      <hr />
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(submitData(values));
          setActive(true);
          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);
            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValidating,
          isValid
        }) => {
          return (
            <>
              <Modal
                active={active}
                hideModal={() => setActive(false)}
                title="Modal title goes here"
                footer={<a href="/" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">BACK</a>}
              >
                Modal body content goes here..
              </Modal>
              <Form name="contact" method="post" onSubmit={handleSubmit}>
                <Label htmlFor="fullname">
                  Fullname
                  <Input
                    type="text"
                    name="fullname"
                    autoCorrect="off"
                    autoComplete="name"
                    placeholder="your fullname"
                    valid={touched.fullname && !errors.fullname}
                    error={touched.fullname && errors.fullname}
                  />
                </Label>
                {errors.fullname && touched.fullname && (
                  <StyledInlineErrorMessage>
                    {errors.fullname}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="email">
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="your email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                <ErrorMessage name="email">
                  {msg => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>

                <Label htmlFor="subject">
                  Subject
                  <Input
                    type="text"
                    name="subject"
                    autoCorrect="off"
                    autoComplete="subject"
                    placeholder="Subject"
                  />
                </Label>

                <Label htmlFor="message">
                  Message
                  <Input
                    type="text"
                    name="message"
                    autoCorrect="off"
                    autoComplete="message"
                    placeholder="Your message"
                    component="textarea"
                    rows="4"
                  />
                </Label>


                <Submit type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? `Submiting...` : `Submit`}
                </Submit>
              </Form>


            </>
          );
        }}
      </Formik>

    </Container>

  );
}


export default ContactForm;
