import { http } from '@/utils/http'
import type { taskType } from './types/task-type'
export const taskApi = (task: taskType) => {
  return http<string>({
    url: '/driver/tasks/list',
    method: 'GET',
    data: task,
  })
}
