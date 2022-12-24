import initializeCall from "../initialize";

export function getNewsList(language) {
    return initializeCall.get(`/dashboard/v2?language=${language}`);
}

export function getConstituencyList(language) {
    return initializeCall.get(`/constituency/?language=${language}`);
}

export function getDistrictList(language) {
    return initializeCall.get(`/news/district/?language=${language}`);
}

export function getTagswiseNewsList(language, tagName) {
    return initializeCall.get(`news/search/v2?language=${language}&searchOption=${tagName}`);
}

export function getCategoriesList(language) {
    return initializeCall.get(`news/categories/?language=${language}`);
}
export function getVideosList(language) {
    return initializeCall.get(`video/list/?language=${language}`);
}

export function getBreakingNewsList(language) {
    return initializeCall.get(`/news/breaking/v2?language=${language}`);
}

export function getAllNews(language) {
    return initializeCall.get(`news/search/v2?language=${language}&searchOption=edens`);
}

export function getBreakingNews(language) {
    return initializeCall.get(`/news/top?language=${language}`);
}

export function getBurningNews(language) {
    return initializeCall.get(`news/search/v2?language=${language}&searchOption=burning`);
}

export function getNewsById(language, id) {
    return initializeCall.get(`/news/searchById/?language=${language}&searchId=${id}`);
}






