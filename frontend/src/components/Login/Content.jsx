import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-bg.svg';

import CheckMarkIcon from '../Icons/CheckMarkIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import TwitterIcon from '../Icons/TwitterIcon';

const listItems = [
  {
    id: 1,
    text:
      'اگر شما هم عاشق مطالعه هستید در ویرگول می‌توانید مطالب متنوعی را در موضوعات مختلف بخوانید.',
  },
  {
    id: 2,
    text:
      'با نوشتن مطلبتان در ویرگول آن را در معرض دید قشر وسیعی از خوانندگان قرار خواهید داد.',
  },
  {
    id: 3,
    text:
      'ویرگول آمار دقیقی از تعداد و میزان خوانده شدن مطلبتان به شما ارائه می‌دهد.',
  },
];

export default function Content() {
  return (
    <Box
      as="section"
      flex={{ base: '1', lg: '2.5' }}
      p="5"
      bg="blue"
      color="white"
      display="flex"
      position="relative"
      justifyContent="center"
      backgroundImage="linear-gradient(to bottom right,#054592 0,#1897d4)"
    >
      <VStack my="auto" spacing={{ base: '2', md: '10' }}>
        <Link to="/">
          <Image src={Logo} alt="لوگو ویرگول" />
        </Link>
        <VStack as="header" spacing="2" textAlign="center">
          <Heading fontSize={{ base: '1.2rem', md: '1.7rem', lg: '2rem' }}>
            اینجا هر کسی می‌تونه بنویسه!
          </Heading>
          <Text
            d={{ base: 'none', md: 'block' }}
            color="#062c45"
            fontWeight="600"
          >
            همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع
            کن.
          </Text>
        </VStack>
        <List spacing="4" d={{ base: 'none', lg: 'block' }}>
          {listItems.map(item => (
            <ListItem d="flex" key={item.id} alignItems="center">
              <ListIcon as={CheckMarkIcon} />
              <Text ml="2">{item.text}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
      <Flex
        as="footer"
        color="#94deff"
        position="absolute"
        w="full"
        px="10"
        bottom="8"
        right="0"
        fontSize="sm"
        display={{ base: 'none', lg: 'flex' }}
        justifyContent="space-between"
      >
        <Text>&copy; تمام حقوق برای ویرگول محفوظ است.</Text>
        <HStack as="ul" listStyleType="none">
          <Box as="li">
            <Link to="/">صفحه اصلی</Link>
          </Box>
          <Box as="li">
            <Link to="/contact-us">تماس با ما</Link>
          </Box>
          <Box as="li">
            <a href="https://instagram.com">
              <InstagramIcon color="#94deff" />
            </a>
          </Box>
          <Box as="li">
            <a href="https://twitter.com">
              <TwitterIcon color="#94deff" />
            </a>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
