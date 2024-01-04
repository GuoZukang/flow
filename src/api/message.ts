import { http } from '@/utils/http'
import type { msgType } from './types/message-type'
export const msgApi = (msg: msgType) => {
  return http<string>({
    url: '/driver/messages/page',
    method: 'GET',
    data: msg,
  })
}
