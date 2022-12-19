import React from "react";
import { Formik, Form, ErrorMessage } from "formik";

import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  CodeWrapper
} from "./styles";

function DynamicForm() {
  const [formValues, setFormValues] = React.useState();


  return (
    <PageWrapper>
      <Title>
        React form validation with formik and styled components demo
      </Title>


      <hr />

      <Formik
        initialValues={{
          fullname: "",
          email: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          setFormValues(values);

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
                <Submit type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? `Submiting...` : `Submit`}
                </Submit>
              </Form>

              <hr />
              <CodeWrapper>
                <strong>Errors:</strong> {JSON.stringify(errors, null, 2)}
                <strong>Touched:</strong> {JSON.stringify(touched, null, 2)}
                {formValues && <strong>Submitted values:</strong>}
                {JSON.stringify(formValues, null, 2)}
              </CodeWrapper>
            </>
          );
        }}
      </Formik>


    </PageWrapper>
    
  );
}


export default DynamicForm;
