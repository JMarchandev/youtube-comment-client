export type Result = {
    items: Comment[];
    url: string;
    videoId: string;
}

export type Comment = {
    authorDisplayName: string;
    id: string;
    publishedAt: string;
    textDisplay: string;
    updatedAt: string;
    likeCount: number;
}