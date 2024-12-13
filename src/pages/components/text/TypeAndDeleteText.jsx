import { Text } from "@chakra-ui/react"
import Typewriter from 'typewriter-effect'


export const TypeAndDeleteText = ({ text, ...rest }) => {
  return (
    <Text as={'div'} {...rest}>
      <Typewriter
        options={{
          strings: text,
          autoStart: true,
          loop: true,
          delay: 50,
          pauseFor: 1000
        }}
      />
    </Text>
  )
}

