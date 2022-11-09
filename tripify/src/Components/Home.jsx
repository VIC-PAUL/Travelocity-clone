import React from "react";
import { Box, Image, Select } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'




const Home = ()=>{
return(

<Box backgroundColor='#0a438b' w='100%' h="80px" p={5} color='white' flex="1">
<Flex width="90%" align="center" justify="center">
<Box ml={20}>
 <Image src={'https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2'}/> 
 </Box>
 <Box ml={5}>
 <Select placeholder='More Travel'border="0px" >
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>    
</Box>
<Box ml={515}>
   <h2>Espanol</h2>
</Box>
<Box ml={8}>
   <Link href="https://apps.expediapartnercentral.com/en_US/list?utm_medium=referral&utm_source=wwwtravelocitycom-en_US&utm_campaign=HomePage&utm_contentewd=pwa-header-btn&siteId=80001&tpid=80001&eapid=0&langId=1033">List your property</Link>
</Box>
<Box ml={8}>
   <h2>Support</h2>
</Box>
<Box ml={8}>
   <h2>Trips</h2>
</Box>
<Box ml={8}>  
   <h2>Sign in</h2> 
</Box>
</Flex>
</Box>
)
}




export default Home