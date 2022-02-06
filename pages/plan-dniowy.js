import React from 'react'
import styled from 'styled-components'
import ScheduleTable from '../components/ScheduleTable'
const StyledMain = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`
export async function getServerSideProps() {
    try {
        const req = await fetch(
            'https://sleepy-peak-69154.herokuapp.com/dayplan',
            {
                method: 'get',
            }
        )
        const data = await req.json()
        return { props: { data } }
    } catch (err) {
        console.log(err)
        return { props: { data: null } }
    }
}

function DailyPlan({ data }) {
    return (
        <StyledMain>
            {data ? (
                <ScheduleTable data={data} type="day" />
            ) : (
                <h1>Api error</h1>
            )}
        </StyledMain>
    )
}

export default DailyPlan
