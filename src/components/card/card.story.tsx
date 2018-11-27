import React from "react";

import { storiesOf } from "@storybook/react";

import { Card } from "@/components/card";
import { Content } from "@/components/content";
import { Heading } from "@/components/heading";
import { Image } from "@/components/image";
import { Media } from "@/components/media";

storiesOf("Card", module)
  .addDecorator(story => (
    <div style={{ margin: "0px auto", width: 450 }}>{story()}</div>
  ))
  .add("Default", () => (
    <Card>
      <Card.Image
        size="4by3"
        src="http://bulma.io/images/placeholders/1280x960.png"
      />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              renderAs="p"
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4 as 4}>Devin Fee</Heading>
            <Heading subtitle size={6 as 6}>
              @dfee
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{" "}
          <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>
  ))
  .add("With Footer actions", () => (
    <Card>
      <Card.Header>
        <Card.Header.Title>Title</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              renderAs="p"
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4 as 4}>Devin Fee</Heading>
            <Heading subtitle size={6 as 6}>
              @dfee
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{" "}
          <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Yes">
          Yes
        </Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#No">
          No
        </Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#Maybe">
          Maybe
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  ));
