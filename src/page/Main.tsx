import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useMediaQuery } from 'react-responsive';
import '@splidejs/react-splide/css';
import '../css/slide.css';
import { props } from '../App';
import { useNavigate } from 'react-router-dom';

const CardOutline = styled.div`
    position: relative;
    left: ${(props: props) => props.location};
    width: 80%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
    gap: 20px;
    transition: 0.7s ease;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const fadein = keyframes`
 0% {
      opacity: 0;
      transform: translateY(20px);
    }
    50% {
      opacity: 1;
      transform: none;
    }`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;

    h1:nth-child(1) {
        margin: 0;
        min-height: 86px;
        text-align: center;
        color: #ffffff;
        text-shadow: 4px 2px 2px #616161;
        animation: ${fadein} 2s linear;
    }
`;

const SlideOutline = styled.div`
    width: 100%;
`;

const movePage = keyframes`
    0%{
        width: 0;
        height: 0;
    }   
    100%{
        width: 150vw;
    height: 150vh;
      }
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props: props) => (props.isMobile ? '70%' : '100%')};
    cursor: pointer;
`;
const Img = styled.img`
    width: 100%;
`;
export const MovePage = styled.div`
    background: black;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 0;
    height: 0;
    z-index: 4;
    animation: ${movePage} 1s ease;
`;
function Main({ sideBarState }: { sideBarState: boolean }) {
    const [textState, setTextState] = useState<number>(1);
    const [isClick, setIsClick] = useState<boolean>(false);
    const isWidthLarge = useMediaQuery({ minWidth: '1350px' });
    const isWidthMobile = useMediaQuery({ minWidth: '560px' });

    const nav = useNavigate();
    useEffect(() => {
        let n = textState;
        if (n !== 3) {
            n = textState + 1;
            setTimeout(() => setTextState(n), 2000);
        }
    }, [textState]);
    return (
        <CardOutline
            location={
                isWidthLarge ? '0' : !sideBarState ? 'calc(270px - 10%)' : '0'
            }
        >
            {isClick && <MovePage />}
            <TextDiv>
                {textState === 1 && <h1>안녕하세요. 민수환입니다.</h1>}
                {textState === 2 && <h1>저의 페이지에 오신것을 환영합니다.</h1>}
                {textState === 3 && (
                    <h1>아래 슬라이드에서 보고 싶은 항목을 선택해주세요.</h1>
                )}
            </TextDiv>
            <SlideOutline>
                <Splide
                    options={{
                        type: 'loop',
                        arrows: false,
                        focus: 'center',
                        gap: isWidthMobile ? '0px' : '20px',
                    }}
                >
                    <SplideSlide
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ImgBox
                            isMobile={isWidthMobile}
                            onClick={() => {
                                setIsClick(true);
                                setTimeout(() => {
                                    nav('/profile');
                                }, 1000);
                            }}
                        >
                            <Img src="/img/이력서preview.png" alt="0" />
                        </ImgBox>
                    </SplideSlide>
                    <SplideSlide
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ImgBox
                            isMobile={isWidthMobile}
                            onClick={() => {
                                setIsClick(true);
                                setTimeout(() => {
                                    nav('/introduce');
                                }, 1000);
                            }}
                        >
                            <Img src="/img/자기소개서preview.png" alt="0" />
                        </ImgBox>
                    </SplideSlide>
                    <SplideSlide
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ImgBox
                            isMobile={isWidthMobile}
                            onClick={() => {
                                setIsClick(true);
                                setTimeout(() => {
                                    nav('/project');
                                }, 1000);
                            }}
                        >
                            <Img src="/img/프로젝트.png" alt="0" />
                        </ImgBox>
                    </SplideSlide>
                </Splide>
            </SlideOutline>
        </CardOutline>
    );
}

export default Main;
