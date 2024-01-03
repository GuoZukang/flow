import { http } from '@/utils/http'
export const truck = () => {
  return http<string>({
    url: '/driver/users/truck',
    method: 'GET',
  })
}
