"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useReducer } from "react";

export const Navbar = () => {
  const path = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="top-2 fixed dark:border-none border rounded-full max-w-[80%] flex justify-center items-center mx-auto bg-opacity-20 mt-2 backdrop-filter backdrop-blur-lg bg-white/10"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <p className="font-bold text-inherit">Easy NextUI</p> */}
            <img alt="logo" className="z-0 w-40 oject-cover" src="/logo.png" />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2 lg:justify-center lg:items-center lg:mx-auto">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem> */}
        <NavbarItem className="hidden md:flex gap-2">
          {/* <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600"
            href={siteConfig.links.sponsor}
            color="primary"
            variant="light"
          >
            Login
          </Button> */}
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 text-white bg-blue-600"
            href={siteConfig.links.sponsor}
            color="primary"
            variant="shadow"
          >
            Download
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-4 flex flex-col gap-2">
          {/* {searchInput} */}
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="ml-2">
              <Link
                color={item.href === path ? "primary" : "foreground"}
                href={item.href}
                size="lg"
                onPress={setIsMenuOpen}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
