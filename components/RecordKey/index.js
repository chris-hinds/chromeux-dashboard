import { useRouter } from "next/router";

// ui elements
import { Button, Box, Text, Tooltip, Stack } from "@chakra-ui/core";
import { MdSmartphone, MdTabletMac, MdDesktopMac } from "react-icons/md";

const isDisabled = (value, currentValue) =>
  value === currentValue ? true : false;

const RecordKey = ({ data }) => {
  const router = useRouter();
  const { formFactor, effectiveConnectionType } = data;

  const icon = {
    PHONE: MdSmartphone,
    TABLET: MdTabletMac,
    DESKTOP: MdDesktopMac,
  };

  // console.log(icon[formFactor]);

  return (
    <Stack isInline marginY="3">
      <Button
        leftIcon={MdSmartphone}
        disabled={isDisabled("phone", formFactor)}
        onClick={() => router.push(`/site/${router.query.tld}/phone`)}
        variantColor="pink"
        variant="solid"
      >
        Mobile
      </Button>

      <Button
        leftIcon={MdTabletMac}
        disabled={isDisabled("tablet", formFactor)}
        onClick={() => router.push(`/site/${router.query.tld}/tablet`)}
        variantColor="pink"
        variant="solid"
      >
        Tablet
      </Button>

      <Button
        leftIcon={MdDesktopMac}
        disabled={isDisabled("desktop", formFactor)}
        onClick={() => router.push(`/site/${router.query.tld}/desktop`)}
        variantColor="pink"
        variant="solid"
      >
        Desktop
      </Button>
      {/* <Box as={icon[formFactor]} size="32px" /> */}

      <Text as="b" fontSize="22px">
        {effectiveConnectionType}
      </Text>
    </Stack>
  );
};

export default RecordKey;
