import * as Analyze from './api/analyse';

import { Result } from './types/commentsResult';

export const getAllAnalyzes = async (request: Result) => {
    const analyzes = await Analyze.getAnalyzes(request);
    return analyzes.data;
}