import { Grid, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, VStack } from '@chakra-ui/react'
import React from 'react'
import MainTable from '../components/MainTable/MainTable'

function Dashboard() {
  return (
    <Grid minH="100vh" p={4}>
        
        <VStack spacing={8}>
          <StatGroup>
            <Stat>
              <StatLabel>Sent</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Clicked</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
          <MainTable />
        </VStack>
      </Grid>
  )
}

export default Dashboard