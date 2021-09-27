import React from 'react'
import styled from 'styled-components'
import NavButton from './buttons/NavButton'

const NavWrapper = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 100px;
`

function Navigation() {
    return (
        <NavWrapper>
            <Nav>
                <NavButton href="/plan-dniowy" name="Plan dniowy" />
                <NavButton href="/plan-tygodniowy" name="Plan tygodniowy" />
            </Nav>
        </NavWrapper>
    )
}

export default Navigation
