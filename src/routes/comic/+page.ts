import type { ComicData } from "../../interfaces";

const email = 'v.mahonin@innopolis.university';

export async function load(): Promise<ComicData> {
    const hw2Url = `https://fwd.innopolis.university/api/hw2?email=${email}`;
    let id = await (await fetch(hw2Url)).text();
    const comicUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;
    let responseComic = await fetch(comicUrl);
    let comicData = await (responseComic.json() as Promise<ComicData>);
    return comicData;
}