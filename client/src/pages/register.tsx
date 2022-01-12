import { Formik, Form, FormikHelpers } from "formik";
import { Box, Button, Flex, Spinner, useToast } from "@chakra-ui/react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";

// import { useMutation } from "@apollo/client";
import {
  MeDocument,
  MeQuery,
  RegisterInput,
  useRegisterMutation,
} from "../generated/graphql";
import { mapFieldErrors } from "../helpers/mapFieldErrors";
import { useRouter } from "next/router";
import { useCheckAuth } from "../utils/useCheckAuth";

const Register = () => {
  const router = useRouter();

  const { data: authData, loading: authLoading } = useCheckAuth();

  const initialValues: RegisterInput = {
    username: "",
    email: "",
    password: "",
  };

  //   interface UserMutationResponse {
  //     code: number;
  //     success: boolean;
  //     message: string;
  //     user: string;
  //     error: string;
  //   }

  //   interface NewUserInput {
  //     username: string;
  //     email: string;
  //     password: string;
  //   }

  const [registerUser, { loading: _registerUserLoading, error }] =
    useRegisterMutation();
  const toast = useToast();

  //   = useMutation<
  //     { register: UserMutationResponse },
  //     { registerInput: NewUserInput }
  //   >(registerMutation);

  const onRegisterSubmit = async (
    values: RegisterInput,
    { setErrors }: FormikHelpers<RegisterInput>
  ) => {
    const response = await registerUser({
      variables: {
        registerInput: values,
      },
      update(cache, { data }) {
        if (data?.register.success) {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: { me: data.register.user },
          });
        }
      },
    });
    if (response.data?.register.errors) {
      setErrors(mapFieldErrors(response.data.register.errors));
    } else if (response.data?.register.user) {
      toast({
        title: "Welcome.",
        description: `${response.data.register.user.username}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.push("/");
    }
  };

  // {data && data.register.success && (
  // <p>Registered successfylly{JSON.stringify}</p>
  // )}
  return (
    <>
      {authLoading || (!authLoading && authData?.me) ? (
        <Flex justifyContent='center' alignItems='center' minH='100vh'>
          <Spinner />
        </Flex>
      ) : (
        <Wrapper size='small'>
          {error && <p>Failed to register.Internal server error</p>}

          <Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name='username'
                  placeholder='Username'
                  label='Username'
                  type='text'
                />
                <Box mt={4}>
                  <InputField
                    name='email'
                    placeholder='Email'
                    label='Email'
                    type='text'
                  />
                </Box>
                <Box mt={4}>
                  <InputField
                    name='password'
                    placeholder='Password'
                    label='Password'
                    type='password'
                  />
                </Box>
                <Button
                  type='submit'
                  colorScheme='teal'
                  mt={4}
                  isLoading={isSubmitting}
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      )}
    </>
  );
};
export default Register;
