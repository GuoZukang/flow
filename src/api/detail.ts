import { http } from '../utils/http'
import type { detailType } from './types/detail-type'
export const detailApi = (id: detailType) => {
  return http<string>({
    url: '/driver/tasks/details/' + id,
    method: 'GET',
    data: id,
  })
}
