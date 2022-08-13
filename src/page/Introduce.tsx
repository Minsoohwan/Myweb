import React from 'react';
import styled, { keyframes } from 'styled-components';
import { props } from '../App';
import { useMediaQuery } from 'react-responsive';
import { MovePage } from './Main';

const movePage = keyframes`
    0%{
        width: 150vw;
    height: 150vh;
    }   
    100%{
        width: 0;
    height: 0;
      }
`;
const IntroOutline = styled.div`
    position: relative;
    left: ${(props: props) => props.location};
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 685px;
    width: 100%;
    height: 100%;
    max-height: 940px;
    background-color: white;
    transition: 0.7s ease;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const ImgBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    img {
        max-width: 100%;
    }
`;
export const ArrivePage = styled(MovePage)`
    animation: ${movePage} 1s ease;
    z-index: 5;
`;

const Introduce = ({
    sideBarState,
    img,
}: {
    sideBarState: boolean;
    img: string;
}) => {
    const isWidthLarge = useMediaQuery({ minWidth: '1237px' });
    const isWidthSmall = useMediaQuery({ minWidth: '685px' });
    return (
        <>
            <ArrivePage />
            <IntroOutline
                location={
                    isWidthLarge
                        ? '0'
                        : !isWidthSmall && !sideBarState
                        ? 'calc(270px)'
                        : isWidthSmall && !sideBarState
                        ? 'calc(270px - 50% + 342.5px)'
                        : '0'
                }
            >
                <ImgBox>
                    <img src={img} alt="profile" />
                </ImgBox>
            </IntroOutline>
        </>
    );
};
export default Introduce;
