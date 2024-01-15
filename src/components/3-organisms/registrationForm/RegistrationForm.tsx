import FormInput from '@/components/2-molecules/formInput/FormInput';
import { Box, Button, Checkbox, Flex, Spacer, Link } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      tc: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <Box
      flexGrow="1"
      p={{ base: 4, sm: 8, md: 4, lg: 8, xl: 16 }}
      py={{ base: 6, lg: 8, xl: 12 }}
    >
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        style={{ display: 'flex', minHeight: '100%' }}
      >
        <Flex direction="column" flexGrow="1">
          <Spacer />
          <FormInput
            isRequired
            label={'Full name'}
            htmlFor="username"
            type={'text'}
            placeholder="Type your full name"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <FormInput
            isRequired
            label={'Email'}
            htmlFor="email"
            type={'email'}
            placeholder="Type your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormInput
            isRequired
            label={'Password'}
            htmlFor="password"
            type={'password'}
            placeholder="Type a new password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Checkbox
            id="tc"
            name="tc"
            colorScheme="brand"
            alignSelf="stretch"
            onChange={formik.handleChange}
            isChecked={formik.values.tc}
            mt={2}
          >
            I have read and agree to the{' '}
            <Link to="#some-link" as={NavLink} color="brand.500">
              terms & conditions
            </Link>
            .
          </Checkbox>
          <Spacer />
          <Spacer />
          <Button colorScheme="brand" mt={8} alignSelf="stretch" type="submit">
            Registration
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default RegistrationForm;
