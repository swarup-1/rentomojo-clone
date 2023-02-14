import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom"
import { Grid, Box, Text, Image} from "@chakra-ui/react"
import Package from "../Assets/Package.png"
import furniture from "../Assets/furniture.png"
import applience from "../Assets/applience.png"
import Electronics from "../Assets/Electronics.png"
import fitness from "../Assets/fitness.png"
import wfh from "../Assets/wfh.png"

const Home = () => {
  return (
    <div>
        <Box mt="2" width="80%" align="center" margin="auto">
          <Slider infinite={true} dots={true} lazyLoad={true} autoplay={true} slidesToShow={1} slidesToScroll={1} autoplaySpeed={3000} >
              <div>
                <img style={{borderRadius:"20px"}} src='https://s.rmjo.in/WP-Web.png' />
              </div>
              <div>
                <img style={{borderRadius:"20px"}} src='https://s.rmjo.in/WP-Web.png' />
              </div>
          </Slider>
        </Box>
      <Grid templateColumns={{base:'repeat(2,1fr)',sm:'repeat(4,1fr)',xl:'repeat(6,1fr)'}} justifyItems="flex-start" gap="20px" width="80%" m="auto" p="50px">
      
        <NavLink  to={"./packages"}>
          <Box py="10px" px={{base:"20px", md:"40px",xl:"50px"}} border={"1px solid #ebf0f4 "} transition="ease-in-out" transitionDuration={"400ms"} rounded={"md"} _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}>
            <Image boxSize={"50px"} m="auto" src={Package} ></Image>
            <Text  textDecoration="none" fontSize="xs">Packages</Text>
          </Box>
        </NavLink>
        <NavLink  to={"./packages"}>
          <Box py="10px" px={{base:"20px", md:"40px",xl:"50px"}} border={"1px solid #ebf0f4 "} transition="ease-in-out" transitionDuration={"400ms"} rounded={"md"} _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}>
            <Image boxSize={"50px"} m="auto" src={furniture} ></Image>
            <Text  textDecoration="none" fontSize="xs">Furniture</Text>
          </Box>
        </NavLink>
        <NavLink  to={"./packages"}>
          <Box py="10px" px={{base:"20px", md:"40px",xl:"50px"}} border={"1px solid #ebf0f4 "} transition="ease-in-out" transitionDuration={"400ms"} rounded={"md"} _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}>
            <Image boxSize={"50px"} m="auto" src={applience} ></Image>
            <Text  textDecoration="none" fontSize="xs">Appliences</Text>
          </Box>
        </NavLink>
        <NavLink  to={"./packages"}>
          <Box py="10px" px={{base:"20px", md:"40px",xl:"50px"}} border={"1px solid #ebf0f4 "} transition="ease-in-out" transitionDuration={"400ms"} rounded={"md"} _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}>
            <Image boxSize={"50px"} m="auto" src={Electronics} ></Image>
            <Text  textDecoration="none" fontSize="xs">Electronics</Text>
          </Box>
        </NavLink>
        <NavLink  to={"./packages"}>
          <Box py="10px" px={{base:"20px", md:"40px",xl:"50px"}} border={"1px solid #ebf0f4 "} transition="ease-in-out" transitionDuration={"400ms"} rounded={"md"} _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}>
            <Image boxSize={"50px"} m="auto" src={fitness} ></Image>
            <Text  textDecoration="none" fontSize="xs">Fitness</Text>
          </Box>
        </NavLink>
        <NavLink  to={"./packages"}>
          <Box py="10px" px={{base:"20px", md:"40px",xl:"50px"}} border={"1px solid #ebf0f4 "} transition="ease-in-out" transitionDuration={"400ms"} rounded={"md"} _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}>
            <Image boxSize={"50px"} m="auto" src={wfh} ></Image>
            <Text  textDecoration="none" fontSize="xs">WFH Essentials</Text>
          </Box>
        </NavLink>
      </Grid>
      {/* <FurnitureSlider></FurnitureSlider>
      <SimpleThreeColumns ></SimpleThreeColumns>
      <FurnitureSlider2></FurnitureSlider2> */}
    </div>
  )
}

export default Home