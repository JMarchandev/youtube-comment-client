import * as ExportFileApi from './api/exportFile';

import { Comment } from './types/commentsResult';

export const getDownloadableFile = async (ype: "csv" | "json", comments: Comment[]) => {
    if (ype === "csv") {
        return ExportFileApi.getCSVFile(comments);
    }
}

export const getCSVFile = async (comments: Comment[]) => {
    const file = await ExportFileApi.getCSVFile(comments);

    return file;
}