export type Result = {
    items: Comment[];
    url: string;
    videoId: string;
    nextPageToken: string;
    complete: boolean;
}

export type Comment = {
    authorDisplayName: string;
    id: string;
    publishedAt: string;
    textDisplay: string;
    updatedAt: string;
    likeCount: number;
    sentimentScore?: number | 'not available';
    language?: string | 'not available';
    languageCode?: string | null;
}