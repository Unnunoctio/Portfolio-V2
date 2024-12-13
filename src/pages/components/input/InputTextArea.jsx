import { FormControl, FormErrorMessage, Textarea, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

export const InputTextArea = ({ register, name, label, required = false, error }) => {
  return (
    <FormControl isInvalid={error}>
      {/* <FormLabel htmlFor={label}>{name}</FormLabel> */}
      <Textarea 
        id={label}
        placeholder={name}
        variant={'flushed'}
        size={'lg'}
        rows={useBreakpointValue({ base: 5, sm: 6 })}
        resize={'none'}

        focusBorderColor={'cyan.400'}
        borderColor={useColorModeValue('gray.400', 'gray.600')}
        px={3}
        pt={0}
        {
          ...register(label, {
            required: { value: required, message: 'This is required' }
          })
        }
      />
      <FormErrorMessage>
        { error && error.message }
      </FormErrorMessage>
    </FormControl>
  )
}
