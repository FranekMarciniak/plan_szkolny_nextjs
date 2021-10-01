import React from 'react'
import styled from 'styled-components'
import ScheduleTable from '../components/ScheduleTable'
const StyledMain = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: wrap row;
`
export async function getServerSideProps() {
    const req = await fetch(
        'https://sleepy-peak-69154.herokuapp.com/weekplan',
        {
            method: 'get',
        }
    )
    const { table } = await req.json()
    const formatedData = [
        table.Monday,
        table.Tuesday,
        table.Wednesday,
        table.Thursday,
        table.Friday,
    ]
    return { props: { data: formatedData } }
}

function WeekPlan({ data }) {
    return (
        <StyledMain>
            {data.map((ele, i) => (
                <ScheduleTable data={ele} type="week" index={i} />
            ))}
        </StyledMain>
    )
}

export default WeekPlan
