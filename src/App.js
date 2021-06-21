import * as React from 'react';
import { Carousel } from "react-responsive-carousel";
import './App.css';
import { Container, Flex, Heading, Center } from '@chakra-ui/layout';
import { 
  Button, 
  Text, 
  Stack,
  Link,
  Tooltip,
  Box} from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
//import { ArrowForwardIcon } from '@chakra-ui/Icon';
//import { Button } from '@chakra-ui/button';

function App() {

  return (
    <div className="App">

  {/* Section-1 */}

      <Flex 
      className="Section-row"
      direction={{base: "column", md:"row"}}
      justifyContent={{base: "center", md:"flex-start"}}
      mt="98px"
      ml="104px"
      >
        
        {/* Article */}
        <Container maxW="100%" minW="10%">
          <Heading 
            className="heading-title"
            mt='143px'
            textAlign='left'
            fontSize={{ base: "24px", md: "30px", lg: "36px" }}
            w='md'
          >find interior design inspiration for your beloved home</Heading>
          <Text 
            className="heading-sub-title"
            mt='27px'
            textAlign='left'
            w='50%'
          >Consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text>
          
          {/* Button */}
          <Button
            className="button"
            display="block"
            backgroundColor="#1D6861"
            borderRadius="none"
            mt="52px"
            _hover={{ bg: "#18524c" }}
          >
            Take a Tour
          </Button>
        </Container>

        {/* Image-Slider */}
        <Container maxW="100%">
        <Carousel 
        autoPlay = "0.15"
        showStatus = {false}
        showIndicators = {false}
        showThumbs = {false}
        Width = "606px"
        >
          <Center>
            <Box 
            maxWidth="80%" 
            minW="20%"
            id="Slider-1">
                <Image 
                w={[306 , 506 , 606]}
                h={[320 , 520 , 620]} 
                src="https://github.com/triantoaldyansyah/Tawreed-Furniture-with-React-JS--Chakra-UI-/blob/main/testing/src/img-section-1.jpg?raw=true" 
                />

                <Stack
                mt="-156" 
                spacing="block"
                >
                  <Text 
                  className="heading-sub-title"
                  w="118px"
                  bg="#FF6500"
                  color="#FFFFFF"
                  >Living Room</Text>

                  <Text
                  className="heading-sub-title"
                  bg="#FFFFFF"
                  w="340px"
                  h="134px"
                  p="4"
                  textAlign="left"
                  >Consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                  </Text>

                  <Tooltip hasArrow label="See More Details" bg="green.600">
                  <Text
                  mt="-50" 
                  color="#1D6861" 
                  href="#"
                  textAlign="left"
                  pl={4}>
                  Project Detail
                  <Link color="#1D6861" href="#">
                  </Link>
                  </Text>
                  </Tooltip>
                </Stack>
            </Box>
            </Center>

            <Center>
            <Box 
            maxWidth="80%" 
            minW="20%"
            id="Slider-1">
                <Image 
                w={[306 , 506 , 606]}
                h={[320 , 520 , 620]} 
                src="https://github.com/triantoaldyansyah/Tawreed-Furniture-with-React-JS--Chakra-UI-/blob/main/testing/src/component/img-section-1-1.png?raw=true" 
                />

                <Stack
                mt="-156" 
                spacing="block"
                >
                  <Text 
                  className="heading-sub-title"
                  w="118px"
                  bg="#FF6500"
                  color="#FFFFFF"
                  >Living Room</Text>

                  <Text
                  className="heading-sub-title"
                  bg="#FFFFFF"
                  w="340px"
                  h="134px"
                  p="4"
                  textAlign="left"
                  >Consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                  </Text>

                  <Tooltip hasArrow label="See More Details" bg="green.600">
                  <Text
                  mt="-50" 
                  color="#1D6861" 
                  href="#"
                  textAlign="left"
                  pl={4}>
                  Project Detail
                  <Link color="#1D6861" href="#">
                  </Link>
                  </Text>
                  </Tooltip>
                </Stack>
            </Box>
            </Center>
          </Carousel>
        </Container>
      </Flex>

    {/* Section-2 */}

      <Flex>
      </Flex>
    </div>
  );
}

export default App;
