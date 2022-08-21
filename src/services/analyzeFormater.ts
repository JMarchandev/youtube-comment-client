import { Comment } from "./types/commentsResult";

var collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export const getPublishCommentAnalyze = (comment: Comment[]) => {
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

type ScoreAnalyse = { x: number, y: number, label?: string }

export const getSentimentScoreCommentAnalyze = (comment: Comment[]) => {
    const analyzeResult: ScoreAnalyse[] = [];

    comment.forEach((elmt: Comment) => {
        if (elmt.sentimentScore !== 'not available') {
            const seach = analyzeResult.findIndex((e: { x: number | 'not available', y: number }) => e.x === elmt.sentimentScore);
            if (seach === -1) {
                if (elmt.sentimentScore) {
                    analyzeResult.push({
                        x: elmt.sentimentScore,
                        y: 1,
                        label: elmt.sentimentScore.toString()
                    });
                }
            } else {
                analyzeResult[seach].y += 1;
            }
        }
    });
    return analyzeResult.sort((a: ScoreAnalyse, b: ScoreAnalyse) => a.x - b.x)
}

type LanguageAnalyse = { x: string, y: number, label?: string }

export const getLanguageCommentAnalyze = (comment: Comment[]) => {
    const analyzeResult: LanguageAnalyse[] = [];

    comment.forEach((elmt: Comment) => {
        if (elmt.language !== 'not available') {
            const seach = analyzeResult.findIndex((e: { x: string | 'not available', y: number }) => e.x === elmt.language);
            if (seach === -1) {
                if (elmt.language) {
                    analyzeResult.push({
                        x: elmt.language,
                        y: 1,
                        label: elmt.language.toString()
                    });
                }
            } else {
                analyzeResult[seach].y += 1;
            }
        }
    });

    return analyzeResult.sort((a: LanguageAnalyse, b: LanguageAnalyse) => b.y - a.y)
}