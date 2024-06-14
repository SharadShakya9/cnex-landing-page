import React, { useState } from 'react'
import './faqIcon.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    background-color: #F3F3F3;
    padding: 25px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 360px) {
        padding: 16px;
    }
`

const TopContent = styled.div`
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 360px) {
        height: 36px;
    }
`

function FaqItem() {
    const [toggle, setToggle] = useState(false)

    function toggleExtend () {
        setToggle(!toggle)
    }

  return (
    <Wrapper>
        <TopContent>
            <div className="text-content">
                Gorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="extend" onClick={toggleExtend}>
                {toggle ?
                    <svg className='cross icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill='#1B1B1C' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg> :
                    <svg className='plus icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                    </svg>
                }
            </div>
        </TopContent>
        {toggle && (
            <div className='extended-text'>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </div>
        )}
    </Wrapper>
  )
}

export default FaqItem
