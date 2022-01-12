import { addApolloState, initializeApollo } from "../lib/apolloClient";
import { PostsDocument, usePostsQuery } from "../generated/graphql";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Layout from "../components/Layout";
import PostEditDeleteButtons from "../components/PostEditDeleteButtons";
import { NetworkStatus } from "@apollo/client";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import UpvoteSection from "../components/UpvoteSection";

export const limit = 3;

const Index = () => {
  const { data, loading, fetchMore, networkStatus } = usePostsQuery({
    variables: { limit },

    notifyOnNetworkStatusChange: true,
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  const loadMorePosts = () =>
    fetchMore({ variables: { cursor: data?.posts?.cursor } });

  //  {meData?.me?.id === post.user.id && ( bo check
  return (
    <>
      <Layout>
        {loading && !loadingMorePosts ? (
          <Flex justifyContent='center' alignItems='center' minH='100vh'>
            <Spinner />
          </Flex>
        ) : (
          <Stack spacing={8}>
            {data?.posts?.paginatedPosts.map((post) => (
              <Flex key={post.id} p={5} shadow='md' borderwith='1px'>
                <UpvoteSection post={post} />
                <Box flex={1}>
                  <NextLink href={`post/${post.id}`}>
                    <Link>
                      <Heading fontSize='x1'>{post.title}</Heading>
                    </Link>
                  </NextLink>
                  <Text>posted by {post.user.username}</Text>
                  <Flex align='center'>
                    <Text mt={4}>{post.textSnippet}</Text>
                  </Flex>
                  <Box ml='auto'>
                    <PostEditDeleteButtons
                      postId={post.id}
                      postUserId={post.user.id}
                    />
                    )
                  </Box>
                </Box>
              </Flex>
            ))}
          </Stack>
        )}
        {data?.posts?.hasMore && (
          <Flex>
            <Button
              m='auto'
              my={8}
              isLoading={loadingMorePosts}
              onClick={loadMorePosts}
            >
              {loadingMorePosts ? "Loading" : "Show more"}
            </Button>
          </Flex>
        )}
      </Layout>
    </>
  );
};

// gửi yêu cầu tới server
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // console.log("CONTEXT", context.req.headers);

  const apolloClient = initializeApollo({ headers: context.req.headers });
  await apolloClient.query({
    query: PostsDocument,
    variables: {
      limit,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Index;
