import './App.css';
import styled from "styled-components";
import {useState} from "react";
import Axios from 'axios';
import {TwitterTimelineEmbed} from "react-twitter-embed";

const StyledButton = styled.button`
  width: 20vw;
  height: 10vh;
  background: aliceblue;
  border-radius: 40px;
  margin-top: 25px;
`;

const StyledTextArea = styled.textarea`
  overflow-y: scroll;
  width: 20vw;
  height: 15vh;
  background: aliceblue;

`;
const StyledActionArea = styled.div`
  display: inline-flex;
  margin-bottom: 5vh;
`
const Line = styled.div`
  border-top: 15px solid grey;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-bottom: 16px;;`

function App() {


    const [sendTweetInput, setSendTweetInput] = useState('');
    const [getTweetInput, setGetTweetInput] = useState('');
    const [removeTweetInput, setRemoveTweetInput] = useState('');


    const [sendTweetResponse, setSendTweetResponse] = useState('');
    const [getTweetResponse, setGetTweetResponse] = useState('');
    const [removeTweetResponse, setRemoveTweetResponse] = useState('');

    const onSendClick = async () => {
        try {

            const data = JSON.stringify({
                "text": sendTweetInput
            });

            const config = {
                method: 'post',
                url: 'https://91yptvln44.execute-api.us-east-1.amazonaws.com/dev/sendTweet',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const res = await Axios(config);
            setSendTweetResponse(
                "id_str which can be used to retrieve tweet is " + res.data.id_str + "\n \n more info below \n \n" + JSON.stringify(res.data))
        } catch (e) {
            setSendTweetResponse(JSON.stringify(e))

        }
    };


    const onGetClick = async () => {
        try {

            const data = JSON.stringify({
                "id": getTweetInput
            });

            const config = {
                method: 'post',
                url: 'https://91yptvln44.execute-api.us-east-1.amazonaws.com/dev/getTweet',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const res = await Axios(config);
            setGetTweetResponse("TWEET is : " + JSON.stringify(res.data[0].text) + " \n \n " + " more info below" + " \n " + JSON.stringify(res.data))
        } catch (e) {
            setGetTweetResponse(JSON.stringify(e))

        }
    };

    const onDeleteClick = async () => {
        try {

            const data = JSON.stringify({
                "id": removeTweetInput
            });

            const config = {
                method: 'post',
                url: 'https://91yptvln44.execute-api.us-east-1.amazonaws.com/dev/deleteTweet',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const res = await Axios(config);
            setRemoveTweetResponse("Deleted TWEET is : " + JSON.stringify(res.data.text) + " \n \n " + " more info below" + " \n" + JSON.stringify(res.data))
        } catch (e) {
            setRemoveTweetResponse(JSON.stringify(e))

        }
    };

    return (
        <>
            <div style={{display: "flex"}}>
                <div>
                    <StyledActionArea>
                        <StyledButton>ACTION BUTTON</StyledButton>
                        <StyledTextArea value={'INPUT TEXTAREA'}></StyledTextArea>
                        <StyledTextArea value={'SCROLLABLE OUTPUT TEXTAREA/RESPONSE'}></StyledTextArea>
                    </StyledActionArea>

                    <Line>
                    </Line>
                    <b> Please select from the options below and refer to the one above for illustration/usage</b>
                    <Line/>
                    <StyledActionArea>
                        <StyledButton onClick={onSendClick}>SEND Tweet</StyledButton>
                        <StyledTextArea
                            placeholder={'please enter text and press button to send text as tweet. wait upto 1 minute for it to be shown on the right embedded twitter'}
                            onChange={event => {
                                setSendTweetInput(event.target.value)
                            }}>{sendTweetInput}</StyledTextArea>
                        <StyledTextArea value={sendTweetResponse}></StyledTextArea>
                    </StyledActionArea>


                    <StyledActionArea>
                        <StyledButton onClick={onGetClick}>GET Tweet</StyledButton>
                        <StyledTextArea
                            placeholder={'please enter id of the tweet you want to retrieve'}
                            onChange={event => {
                                setGetTweetInput(event.target.value)
                            }}></StyledTextArea>
                        <StyledTextArea value={getTweetResponse}></StyledTextArea> </StyledActionArea>


                    <StyledActionArea>
                        <StyledButton onClick={onDeleteClick}>DELETE Tweet</StyledButton>
                        <StyledTextArea placeholder={'please enter id of tweet you want to delete'} onChange={event => {
                            setRemoveTweetInput(event.target.value)
                        }}></StyledTextArea>
                        <StyledTextArea value={removeTweetResponse}></StyledTextArea>
                    </StyledActionArea>
                </div>
                <>
                    Twitter feed (new tweets can take upto a minute to appear)
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="AkankshaRawat09"
                        options={{height: 800}}
                    />
                </>
            </div>
        </>
    );
}

export default App;
