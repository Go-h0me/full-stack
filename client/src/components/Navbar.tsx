import { gql, Reference } from "@apollo/client";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  MeDocument,
  MeQuery,
  useLogoutMutation,
  useMeQuery,
} from "../generated/graphql";

const Navbar = () => {
  const { data, loading: useMeQueryLoading } = useMeQuery();
  const [logout, { loading: useLogoutMutationLoading }] = useLogoutMutation();

  const logoutUser = async () => {
    await logout({
      update(cache, { data }) {
        if (data?.logout) {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              me: null,
            },
          });
          cache.modify({
            fields: {
              posts(existing) {
                existing.paginatedPosts.forEach((post: Reference) => {
                  //lat ve 0
                  cache.writeFragment({
                    id: post.__ref, // post 17
                    fragment: gql`
                      fragment VoteType on Post {
                        voteType
                      }
                    `,
                    data: {
                      voteType: 0,
                    },
                  });
                });
                return existing;
              },
            },
          });
        }
      },
    });
  };

  let body;

  if (useMeQueryLoading) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/login'>
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href='/register'>
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <NextLink href='/create-post'>
          <Button mr={4}>Create Post</Button>
        </NextLink>
        <Button onClick={logoutUser} isLoading={useLogoutMutationLoading}>
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Box bg='tan' p={4}>
      <Flex maxw={800} justifyContent='space-between' align='center' m='auto'>
        <NextLink href='/'>
          <Heading>Gohome</Heading>
        </NextLink>
        <Box>{body}</Box>
      </Flex>
    </Box>
  );
};

export default Navbar