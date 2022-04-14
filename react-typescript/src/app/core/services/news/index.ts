import { AxiosResponse } from 'axios'
import { http } from 'interfaces/http'

const NEWS_URL = 'v1/news'

const getNews = async (): Promise<AxiosResponse> => {
  return http.get(NEWS_URL)
}

const News = {
    getNews,
}

export { News };

