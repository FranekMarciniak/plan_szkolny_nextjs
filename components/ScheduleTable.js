import React from 'react'
import styled from 'styled-components'
import hours from '../utils/hours'
import days from '../utils/days'
const StyledColumn = styled.div`
    width: ${(props) => (props.type === 'day' ? '460px' : '400px')};
    border: 1px solid #474c50;
    margin: 15px 10px;
    @media only screen and (max-width: 700px) {
        width: 90%;
    }
    @media only screen and (max-width: 400px) {
        body {
            font-size: 13px;
        }
        width: 100%;
    }
    h2 {
        text-align: center;
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
    flex-direction: column;
    text-align: center;
`
const StyledHours = styled.div`
    width: 100%;
    /* padding: 5px; */
    display: flex;
    justify-content: center;
    background-color: #474c50;
    p {
        padding: 0;
        margin: 0;
    }
`
function ScheduleTable({ data, type, index }) {
    return (
        <>
            <StyledColumn>
                <h2>{index || index === 0 ? days[index] : 'dziś'}</h2>
                {data.map((ele, i) => (
                    <StyledColumnCell>
                        <StyledHours>
                            <p>{hours[i]}</p>
                        </StyledHours>
                        {ele &&
                            (ele.flag === 'odwołane' ? (
                                <del>{ele.title}</del>
                            ) : (
                                <p>{ele.title}</p>
                            ))}
                        {!ele && <p>-||-</p>}
                    </StyledColumnCell>
                ))}
            </StyledColumn>
        </>
    )
}

export default ScheduleTable
