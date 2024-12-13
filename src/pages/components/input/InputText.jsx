import { Input, FormControl, FormLabel, FormErrorMessage, useColorModeValue } from '@chakra-ui/react'

export const InputText = ({ register, name, label, required = false, error }) => {
  return (
    <FormControl isInvalid={error}>
      {/* <FormLabel htmlFor={label}>{name}</FormLabel> */}
      <Input 
        id={label}
        placeholder={name}
        variant={'flushed'}
        size={'lg'}

        focusBorderColor={'cyan.400'}
        borderColor={useColorModeValue('gray.400', 'gray.600')}
        autoComplete={'off'}
        px={3}
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
