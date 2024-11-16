import {getUrl, getDailyQueryStr, getDailyProblemID} from "../shared";
import {LcAxios} from "../utils/httpUtils";

export const queryDailyChallenge = async (): Promise<string> => {
    return LcAxios(getUrl("graphql"), {
        method: "POST",
        data: {
            query: getDailyQueryStr(),
            variables: {},
            operationName: 'questionOfToday'
        },
    }).then((res) => getDailyProblemID(res));
};
