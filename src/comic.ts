import { formatDistanceToNow } from 'date-fns';
import { ComicResponse } from './interfaces';

const email: string = 'v.mahonin@innopolis.university';
const hw2Url: string = `https://fwd.innopolis.university/api/hw2?email=${email}`;

fetch(hw2Url)
    .then((response: Response) => response.text())
    .then((id: string) => {
        const comicUrl: string = `https://fwd.innopolis.university/api/comic?id=${id}`;
        return fetch(comicUrl);
    })
    .then((response: Response) => response.json() as Promise<ComicResponse>)
    .then((data: ComicResponse) => {
        const comicContainer: HTMLElement | null = document.getElementById('comic-container');
        if (comicContainer) {
            comicContainer.innerHTML = "";

            const img: HTMLImageElement = document.createElement('img');
            img.src = data.img;
            img.alt = data.alt;
            comicContainer.appendChild(img);

            const title: HTMLHeadingElement = document.createElement('h2');
            title.textContent = data.safe_title;
            comicContainer.appendChild(title);

            const date: HTMLParagraphElement = document.createElement('p');
            const publishedDate: Date = new Date(`${data.year}-${data.month}-${data.day}`);
            date.textContent = publishedDate.toLocaleDateString();
            comicContainer.appendChild(date);

            const timeAgo: string = formatDistanceToNow(publishedDate);
            const timeAgoElement: HTMLParagraphElement = document.createElement('p');
            timeAgoElement.textContent = `${timeAgo} ago`;
            comicContainer.appendChild(timeAgoElement);
        }
    })
    .catch((error: Error) => {
        console.error(error);
        const comicContainer: HTMLElement | null = document.getElementById('comic-container');
        if (comicContainer) {
            comicContainer.innerHTML = "Error";
        }
    });
