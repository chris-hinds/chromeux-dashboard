import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

// ui elements
import styled from "@emotion/styled";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
} from "@chakra-ui/core";

const Wrappper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #2ac0da;
`;

export default function Home() {
  const router = useRouter();
  const [formInput, setFormInput] = useState({ value: "" });

  const handleFormChange = (event) => {
    setFormInput({ value: event.target.value });
  };

  const handleFormSubmit = (event) => {
    router.push(`/origin?url=${formInput.value}`);
  };
  return (
    <Wrappper>
      <Head>
        <title>Web-Vitals | chrishinds.dev</title>
      </Head>

      <Flex align="center" justify="center" direction="column" size="100%">
        <Flex direction="column" height="40%" align="center" justify="center">
          <Heading as="h1" size="lg">
            Web-Vitals User Experience Dashboard
          </Heading>
          <Heading as="h2" size="2xl" textAlign="center">
            Visualise how Google and real world users experience your website
          </Heading>
        </Flex>

        <Flex direction="column" height="60%">
          <form onSubmit={handleFormSubmit}>
            <FormControl>
              <InputGroup size="lg">
                <Input
                  type="url"
                  isRequired
                  value={formInput.value}
                  onChange={handleFormChange}
                  placeholder="https://www.bbc.co.uk"
                />
              </InputGroup>
              <FormHelperText id="email-helper-text">
                Enter a websites origin or a popular page url.
              </FormHelperText>
            </FormControl>
            <Button mt={4} variantColor="teal" type="submit">
              Submit
            </Button>
          </form>
        </Flex>
      </Flex>
    </Wrappper>
  );
}
