import React from "react";
import {
  StoryWrapper,
  Wrapper,
  Title,
  TextDec,
  Content,
  TextContent,
  Paragraph,
  MainPara,
  Detail,
  Button,
} from "./styleStory";
import storyImage from "../../assets/images/story/story.png";
import ButtonFactory from "../buttons/ButtonFactory";

function Story() {
  return (
    <Wrapper>
      <StoryWrapper>
        <Title>
          Our <TextDec>Story</TextDec>
        </Title>
        <Content>
          <div>
            <img src={storyImage} alt="story image" />
          </div>
          <TextContent>
            <Paragraph>
              <MainPara>
                At the beginning, it was just the two of them, working out of a
                small office space. They were determined to provide personalized
                service to their clients and build lasting relationships. They
                worked tirelessly, often working long hours and weekends to
                ensure that their clients needs were met.
              </MainPara>
              <Detail>
                <p>
                  Their hard work paid off, and soon their business began to
                  grow. They hired additional staff members and expanded their
                  service offerings to include property management and real
                  estate investments.
                </p>
                <p>
                  Over the years, their business has continued to grow, and they
                  have helped countless clients buy, sell, and manage their real
                  estate investments. Today, their business is a respected name
                  in the real estate industry, known for its exceptional service
                  and commitment to its clients.
                </p>
                <p>
                  As they look to the future, John and Jane remain dedicated to
                  their clients and to providing the best possible service in
                  the real estate industry. They are excited to continue to grow
                  and evolve their business, and to help even more clients
                  achieve their real estate goals.
                </p>
              </Detail>
            </Paragraph>
            <Button><ButtonFactory name="Get in touch"/></Button>
          </TextContent>
        </Content>
      </StoryWrapper>
    </Wrapper>
  );
}

export default Story;
