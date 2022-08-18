import * as ExportFileApi from './api/exportFile';

import { Result } from './types/commentsResult';

export const getDownloadableFile = async (type: "csv" | "json", request: Result) => {
    if (type === "csv") {
        return getCSVFile(type, request);
    }
}

export const getCSVFile = async (type: 'csv', request: Result) => {
    const file = await ExportFileApi.getCSVFile(type, request);

    return file;
}