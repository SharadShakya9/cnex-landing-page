import React from 'react'
import IconFactory from '../icons/IconFactory'
import styled from 'styled-components'

const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color: white;
    border: none;
    box-shadow: 0px 4px 16px 0px #0000001F;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 360px) {
        width: 24px;
        height: 24px;
        padding: 0;
        justify-content: center;
        align-items: center;
    }
`

function IconButtons({type}) {
    switch (type) {
        case "right-arrow":
            return (
                <Button>
                    <IconFactory type="right-arrow"/>
                </Button>
            )
        case "left-arrow":
            return (
                <Button>
                    <IconFactory type="left-arrow"/>
                </Button>
            )
    }
}

export default IconButtons
