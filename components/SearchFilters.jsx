import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button }  from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'

import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {

    const [filter, setFilters] = useState(filterData);
    
    const router = useRouter();

    const searchProperties = (filterValues) => {

        const path = router.pathname;

        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            query[item.name] = item.value
        })

        router.push({ pathname: path, query: query })
    }


    return (
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            {filter.map((filter) => (
                <Box key={filter.queryName}>
                    <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value})}
                        placeholder={filter.placeholder}
                        w='fit-content'
                        p='2'
                    >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters