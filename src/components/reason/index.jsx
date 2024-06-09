import React from 'react'
import { Container, InnerContent, ReasonContainer, ReasonContent, Reasons, ReasonTitle, TextDec, Title, Wrapper } from './styleReason'
import IconFactory from '../icons/IconFactory'

function Reason() {
  return (
    <Wrapper>
        <Container>
            <Title>Why <TextDec>Cnex ?</TextDec></Title>
        <ReasonContainer>
            <Reasons>
                <IconFactory type="fast" />
                <ReasonContent>
                    <ReasonTitle>Fast</ReasonTitle>
                    <InnerContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur ducimus itaque modi dolores consectetur suscipit.
                    </InnerContent>
                </ReasonContent>
            </Reasons>
            <Reasons>
                <IconFactory type="easy" />
                <ReasonContent>
                    <ReasonTitle>Easy</ReasonTitle>
                    <InnerContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur ducimus itaque modi dolores consectetur suscipit.
                    </InnerContent>
                </ReasonContent>
            </Reasons>
            <Reasons>
                <IconFactory type="affordable" />
                <ReasonContent>
                    <ReasonTitle>Affordable</ReasonTitle>
                    <InnerContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur ducimus itaque modi dolores consectetur suscipit.
                    </InnerContent>
                </ReasonContent>
            </Reasons>
            <Reasons>
                <IconFactory type="legalsupport" />
                <ReasonContent>
                    <ReasonTitle>Fast</ReasonTitle>
                    <InnerContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur ducimus itaque modi dolores consectetur suscipit.
                    </InnerContent>
                </ReasonContent>
            </Reasons>
        </ReasonContainer>
        </Container>
    </Wrapper>
  )
}

export default Reason
