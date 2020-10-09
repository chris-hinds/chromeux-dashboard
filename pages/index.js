import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

// ui elements
import styled from "@emotion/styled";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const Wrappper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
`;

const HeroWrapper = styled(Flex)`
  height: 60vh;
  background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  font-family: "Montserrat", sans-serif;
`;

const LogoWrapper = styled.div`
  width: 80px;
`;

const Form = styled.form`
  width: 100%;
`;

export default function Home() {
  const router = useRouter();
  const [FormInput, setFormInput] = useState({ value: "" });

  const handleFormChange = (event) => {
    setFormInput({ value: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    router.push(`/dashboard?url=${FormInput.value}`);
  };
  return (
    <Wrappper>
      <Head>
        <title>Web-Vitals | chrishinds.dev</title>
      </Head>

      <Flex align="center" justify="center" direction="column" width>
        <HeroWrapper width="100%" justify="center">
          <Flex
            direction="column"
            align="center"
            justify="center"
            width={["90%", "80%", "70%"]}
          >
            <LogoWrapper>
              <FontAwesomeIcon icon={faHeartbeat} size="2x" color="white" />
            </LogoWrapper>
            <Flex
              direction="column"
              align="center"
              justify="center"
              height="40%"
            >
              <Heading
                as="h1"
                size="2xl"
                fontFamily="'Montserrat', sans-serif"
                fontWeight="400"
                color="white"
                paddingY="20px"
              >
                Monitor User Experience
              </Heading>
              <Heading
                as="h3"
                size="lg"
                textAlign="center"
                ontFamily="'Montserrat', sans-serif"
                fontWeight="200"
                color="white"
              >
                Visualise how Google and real world users experience your
                website
              </Heading>
            </Flex>

            <Flex
              direction="row"
              width={["100%", "90%", "70%"]}
              justify="center"
            >
              <Form onSubmit={handleFormSubmit}>
                <Input
                  type="url"
                  isRequired
                  value={FormInput.value}
                  onChange={handleFormChange}
                  placeholder="https://www.bbc.co.uk"
                  width="100%"
                />
                <Button mt={4} type="submit">
                  Show Me!
                </Button>
              </Form>
            </Flex>
          </Flex>
        </HeroWrapper>
      </Flex>
    </Wrappper>
  );
}
