import { Box, Link, NextLink } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Giulia Carrozzo. All Rights Reserved.
      <Box fontSize='xs'>
        Based on{' '}
          <Link
            as={NextLink}
            href="https://www.craftz.dog/"
            passhref
            target="_blank"
          >
            Takuya
          </Link>'s.
      </Box>
    </Box>
  )
}

export default Footer
