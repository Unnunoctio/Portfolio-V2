import { Input, FormControl, FormErrorMessage, useColorModeValue, FormLabel } from '@chakra-ui/react'
import React from 'react'

export const InputEmail = ({ register, name, label, required = false, error }) => {
  return (
    <FormControl isInvalid={error}>
      {/* <FormLabel htmlFor={label}>{name}</FormLabel> */}
      <Input 
        id={label}
        type={'email'}
        placeholder={name}
        variant={'flushed'}
        size={'lg'}

        focusBorderColor={'cyan.400'}
        borderColor={useColorModeValue('gray.400', 'gray.600')}
        autoComplete={'off'}
        px={3}
        {
          ...register(label, {
            required: { value: required, message: 'This is required' },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email invalid'
            }
          })
        }
      />
      <FormErrorMessage>
        { error && error.message }
      </FormErrorMessage>
    </FormControl>
  )
}
