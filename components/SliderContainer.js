import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 40px;
`;

const SliderContainer = ({ children }) => (
  <>
    <Container>
      <Swiper controlsEnabled={false} loop timeout={3}>
        {children}
      </Swiper>
    </Container>
  </>
);

SliderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SliderContainer;
