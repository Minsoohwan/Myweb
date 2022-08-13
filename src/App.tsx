import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Main from './page/Main';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import Introduce from './page/Introduce';
import Project from './page/Project';
const Outline = styled.div`
    font-family: 'TITLEG';
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background: -webkit-linear-gradient(180deg, #daedff, #5da0f7);
    background: linear-gradient(180deg, #daedff, #5da0f7);
    justify-content: center;
    align-items: center;
    overflow: auto;
    box-sizing: border-box;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export type props = {
    location?: string;
    url?: string;
    size?: string;
    isClick?: boolean;
    fontSize?: string;
    isMobile?: boolean;
};
const SideBar = styled.div`
    position: fixed;
    left: ${(props: props) => props.location};
    height: 100%;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    z-index: 3;
    transition: 0.7s ease;
`;
const ScrollDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const OpenUI = styled.div`
    position: absolute;
    right: -20px;
    width: 20px;
    height: 60px;
    font-size: 10px;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffffff;
    cursor: pointer;
`;
const ProfileImg = styled.div`
    display: flex;
    width: 130px;
    min-height: 130px;
    border-radius: 50%;
    margin-top: 40px;
    border: 2px solid #5da0f7;
    background-color: white;
    background-image: url('/img/민수환_profile.png');
    background-size: 105px;
    background-position: top;
    background-repeat: no-repeat;
`;
const IconBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;
    /* padding: 0 10px; */
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(${(props: props) => props.url});
    background-size: ${(props: props) => props.size};
    background-position: center;
    background-repeat: no-repeat;
`;

const Text = styled.p`
    color: #000000;
    font-size: ${(props: props) => (props.fontSize ? props.fontSize : '20px')};
    //text-shadow: 0px 1px 10px #000000;
    border-radius: 5px;
    white-space: pre-line;
    text-align: center;
    font-weight: bold;
`;
const IconTextBox = styled.div`
    width: 65px;
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 10px;
        border-radius: 5px;
        padding: 5px;
        margin: 0;
        white-space: pre-line;
    }
`;
function App() {
    const [sideBarState, setSideBarState] = useState<boolean>(true);
    const nav = useNavigate();
    return (
        <Outline>
            <SideBar location={sideBarState ? '-250px' : '0px'}>
                <OpenUI onClick={() => setSideBarState(!sideBarState)}>
                    {!sideBarState ? '닫\n기' : '열\n기'}
                    {!sideBarState ? (
                        <BsArrowLeftShort size="20" />
                    ) : (
                        <BsArrowRightShort size="20" />
                    )}
                </OpenUI>
                <ScrollDiv>
                    <ProfileImg />
                    <Text
                        fontSize="30px"
                        style={{
                            margin: '15px  0 0 0',
                        }}
                    >
                        민 수 환
                    </Text>
                    <Text fontSize="23px" style={{ margin: '0' }}>
                        Frontend
                    </Text>
                    <Text fontSize="12.5px" style={{ margin: '10px 0 15px 0' }}>
                        단국대 기계공학 학사
                    </Text>

                    <Text style={{ margin: '60px 0 16px 0' }}>기술 Stack</Text>
                    <IconBox>
                        <IconTextBox>
                            <Icon url="/img/react.png" size="40px" />
                            <p>React</p>
                        </IconTextBox>
                        <IconTextBox>
                            <Icon url="/img/typescript.svg" size="40px" />
                            <p>TypeScript</p>
                        </IconTextBox>
                        <IconTextBox>
                            <Icon url="/img/reactquery.svg" size="40px" />
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
                            <Icon url="/img/githubaction.png" size="30px" />
                            <p>GithubAction</p>
                        </IconTextBox>

                        <IconTextBox>
                            <Icon url="/img/aws.png" size="30px" />
                            <p>AWS S3</p>
                        </IconTextBox>
                    </IconBox>
                    <Text style={{ margin: '60px 0 16px 0' }}>
                        Email & Gitgub
                    </Text>
                    <IconBox>
                        <IconTextBox>
                            <a href="mailto:minsoohwan2@gmail.com">
                                <Icon url="/img/google.png" size="40px" />
                            </a>
                            <p>Email</p>
                        </IconTextBox>
                        <IconTextBox>
                            <a href="https://github.com/minsoohwan">
                                <Icon url="/img/github.png" size="55px" />
                            </a>
                            <p>Github</p>
                        </IconTextBox>
                    </IconBox>
                    <br />
                    <IconTextBox
                        onClick={() => nav('/')}
                        style={{ cursor: 'pointer' }}
                    >
                        <AiFillHome size="45" />
                        <p>HOME</p>
                    </IconTextBox>
                </ScrollDiv>
            </SideBar>
            <Routes>
                <Route
                    path="/"
                    element={<Main sideBarState={sideBarState} />}
                />
                <Route
                    path="/profile"
                    element={
                        <Introduce
                            sideBarState={sideBarState}
                            img="/img/이력서.svg"
                        />
                    }
                />
                <Route
                    path="/introduce"
                    element={
                        <Introduce
                            sideBarState={sideBarState}
                            img="/img/자기소개서.svg"
                        />
                    }
                />
                <Route
                    path="/project"
                    element={<Project sideBarState={sideBarState} />}
                />
            </Routes>
        </Outline>
    );
}

export default App;
