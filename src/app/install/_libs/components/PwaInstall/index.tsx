"use client";

import { Button, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdInstallMobile } from "react-icons/md";

export default function PwaModal() {
  const [prompt, setPrompt] = useState<any>(null);

  const handleDownload = () => {
    if (prompt) {
      prompt.prompt();
    }
  };

  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  return (
    <Stack
      pt={"10"}
      direction={"row"}
      justify={"space-between"}
      align={"center"}
    >
      <Heading fontSize={"xl"} fontWeight={"semibold"}>
        Install The App
      </Heading>
      <Button
        onClick={handleDownload}
        leftIcon={<MdInstallMobile />}
        colorScheme="teal"
        variant="solid"
      >
        Install
      </Button>
    </Stack>
  );
}
