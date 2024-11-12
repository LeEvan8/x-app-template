import {
  EMAIL_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  X_TWITTER_URL,
  YOUTUBE_URL,
} from "../../../const";
import { HStack, Link } from "@chakra-ui/react";
import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const Socials: React.FC = () => {
  return (
    <HStack color={"white"} spacing={4}>
      <Link href={X_TWITTER_URL} isExternal>
        <FaXTwitter size={22} cursor={"pointer"} />
      </Link>
      <Link href={INSTAGRAM_URL} isExternal>
        <FaInstagram size={22} cursor={"pointer"} />
      </Link>
      <Link href={TELEGRAM_URL} isExternal>
        <FaTelegram size={22} cursor={"pointer"} />
      </Link>
      <Link href={YOUTUBE_URL} isExternal>
        <FaYoutube size={22} cursor={"pointer"} />
      </Link>
      <Link href={LINKEDIN_URL} isExternal>
        <FaLinkedinIn size={22} cursor={"pointer"} />
      </Link>
      <Link href={EMAIL_URL} isExternal>
        <FaEnvelope size={22} cursor={"pointer"} />
      </Link>
    </HStack>
  );
};
