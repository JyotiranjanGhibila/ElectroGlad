import { ReactNode } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Input,
  Grid,
  StackItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { BsCart, BsPerson } from "react-icons/bs";

import { AiFillGift, AiFillLike, AiOutlineLike, AiOutlineTrademarkCircle } from "react-icons/ai";
import Dropdown from "../NavComponents/Dropdown";
import NavDrawer from "../NavComponents/Drawer";
import { FcLike } from "react-icons/fc";
import { FaRegAddressCard} from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent={"center"}
        background="black"
        color="white"
        padding={"5px"}
        fontSize="sm"
        display={["none", "none", "none", "block"]}
      >
        <Text textColor={"orange"} fontWeight="bold" marginRight={"5px"}>
          CALL & SAVE.
        </Text>{" "}
        Save up to $200 on most brands exclusively when you call your Personal
        Shopper at
        <Text
          textColor={"orange"}
          fontWeight="bold"
          marginRight={"5px"}
          marginLeft={"5px"}
        >
          888-270-6162.
        </Text>{" "}
        CALL NOW
      </Flex>

      <Box
        bg={useColorModeValue("#002f6c")}
        color="white"
        px={4}
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={1} alignItems={"left"}>
            <Grid
              display={["flex", "flex", "flex", "none"]}
              alignItems="center"
            >
              <NavDrawer />
            </Grid>

            <Box fontSize={["xl", "2xl", "4xl", "4xl"]} fontFamily="cursive">
              ElectroGlad
            </Box>
          </HStack>
          <Flex alignItems={"center"} width={["40%", "40%", "50%", "50%"]}>
            <InputGroup mt={2} mr="15px" display={["none", "none", "block"]}>
              <Input
                placeholder="Search"
                borderRadius="20px"
                variant={"none"}
              />
              <InputRightElement
                children={<Search2Icon size={"18px"} color={"gray"} />}
              />
            </InputGroup>
            <Menu>
              <Flex
                variant={"Avatar"}
                cursor={"pointer"}
                minW={"200px"}
                alignItems="center"
                textAlign={"center"}
              >
                <BsPerson size={"30px"} marginRight="-10px" />
                <Box
                  lineHeight={1}
                  textAlign="center"
                  w={"fit-content"}
                  display={["none", "block", "block", "block"]}
                >
                  <p> Hi,name</p>
                  <Menu>
                    <MenuButton
                      as={Button}
                      bg="none"
                      height="fit-content"
                      width={"max-content"}
                      rightIcon={<ChevronDownIcon />}
                    >
                      My Account
                    </MenuButton>
                    <MenuList textColor="black" padding={"10px"}>
                      <MenuItem>
                        <AiFillGift /> Join VIP Rewards
                      </MenuItem>
                      <MenuItem>
                        <BsPerson /> My Account
                      </MenuItem>
                      <MenuItem>
                        <BiShoppingBag /> My Orders
                      </MenuItem>
                      <MenuItem>
                        <FcLike /> <span>Wishlists</span>
                      </MenuItem>
                      <MenuItem>
                        <FaRegAddressCard /> Address books
                      </MenuItem>
                      <a href="">Signout</a>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"Avatar"}
                cursor={"pointer"}
                minW={0}
              >
                <BsCart size={"30px"} />
              </MenuButton>
              <MenuList alignItems={"flex-start"} color="black">
                <MenuItem>Total items:</MenuItem>
                <MenuItem>Total price:</MenuItem>
                <MenuDivider />
                <MenuItem>Quantity:</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Box display={["none", "none", "none", "block"]}>
        <Dropdown />
      </Box>
    </>
  );
}