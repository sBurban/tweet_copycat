import { TweetMsg } from "../common/Types"
import FormatDate from '../utils/FormatDate';

interface TweetlistState {
    data: TweetMsg[]
}

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


const TweetsReducer = (state:TweetlistState, action:Action):TweetlistState => {
    if(ActionTypes.SET_TWEETS == action.type){
        return {...state, data: action.data};
    }
    if (ActionTypes.ADD_TWEET == action.type) {
        const newTweet = {
            id: state.data.length,
            name: "anonymous",
            username: "anonymous",
            isDeleted: false,
            timestamp: FormatDate(),
            message: action.text
        };
        return {
            ...state,
            data: [newTweet, ...state.data]
        };
    }
    if (ActionTypes.EDIT_TWEET == action.type) {
        const reformatList = state.data.map(r => {
            if(r.id !== action.tweet.id) return r;
            return {
              ...action.tweet,
              message: action.text,
              timestamp: FormatDate(),
            }
        });
        return {
            ...state,
            data: reformatList
        }
    }
    if (ActionTypes.DELETE_TWEET == action.type) {
        const reformatList = state.data.filter(r => {
            if(r.id !== action.id) return true;
            return false;
        });
        return {
            ...state,
            data: reformatList
        }
    }

    return state;
}

export default TweetsReducer;