import { ITeams, ITeam } from "../interfaces/index";
const BASE_URL = "http://localhost:5000";

async function getTeams(): Promise<ITeams> {
    const teamsUrl = `${BASE_URL}/api/teams`;

    try {
        const response = await fetch(teamsUrl);

        const teams = await response.json();
        return teams;
    } catch (error) {
        throw new Error(String(error));
    };
};

async function getTeam(id: string): Promise<ITeam> {
    const teamUrl = `${BASE_URL}/api/team/${id}`;

    try {
        const response = await fetch(teamUrl);
        
        const team = await response.json();
        return team;
    } catch (error) {
        throw new Error(String(error));
    };
};

export {
    getTeams,
    getTeam
};