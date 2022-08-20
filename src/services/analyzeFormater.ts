import { Comment } from "./types/commentsResult";

var collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export const commentLineAnalyzeFormater = (comment: Comment[]) => {
    const result: any = []
    let count = 1;

    comment.reduce((a, b) => {
        if (a.publishedAt.split('T')[0] === b.publishedAt.split('T')[0]) {
            count++;
            return a
        } else {
            result.push({
                x: a.publishedAt.split('T')[0],
                y: count
            })
            count = 1;
            return b
        }
    })
    
    return result.sort((a: { x: string }, b: { x: string }) => collator.compare(a.x, b.x))
}