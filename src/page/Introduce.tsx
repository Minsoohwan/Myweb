import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon, IconTextBox, props } from '../App';
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
    flex-direction: column;
    max-width: 685px;
    width: 100%;
    height: ${(props: props) => (props.isMobile ? '80%' : '95%')};
    max-height: 940px;
    border: 5px outset;
    border-radius: 20px;
    padding: 20px;
    background-color: white;
    transition: 0.7s ease;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const ProfileBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const ImgBox = styled.div`
    display: flex;
    width: 130px;
    height: fit-content;
    img {
        max-width: 100%;
    }
`;
const Profile = styled.div`
    display: flex;
    width: 100%;
    flex-direction: ${(props: props) => (props.isMobile ? 'row' : 'column')};
    gap: 10px;
    p {
        margin: 5px 0;
    }
`;
const ProfileContent = styled.div`
    display: flex;
    width: calc(80% - 20px);
    flex-direction: column;
    h3 {
        margin-bottom: 5px;
    }
    hr {
        width: 100%;
        border: 2px solid #5da0f7;
    }
    p:nth-child(4) {
        text-indent: 5px;
        font-size: 15px;
    }
`;
const MiddleBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    div {
        width: 50%;
    }
`;
const ContentBox = styled.div`
    display: flex;
    flex-direction: ${(props: props) => (props.isMobile ? 'row' : 'column')};
    gap: 20px;
`;
const Content = styled.div`
    width: ${(props: props) => (props.isMobile ? '45%' : 'calc(100% - 40px)')};
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    padding: 10px;
    flex-wrap: wrap;
    border: 5px outset #5da0f7;
`;
const StackWrap = styled(Content)`
    column-gap: 20px;
    align-items: center;
    justify-content: center;
`;
const BarBox = styled.div`
    position: relative;
    width: 10%;
    min-height: 185px;
    height: 100%;
    /* background: green; */
    display: flex;
    div:nth-child(1) {
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 5px;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 90%;
        background: #0361b9;
    }
    div:nth-child(2) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        transform: translate(-50%, 0);
        width: 25px;
        height: 25px;
        border: 1px solid #5da0f7;
        border-radius: 50%;
        background-color: white;
        div {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #5da0f7;
        }
    }
    div:nth-child(3) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 0);
        width: 25px;
        height: 25px;
        border: 1px solid #5da0f7;
        border-radius: 50%;
        background-color: white;
        div {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #5da0f7;
        }
    }
    div:nth-child(4) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        top: 70%;
        transform: translate(-50%, 0);
        width: 25px;
        height: 25px;
        border: 1px solid #5da0f7;
        border-radius: 50%;
        background-color: white;
        div {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #5da0f7;
        }
    }
    div:nth-child(5) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        top: 90%;
        transform: translate(-50%, 0);
        width: 25px;
        height: 25px;
        border: 1px solid #5da0f7;
        border-radius: 50%;
        background-color: white;
        div {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #5da0f7;
        }
    }
`;
const EducateContent = styled.div`
    position: relative;
    width: 90%;
    height: 90%;
    p:nth-child(1) {
        position: absolute;
        top: -8px;
        margin-left: 10px;
        font-size: 12px;
    }
    p:nth-child(2) {
        position: absolute;
        top: 50%;
        margin-left: 10px;
        font-size: 12px;
    }
    p:nth-child(3) {
        position: absolute;
        top: 70%;
        margin-left: 10px;
        font-size: 12px;
    }
    p:nth-child(4) {
        position: absolute;
        top: 90%;
        margin-left: 10px;
        font-size: 12px;
    }
`;
export const ArrivePage = styled(MovePage)`
    animation: ${movePage} 1s ease;
    z-index: 5;
`;

const Introduce = ({ sideBarState }: { sideBarState: boolean }) => {
    const isWidthLarge = useMediaQuery({ minWidth: '1287px' });
    const isWidthSmall = useMediaQuery({ minWidth: '746px' });
    const isWidthMobile = useMediaQuery({ minWidth: '560px' });
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
                        ? 'calc(270px - 50% + 372.5px)'
                        : '0'
                }
                isMobile={isWidthMobile}
            >
                {isWidthMobile ? (
                    <ProfileBox>
                        <ImgBox>
                            <img
                                src="/img/?????????_profile.png"
                                alt="profileImg"
                            />
                        </ImgBox>
                        <ProfileContent>
                            <h3>Profile</h3>
                            <hr />
                            <Profile isMobile={isWidthMobile}>
                                <p>
                                    <b>??? ??? : </b>??? ??? ???
                                </p>
                                <p>
                                    <b>??? ??? : </b>010-4812-5419
                                </p>
                                <p>
                                    <b>Email : </b>
                                    <a href="mailto:minsoohwan2@gmail.com">
                                        minsoohwan2@gmail.com
                                    </a>
                                </p>
                            </Profile>
                            <p>
                                ???????????????. ????????? ???????????? ???????????? ????????????
                                ????????? ??????????????????. React??? Typescript???
                                ???????????? Frontend ????????? ???????????? ????????????.
                                ????????? ????????? ????????? ?????? ????????? ?????? ?????????
                                ???????????? ????????? ???????????? ???????????? ????????? ??????
                                ????????? ??????????????????.
                            </p>
                        </ProfileContent>
                    </ProfileBox>
                ) : (
                    <>
                        <ProfileBox>
                            <ImgBox>
                                <img
                                    src="/img/?????????_profile.png"
                                    alt="profileImg"
                                />
                            </ImgBox>
                            <ProfileContent>
                                <h3>Profile</h3>
                                <hr />
                                <Profile isMobile={isWidthMobile}>
                                    <p>
                                        <b>??? ??? : </b>??? ??? ???
                                    </p>
                                    <p>
                                        <b>??? ??? : </b>010-4812-5419
                                    </p>
                                    <p>
                                        <b>Email : </b>
                                        <a href="mailto:minsoohwan2@gmail.com">
                                            minsoohwan2@gmail.com
                                        </a>
                                    </p>
                                </Profile>
                            </ProfileContent>
                        </ProfileBox>
                        <p>
                            ???????????????. ????????? ???????????? ???????????? ???????????? ?????????
                            ??????????????????. React??? Typescript??? ???????????? Frontend
                            ????????? ???????????? ????????????. ????????? ????????? ?????????
                            ???????????? ????????? ?????? ????????? ???????????? ????????? ????????????
                            ???????????? ????????? ?????? ????????? ??????????????????.
                        </p>
                    </>
                )}
                {isWidthMobile ? (
                    <>
                        <MiddleBox>
                            <div>
                                <h3>??????/??????</h3>
                            </div>
                            <div>
                                <h3>?????? Stack</h3>
                            </div>
                        </MiddleBox>
                        <ContentBox isMobile={isWidthMobile}>
                            <Content isMobile={isWidthMobile}>
                                <BarBox>
                                    <div />
                                    <div>
                                        <div />
                                    </div>
                                    <div>
                                        <div />
                                    </div>
                                    <div>
                                        <div />
                                    </div>
                                    <div>
                                        <div />
                                    </div>
                                </BarBox>
                                <EducateContent>
                                    <p>`14.03 ??????????????? ??????????????? ??????</p>
                                    <p>`21.02 ??????????????? ??????????????? ??????</p>
                                    <p>
                                        `22.05 ???????????? ???????????? ????????? ?????????,
                                        ????????? ????????? ??????
                                    </p>
                                    <p>
                                        `22.06 ???????????? ???????????? ????????? ?????????,
                                        ????????? ????????? ??????
                                    </p>
                                </EducateContent>
                            </Content>
                            <StackWrap isMobile={isWidthMobile}>
                                <IconTextBox>
                                    <Icon url="/img/react.png" size="40px" />
                                    <p>React</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon
                                        url="/img/typescript.svg"
                                        size="40px"
                                    />
                                    <p>TypeScript</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon
                                        url="/img/reactquery.svg"
                                        size="40px"
                                    />
                                    <p>{'ReactQuery'}</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon url="/img/redux.png" size="60px" />
                                    <p>Redux</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon url="/img/recoil.png" size="30px" />
                                    <p>Recoil</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon url="/img/sockjs.png" size="30px" />
                                    <p>SockJs&StompJs</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon url="/img/github.png" size="55px" />
                                    <p>Github</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon
                                        url="/img/githubaction.png"
                                        size="30px"
                                    />
                                    <p>GithubAction</p>
                                </IconTextBox>

                                <IconTextBox>
                                    <Icon url="/img/aws.png" size="30px" />
                                    <p>AWS S3</p>
                                </IconTextBox>
                            </StackWrap>
                        </ContentBox>
                    </>
                ) : (
                    <>
                        <h3>??????/??????</h3>

                        <ContentBox isMobile={isWidthMobile}>
                            <Content isMobile={isWidthMobile}>
                                <BarBox>
                                    <div />
                                    <div>
                                        <div />
                                    </div>
                                    <div>
                                        <div />
                                    </div>
                                    <div>
                                        <div />
                                    </div>
                                    <div>
                                        <div />
                                    </div>
                                </BarBox>
                                <EducateContent>
                                    <p>`14.03 ??????????????? ??????????????? ??????</p>
                                    <p>`21.02 ??????????????? ??????????????? ??????</p>
                                    <p>
                                        `22.05 ???????????? ???????????? ????????? ?????????,
                                        ????????? ????????? ??????
                                    </p>
                                    <p>
                                        `22.06 ???????????? ???????????? ????????? ?????????,
                                        ????????? ????????? ??????
                                    </p>
                                </EducateContent>
                            </Content>
                            <h3>?????? Stack</h3>
                            <StackWrap>
                                <IconTextBox>
                                    <Icon url="/img/react.png" size="40px" />
                                    <p>React</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon
                                        url="/img/typescript.svg"
                                        size="40px"
                                    />
                                    <p>TypeScript</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon
                                        url="/img/reactquery.svg"
                                        size="40px"
                                    />
                                    <p>{'ReactQuery'}</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon url="/img/redux.png" size="60px" />
                                    <p>Redux</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon url="/img/recoil.png" size="30px" />
                                    <p>Recoil</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon url="/img/sockjs.png" size="30px" />
                                    <p>SockJs&StompJs</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon url="/img/github.png" size="55px" />
                                    <p>Github</p>
                                </IconTextBox>
                                <IconTextBox>
                                    <Icon
                                        url="/img/githubaction.png"
                                        size="30px"
                                    />
                                    <p>GithubAction</p>
                                </IconTextBox>

                                <IconTextBox>
                                    <Icon url="/img/aws.png" size="30px" />
                                    <p>AWS S3</p>
                                </IconTextBox>
                            </StackWrap>
                        </ContentBox>
                    </>
                )}

                <h3>Project</h3>
                <li>
                    <a href="/project">JUST DO IT!</a>
                </li>
                <h3>etc..</h3>
                <li>
                    <a href="https://github.com/minsoohwan">Github</a>
                </li>
            </IntroOutline>
        </>
    );
};
export default Introduce;
