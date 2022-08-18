import * as ExportFileApi from './api/exportFile';

import { Result } from './types/commentsResult';

export const getDownloadableFile = async (type: "csv" | "json", request: Result) => {
    const file = await ExportFileApi.getFile(type, request);

    return file;
}