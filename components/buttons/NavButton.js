import Link from 'next/link'
import styled from 'styled-components'
const NavButton = styled.a`
    background-color: transparent;
    border: 1px white solid;
    padding: 10px 25px;
    color: #fff;
    margin: 30px 0;
    text-align: center;
    cursor: pointer;
`
const ButtonComponent = ({ href, name }) => {
    return (
        <Link href={href} passHref>
            <NavButton>{name}</NavButton>
        </Link>
    )
}
export default ButtonComponent
