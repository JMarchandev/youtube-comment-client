export type Analyse = {
    x: number | string;
    y: number | string;
}[]

export type AnalyseResult = {
    sentiment: Analyse;
    publish: Analyse;
    language: Analyse;
}