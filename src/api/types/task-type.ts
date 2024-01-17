export type taskType = {
  /**
   * 结束时间
   */
  endTime?: string
  /**
   * 页码
   */
  page: number
  /**
   * 页面大小
   */
  pageSize: number
  /**
   * 开始时间
   */
  startTime?: string
  /**
   * 作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
   */
  status: number
  /**
   * 运输任务id
   */
  transportTaskId?: string
}
