import { http } from '@/utils/http'
import type { taskReportType } from './types/taskReport-type'
export const taskReport = (taskReport: taskReportType) => {
  return http<string>({
    url: '/driver/users/taskReport',
    method: 'GET',
    data: taskReport,
  })
}
