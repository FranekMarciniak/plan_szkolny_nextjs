import React from 'react'
import styled from 'styled-components'
import ScheduleTable from '../components/ScheduleTable'
const StyledMain = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`
export async function getServerSideProps() {
    const req = await fetch('https://sleepy-peak-69154.herokuapp.com/dayplan', {
        method: 'get',
    })
    const data = await req.json()
    return { props: { data } }
}

function DailyPlan({ data }) {
    return (
        <StyledMain>
            <ScheduleTable data={data} type="day" />
            <div>
                <img
                    src="../assets/Double Ring-1s-200px.svg"
                    alt="spinner animation"
                />
            </div>
        </StyledMain>
    )
}

export default DailyPlan
