import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button }  from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'

const SearchFilters = () => {
    const [filters, setFilters] = userState({});

    return (
<<<<<<< HEAD
        <Flex bg ='gray.100' p="4" justifyContent='center' flexWrap='wrap'>

=======
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            
>>>>>>> 8b756631a54189f61db069248e4b432a7c0d82cb
        </Flex>
    )
}

export default SearchFilters