export interface AboutData {
	bio: string;
	background: string[];
	tools: string[];
}

export interface ComicData {
	img: string;
	alt: string;
	safe_title: string;
	year: string;
	month: string;
	day: string;
}

export interface NavigationLink {
	label: string;
	url: string;
}

export interface Id {
	id: string;
}

export type NavigationsListMap = {
	[key: string]: NavigationLink[];
};
