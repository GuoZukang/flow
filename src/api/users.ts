import { http } from '@/utils/http'
export const users = () => {
  return http<string>({
    url: '/driver/users',
    method: 'GET',
  })
}
