import { TweetMsg } from "../common/Types"
import FormatDate from '../utils/FormatDate';

export enum ActionTypes {
    SET_TWEETS = "initialize_tweet_list",
    ADD_TWEET = "add_tweet",
    EDIT_TWEET = "edit_tweet",
    DELETE_TWEET = "delete_tweet"
}

type Action = {type:ActionTypes.SET_TWEETS, data: TweetMsg[]}
| {type:ActionTypes.ADD_TWEET, text: string}
| {type:ActionTypes.EDIT_TWEET, tweet: TweetMsg, text: string}
| {type:ActionTypes.DELETE_TWEET, id: number}


const TweetsReducer = (state:TweetMsg[], action:Action):TweetMsg[] => {
    if(ActionTypes.SET_TWEETS == action.type){
        console.log("🚀 ~ file: tweetsReducer.ts:24 ~ //TweetsReducer ~ ActionTypes.SET_TWEETS:", ActionTypes.SET_TWEETS)
        return [...action.data];
    }
    if (ActionTypes.ADD_TWEET == action.type) {
        console.log("🚀 ~ file: tweetsReducer.ts:28 ~ //TweetsReducer ~ ActionTypes.ADD_TWEET:", ActionTypes.ADD_TWEET)
        const newTweet = {
            id: state.length,
            name: "anonymous",
            username: "anonymous",
            isDeleted: false,
            timestamp: FormatDate(),
            message: action.text
        };
        return [ newTweet, ...state];
    }
    if (ActionTypes.EDIT_TWEET == action.type) {
        console.log("🚀 ~ file: tweetsReducer.ts:44 ~ //TweetsReducer ~ ActionTypes.EDIT_TWEET:", ActionTypes.EDIT_TWEET)
        const reformatList = state.map(r => {
            if(r.id !== action.tweet.id) return r;
            return {
              ...action.tweet,
              message: action.text,
              timestamp: FormatDate(),
            }
        });
        return reformatList;
    }
    if (ActionTypes.DELETE_TWEET == action.type) {
        console.log("🚀 ~ file: tweetsReducer.ts:60 ~ //TweetsReducer ~ ActionTypes.DELETE_TWEET:", ActionTypes.DELETE_TWEET)
        const reformatList = state.filter(r => {
            if(r.id !== action.id) return true;
            return false;
        });
        return reformatList;
    }

    return state;
}

export default TweetsReducer;