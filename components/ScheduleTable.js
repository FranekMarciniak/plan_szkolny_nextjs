import React from 'react'
import styled from 'styled-components'
import hours from '../utils/hours'
const StyledTable = styled.table`
    width: 700px;
    tr {
        display: flex;
        border-right: 1px solid #474c50;
    }
    th {
        margin-bottom: 10px;
    }
    th,
    td {
        width: 70%;
        text-align: center;
        overflow-wrap: break-word;
        min-width: 0;
        max-height: 1000px;
    }
    td {
        border-left: 1px solid #474c50;
        border-top: 1px solid #474c50;
        padding: 20px 20px;
    }
    td:nth-child(odd),
    th:nth-child(odd) {
        width: 20%;
    }

    tr:last-child {
        border-bottom: 1px solid #474c50;
    }
    thead {
        tr {
            border-bottom: none !important;
        }
        tr:first-child {
            border-right: none !important;
        }
    }
    @media only screen and (max-width: 700px) {
        width: 90%;
    }
    @media only screen and (max-width: 400px) {
        body {
            font-size: 13px;
        }
        width: 100%;
        td {
            padding: 5px 5px;
        }
    }
`
function ScheduleTable({ data, type }) {
    return (
        <StyledTable>
            <thead>
                <tr>
                    {type === 'day' ? (
                        <>
                            <th>~</th>
                            <th>Dziś</th>
                        </>
                    ) : (
                        ''
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map((ele, i) => (
                    <tr key={i}>
                        <td>{hours[i]}</td>
                        <td>
                            {ele &&
                                (ele.flag === 'odwołane' ? (
                                    <del>{ele.title}</del>
                                ) : (
                                    ele.title
                                ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

export default ScheduleTable
