import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import "./card.css";

const CardBox = ({ title, src, description, cover, size }) => {
  return (
    <div className="box-card">
      <Card maxW="sm" height={550}>
        <CardBody>
          <Image src={`http://18.230.74.202:8080/${cover}`}height={300} width={290}/>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text >{description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              <a href={`http://18.230.74.202:8080/book/${src}`} download={{title}} target="_blank">
                Download
              </a>
            </Button>
            <Button variant="solid">{`${size}kb`}</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardBox;
