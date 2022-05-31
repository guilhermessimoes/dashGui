import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Guilherme Simoes</Text>
      <Text
        color="gray.300"
        fontSize="small"
      >
        guilhermejunios@gmail.com
      </Text>
    </Box>
    <Avatar size="md" name="Guilherme Simões" src="https://github.com/guilhermessimoes.png"/>
  </Flex>
  )
}