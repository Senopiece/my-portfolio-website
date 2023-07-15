import type { Id } from "../../interfaces";

const email = 'v.mahonin@innopolis.university';

export async function load(): Promise<Id> {
    const hw2Url = `https://fwd.innopolis.university/api/hw2?email=${email}`;
    let id = await (await fetch(hw2Url)).text();
    return { id: id };
}