import React from 'react'
import { Container, FeatureContainer, FeatureContent, Features, FeatureTitle, InnerContent, MainTitle, SubText, TextDec, Title, TitleContainer, Wrapper } from './styleFeature'
import Header from './Header'
import IconFactory from '../icons/IconFactory'

function Feature() {
  return (
    <Wrapper>
        <Container>
            <TitleContainer>
                <Header/>
                <MainTitle>
                    <Title><TextDec>Experience</TextDec> the Difference</Title>
                    <SubText>Discover a World of Female-Centric Products and Services</SubText>
                </MainTitle>
            </TitleContainer>
            <FeatureContainer>
                <Features>
                    <IconFactory type="booking" />
                    <FeatureContent>
                        <FeatureTitle>Booking Appointments</FeatureTitle>
                        <InnerContent>
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </InnerContent>
                    </FeatureContent>
                </Features>
                <Features>
                    <IconFactory type="order" />
                    <FeatureContent>
                        <FeatureTitle>Ordering and Pre-ordering</FeatureTitle>
                        <InnerContent>
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </InnerContent>
                    </FeatureContent>
                </Features>
                <Features>
                    <IconFactory type="search" />
                    <FeatureContent>
                        <FeatureTitle>Searching for Product</FeatureTitle>
                        <InnerContent>
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </InnerContent>
                    </FeatureContent>
                </Features>
                <Features>
                    <IconFactory type="filter" />
                    <FeatureContent>
                        <FeatureTitle>Filtering products</FeatureTitle>
                        <InnerContent>
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </InnerContent>
                    </FeatureContent>
                </Features>
                <Features>
                    <IconFactory type="delivery" />
                    <FeatureContent>
                        <FeatureTitle>Delivery Service</FeatureTitle>
                        <InnerContent>
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </InnerContent>
                    </FeatureContent>
                </Features>
                <Features>
                    <IconFactory type="payment" />
                    <FeatureContent>
                        <FeatureTitle>Payments</FeatureTitle>
                        <InnerContent>
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </InnerContent>
                    </FeatureContent>
                </Features>
            </FeatureContainer>
        </Container>
    </Wrapper>
  )
}

export default Feature
