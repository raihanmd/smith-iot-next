"use client";

import { Button, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { MdKeyboardCommandKey } from "react-icons/md";

export default function Header() {
  return (
    <Stack px={"2"} pt={"10"} pb={"4"} gap={"0"}>
      <Flex justify={"space-between"} align={"center"}>
        <Heading color={"text.primary"} fontSize={"2xl"}>
          Hi, Smith!
        </Heading>
        <Button
          p={"1"}
          bg={"transparent"}
          role={"group"}
          transition={"all 0.3s"}
          _hover={{ bg: "text.primary" }}
        >
          <Icon
            as={MdKeyboardCommandKey}
            fontSize={"xl"}
            transition={"all 0.3s"}
            color={"text.primary"}
            _groupHover={{ color: "foreground" }}
          />
        </Button>
      </Flex>
      <Text color={"text.secondary"} fontSize={"sm"}>
        Selamat datang di smart home!
      </Text>
    </Stack>
  );
}
