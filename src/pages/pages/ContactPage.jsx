import { Box, Button, Flex, Icon, Link, LinkBox, Text, useBreakpointValue } from "@chakra-ui/react"
import { LayoutPage } from "../layout/LayoutPage"
import { useForm } from 'react-hook-form'
import { InputText } from "../components/input/InputText"
import { InputEmail, InputTextArea } from "../components/input"
import { RiMailSendLine, RiPhoneLine } from 'react-icons/ri'
import { useEffect, useState } from "react"

export const ContactPage = () => {
  const [onScreen, setOnScreen] = useState(false)

  const { register, handleSubmit, formState, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm()

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2))
        resolve()
      }, 3000)
    })
  }

  // Resetear el formulario si se envio correctamente
  // useEffect(() => {
  //   if(formState.isSubmitSuccessful) {
  //     reset()
  //   }
  // }, [formState, reset])

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById('contact')
      const elementRect = element.getBoundingClientRect()
      const isMiddleTop = (elementRect.top <= window.innerHeight / 2) && (elementRect.top > -(elementRect.height - (window.innerHeight / 2)))

      setOnScreen(isMiddleTop)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Resetear el formulario si se sale de la pantalla de contacto
  useEffect(() => {
    if (onScreen === false) {
      reset()
    }
  }, [onScreen])

  return (
    <LayoutPage id={'contact'} title={'Contact Me'} minH={{ base: 'calc(100vh - 80px)', md: '100vh' }}>

      <Flex flex={1} flexDir={'column'} alignItems={'center'} justifyContent={{ base: 'space-around', sm: 'space-evenly' }}>
        <Text fontSize={{ base: '2xl', sm: '3xl' }} fontWeight={'semibold'}>
          Let's Talk
        </Text>

        <Box w={{ base: '100%', sm: '90%', xl: '80%' }}>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={{ base: 4, md: 4, xl: 10, '2xl': 14 }} flexDir={{ base: 'column', md: 'row' }}>
              <InputText register={register} name={'Name'} label={'name'} required={true} error={errors.name} />
              <InputEmail register={register} name={'Email'} label={'email'} required={true} error={errors.email} />
            </Flex>

            <Flex mt={{ base: 6, md: 12 }}>
              <InputTextArea register={register} name={'Message'} label={'message'} required={true} error={errors.message} />
            </Flex>

            <Flex mt={{ base: 6, md: 8 }} justifyContent={{ base: 'center', md: 'left' }}>
              <Button type={'submit'}
                variant={'outline'}
                size={{ base: 'md', sm: 'lg' }}
                color={'cyan.400'}
                borderColor={'cyan.400'}
                borderRadius={'full'}
                isLoading={isSubmitting}
                _hover={{
                  bg: '#0BC5EA90',
                  color: 'white'
                }}
                _active={{
                  bg: '#0BC5EADD',
                  color: 'white'
                }}
              >
                Send Message
              </Button>
            </Flex>
          </form>
        </Box>

        <Flex w={'full'} justifyContent={'space-around'} py={2} mb={4} mt={3}>
          <Link href="mailto:info@mail.cl"
            display={'flex'} flexDir={'column'}
            alignItems={'center'} gap={2}
            _hover={{ color: 'cyan.400' }}
          >
            <Icon boxSize={{ base: 8, sm: 9 }} as={RiMailSendLine} />
            <Text fontSize={{ base: 'md', sm: 'xl' }}>
              info@mail.cl
            </Text>
          </Link>

          <Flex flexDir={'column'} alignItems={'center'} gap={2}>
            <Icon boxSize={{ base: 8, sm: 9 }} as={RiPhoneLine} />
            <Text fontSize={{ base: 'md', sm: 'xl' }}>
              9 7655 9399
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </LayoutPage>
  )
}
