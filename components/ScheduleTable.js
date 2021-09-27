import React from 'react'
import styled from 'styled-components'
const StyledColumn = styled.div`
    width: 500px;
    border: 1px solid #474c50;
    @media only screen and (max-width: 700px) {
        width: 90%;
    }
    @media only screen and (max-width: 400px) {
        body {
            font-size: 13px;
        }
        width: 100%;
    }
`
const StyledColumnCell = styled.div`
    width: 100%;
    min-height: 20px;
    /* padding: 10px 0; */
    border-top: 1px solid #474c50;
    border-bottom: 1px solid #474c50;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
// const StyledHours
function ScheduleTable({ data, type }) {
    console.log(data)
    return (
        <>
            <StyledColumn>
                {data.map((ele) => (
                    <StyledColumnCell>
                        {ele &&
                            (ele.flag === 'odwołane' ? (
                                <del>{ele.title}</del>
                            ) : (
                                <p>{ele.title}</p>
                            ))}
                    </StyledColumnCell>
                ))}
            </StyledColumn>
        </>
    )
}

export default ScheduleTable
