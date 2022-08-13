import { Header, Group, ActionIcon, Container, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandTwitter,
  IconBrandInstagram,
} from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderLink } from 'src/items/HEADERLINK';

export const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const headerLink = HeaderLink;

  const items = headerLink.map((link) => (
    <Link href={link.link} key={link.label}>
      <a className="text-gray-100 no-underline" key={link.label}>
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={56}>
      <Container className="flex h-14 items-center justify-between">
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className="block md:hidden"
        />
        <Group className="hidden md:flex" spacing={30}>
          {items}
        </Group>

        <Group spacing={10}>
          <Image src={'/aslite_logo.webp'} width={40} height={40} />
          <p className="ml-1 text-2xl font-semibold">AsLite</p>
        </Group>

        <Group spacing={0} position="right" noWrap>
          <ActionIcon size="lg">
            <Image src={'/yahoo_icon.webp'} width={20} height={20} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
};
