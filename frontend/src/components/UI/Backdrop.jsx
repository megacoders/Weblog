import { Box } from '@chakra-ui/react';

const Backkdrop = ({ show, close }) => {
  if (show) {
    return (
      <Box
        onClick={close}
        position="fixed"
        zIndex="99"
        top="0"
        left="0"
        w="full"
        h="full"
      />
    );
  }
};

export default Backkdrop;
