/**
 * CreateAppScanTaskRepeat请求参数结构体
 */
export interface CreateAppScanTaskRepeatRequest {
    /**
      * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
      */
    Source: number;
    /**
      * 应用平台, 0:android, 1:ios, 2:小程序
      */
    Platform: number;
    /**
      * 任务类型, 0:基础版, 1:专家版, 2:本地化
      */
    TaskType: number;
    /**
      * 原诊断任务ID
      */
    OrgTaskID: string;
    /**
      * App包名
      */
    AppPackage?: string;
    /**
      * 上传的文件ID(灵犀诊断必填)
      */
    FileID?: string;
    /**
      * 软件下载链接地址(灵鲲诊断必填)
      */
    AppDownloadUrl?: string;
    /**
      * 隐私文本下载地址(灵鲲诊断必填)
      */
    PrivacyTextUrl?: string;
    /**
      * 应用名称
      */
    AppName?: string;
    /**
      * 隐私申明文件名称
      */
    PrivacyTextName?: string;
}
/**
 * DescribeScanTaskList返回参数结构体
 */
export interface DescribeScanTaskListResponse {
    /**
      * 返回值, 0:成功, 其他值请查看“返回值”定义
      */
    Result: number;
    /**
      * 任务总数量
      */
    Total: number;
    /**
      * 诊断任务数据列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<AppTaskData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 应用合规隐私诊断任务应用数据信息
 */
export interface AppInfoItem {
    /**
      * App包名
      */
    AppPackage: string;
    /**
      * App名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppName: string;
    /**
      * App版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppVersion: string;
    /**
      * 应用平台, 0:android, 1:ios, 2:小程序
      */
    Platform: number;
    /**
      * App隐私诊断报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportUrl: string;
    /**
      * App隐私诊断报告名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportTitle: string;
    /**
      * App诊断堆栈报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    BehaviorUrl: string;
    /**
      * App诊断堆栈报告名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    BehaviorTitle: string;
    /**
      * 诊断高风险项数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    HighRiskCount: number;
    /**
      * 隐私申明文件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivacyTextName: string;
    /**
      * 软件MD5
注意：此字段可能返回 null，表示取不到有效值。
      */
    SoftwareMD5: string;
    /**
      * 隐私文本MD5
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivacyTextMD5: string;
}
/**
 * DescribeResourceUsageInfo返回参数结构体
 */
export interface DescribeResourceUsageInfoResponse {
    /**
      * 返回值, 0:成功, 其他值请查看“返回值”定义，暂时未定
      */
    Result: number;
    /**
      * 资源使用信息
      */
    Data: ResourceUsageInfoData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScanTaskList请求参数结构体
 */
export interface DescribeScanTaskListRequest {
    /**
      * 任务来源, -1:所有, 0:默认值(私域), 1:灵犀, 2:灵鲲;
      */
    Source: number;
    /**
      * 应用平台, 0:android, 1:ios, 2:小程序
      */
    Platform: number;
    /**
      * 任务状态,可多值查询,例如:"1,2,3" 0:默认值(待检测/待咨询), 1.检测中, 2:待评估, 3:评估中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
      */
    TaskStatuses: string;
    /**
      * 任务类型,可多值查询,采用逗号分隔,例如:"0,1" 0:基础版, 1:专家版, 2:本地化
      */
    TaskTypes: string;
    /**
      * 页码
      */
    PageNo: number;
    /**
      * 页码大小
      */
    PageSize: number;
    /**
      * 应用名称或小程序名称(可选参数)
      */
    AppName?: string;
    /**
      * 查询时间范围, 查询开始时间(2021-09-30 或 2021-09-30 10:57:34)
      */
    StartTime?: string;
    /**
      * 查询时间范围, 查询结束时间(2021-09-30 或 2021-09-30 10:57:34)
      */
    EndTime?: string;
}
/**
 * 资源使用情况信息
 */
export interface ResourceUsageInfoData {
    /**
      * 资源计费项名称
      */
    ResourceName: string;
    /**
      * 资源总数
      */
    Total: number;
    /**
      * 未使用资源数
      */
    UnusedCount: number;
}
/**
 * 任务流步骤详情
 */
export interface TaskFlowStepsInfo {
    /**
      * 流程编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowNo: string;
    /**
      * 流程名称
      */
    FlowName: string;
    /**
      * 流程状态, 其他值:进行中, 2:成功, 3:失败
      */
    FlowStatus: number;
    /**
      * 流程状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowStateDesc: string;
    /**
      * 流程启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 流程完成时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
}
/**
 * CreateAppScanTask请求参数结构体
 */
export interface CreateAppScanTaskRequest {
    /**
      * 任务类型, 0:基础版, 1:专家版, 2:本地化
      */
    TaskType: number;
    /**
      * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
      */
    Source: number;
    /**
      * 应用平台, 0:android, 1:ios, 2:小程序
      */
    Platform: number;
    /**
      * App包名
      */
    AppPackage?: string;
    /**
      * App名称
      */
    AppName?: string;
    /**
      * App版本
      */
    AppVersion?: string;
    /**
      * 上传的软件文件ID(灵犀诊断必填)
      */
    FileID?: string;
    /**
      * 软件下载链接地址(灵鲲诊断必填)
      */
    AppDownloadUrl?: string;
    /**
      * 隐私文本下载地址(灵鲲诊断必填)
      */
    PrivacyTextUrl?: string;
    /**
      * 联系人信息
      */
    ContactName?: string;
    /**
      * 联系电话
      */
    TelNumber?: string;
    /**
      * 公司邮箱
      */
    Email?: string;
    /**
      * 公司名称
      */
    CorpName?: string;
    /**
      * 商务对接人员
      */
    SalesPerson?: string;
    /**
      * 备注信息
      */
    Remark?: string;
    /**
      * 是否同意隐私条款，0:不同意(默认), 1:同意
      */
    IsAgreePrivacy?: number;
    /**
      * 隐私申明文件名称
      */
    PrivacyTextName?: string;
}
/**
 * DescribeScanTaskStatus返回参数结构体
 */
export interface DescribeScanTaskStatusResponse {
    /**
      * 返回值, 0:成功, 其他值请查看“返回值”定义
      */
    Result: number;
    /**
      * 0:默认值(待检测/待咨询), 1.检测中,  4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
      */
    Status: number;
    /**
      * 诊断失败的错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 任务流详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowSteps: Array<TaskFlowStepsInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFileTicket返回参数结构体
 */
export interface DescribeFileTicketResponse {
    /**
      * 返回值, 0:成功, 其他值请查看“返回值”定义
      */
    Result: number;
    /**
      * 上传url(灵鲲:Post方法（100:apk,101:txt）, 灵犀:put方法)
      */
    UploadUrl: string;
    /**
      * 上传url鉴权信息(灵犀上传需要, Authorization参数值)
注意：此字段可能返回 null，表示取不到有效值。
      */
    UploadSign: string;
    /**
      * 上传文件ID(灵犀提交诊断任务需要)
注意：此字段可能返回 null，表示取不到有效值。
      */
    FildID: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScanTaskReportUrl请求参数结构体
 */
export interface DescribeScanTaskReportUrlRequest {
    /**
      * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
      */
    Source: number;
    /**
      * 应用平台, 0:android, 1:ios, 2:小程序
      */
    Platform: number;
    /**
      * 任务id
      */
    TaskID: string;
    /**
      * 任务类型, 0:基础版, 1:专家版, 2:本地化
      */
    TaskType: number;
    /**
      * 报告类型, 0:诊断报告, 1:堆栈报告
      */
    ReportType: number;
}
/**
 * 应用合规隐私诊断任务数据
 */
export interface AppTaskData {
    /**
      * 任务ID
      */
    TaskID: string;
    /**
      * 任务类型, 0:基础版, 1:专家版, 2:本地化
      */
    TaskType: number;
    /**
      * 0:默认值(待检测/待咨询), 1.检测中, 2:待评估, 3:评估中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
      */
    TaskStatus: number;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskErrMsg: string;
    /**
      * 任务来源,0:默认值(私域), 1:灵犀, 2:灵鲲
      */
    Source: number;
    /**
      * 应用信息
      */
    AppInfo: AppInfoItem;
    /**
      * 任务启动时间
      */
    StartTime: string;
    /**
      * 任务完成时间(更新时间)
      */
    EndTime: string;
    /**
      * 联系人信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactName: string;
}
/**
 * DescribeScanTaskStatus请求参数结构体
 */
export interface DescribeScanTaskStatusRequest {
    /**
      * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
      */
    Source: number;
    /**
      * 应用平台, 0:android, 1:ios, 2:小程序
      */
    Platform: number;
    /**
      * 任务id
      */
    TaskID: string;
    /**
      * 任务类型, 0:基础版, 1:专家版, 2:本地化
      */
    TaskType: number;
}
/**
 * DescribeFileTicket请求参数结构体
 */
export interface DescribeFileTicketRequest {
    /**
      * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
      */
    Source: number;
    /**
      * 应用平台, 0:android, 1:ios, 2:小程序
      */
    Platform: number;
}
/**
 * CreateAppScanTask返回参数结构体
 */
export interface CreateAppScanTaskResponse {
    /**
      * 返回值, 0:成功, 其他值请查看“返回值”定义
      */
    Result: number;
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskID: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceUsageInfo请求参数结构体
 */
export interface DescribeResourceUsageInfoRequest {
    /**
      * 资源计费项名称
      */
    PriceName: string;
}
/**
 * DescribeScanTaskReportUrl返回参数结构体
 */
export interface DescribeScanTaskReportUrlResponse {
    /**
      * 返回值, 0:成功, 其他值请查看“返回值”定义
      */
    Result: number;
    /**
      * 诊断报告/堆栈信息下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportUrl: string;
    /**
      * 诊断报告/堆栈名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportTitle: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAppScanTaskRepeat返回参数结构体
 */
export interface CreateAppScanTaskRepeatResponse {
    /**
      * 返回值, 0:成功, 其他值请查看“返回值”定义
      */
    Result: number;
    /**
      * 任务id
      */
    TaskID: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
