import { Header, Group, ActionIcon, Container, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons'
import Image from 'next/image'
import { HeaderLink } from 'src/items/HEADERLINK'

export const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false)

  const headerLink = HeaderLink

  const items = headerLink.map((link) => (
    <a key={link.label} href={link.link}>
      {link.label}
    </a>
  ))

  return (
    <Header height={56} mb={120}>
      <Container className='flex h-14 items-center justify-between'>
        <Burger
          opened={opened}
          onClick={toggle}
          size='sm'
          className='block md:hidden'
        />
        <Group className='hidden md:flex' spacing={30}>
          {items}
        </Group>

        <Group spacing={10}>
          <Image src={'/aslite_logo.webp'} width={40} height={40} />
          <p>Aslite</p>
        </Group>

        <Group spacing={0} position='right' noWrap>
          <ActionIcon size='lg'>
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  )
}
