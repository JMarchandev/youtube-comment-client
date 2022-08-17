import * as ExportFileApi from './api/exportFile';

import { Comment } from './types/commentsResult';

export const getCSVFile = async (comments: Comment[]) => {
    const file = await ExportFileApi.getCSVFile(comments);

    return file;
}