// ui elements
import { Box, Text, Tooltip, Stack } from "@chakra-ui/core";
import { MdSmartphone, MdTabletMac, MdDesktopMac } from "react-icons/md";

const RecordKey = ({ data }) => {
  const { formFactor, effectiveConnectionType } = data;

  const icon = {
    PHONE: MdSmartphone,
    TABLET: MdTabletMac,
    DESKTOP: MdDesktopMac,
  };

  // console.log(icon[formFactor]);

  return (
    <Tooltip
      placement="top"
      label={`Connection type: ${effectiveConnectionType} & Form factor: ${formFactor}`}
    >
      <Stack isInline marginY="3">
        <Box as={icon[formFactor]} size="32px" />

        <Text as="b" fontSize="22px">
          {effectiveConnectionType}
        </Text>
      </Stack>
    </Tooltip>
  );
};

export default RecordKey;
