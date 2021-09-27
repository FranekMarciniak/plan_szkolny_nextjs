import styled from 'styled-components'

const StyledContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    right: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
function Spinner() {
    return (
        <StyledContainer>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: 'auto',
                    background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%',
                    display: 'block',
                    shapeRendering: 'auto',
                }}
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <path
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth={8}
                    strokeDasharray="42.76482137044271 42.76482137044271"
                    d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
                    strokeLinecap="round"
                    style={{
                        transform: 'scale(0.8)',
                        transformOrigin: '50px 50px',
                    }}
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        repeatCount="indefinite"
                        dur="2.941176470588235s"
                        keyTimes="0;1"
                        values="0;256.58892822265625"
                    />
                </path>
            </svg>
        </StyledContainer>
    )
}

export default Spinner