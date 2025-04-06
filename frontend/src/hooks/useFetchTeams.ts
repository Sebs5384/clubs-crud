import { useReducer, useEffect } from "react";
import { teamsReducer, initialTeamsState } from "../reducers/teamsReducer";
import { getTeams } from "../api/teams";

function useFetchTeams() {
    const [state, dispatch] = useReducer(teamsReducer, initialTeamsState);

    useEffect(() => {
        const fetchTeams = async () => {
            dispatch({ type: "FETCH_TEAMS_REQUEST", payload: null });

            try {
                const teamsData = await getTeams();
                dispatch({ type: "FETCH_TEAMS_SUCCESS", payload: teamsData });
            } catch (error) {
                if (error instanceof Error) {
                    dispatch({ type: "FETCH_TEAMS_FAILURE", payload: { message: error.message } });
                };
            };
        };

        fetchTeams();
    }, []);

    return {
        loadingTeams: state.loading,
        teamsData: state.teamsData,
        teamsError: state.teamError
    };
};

export default useFetchTeams;