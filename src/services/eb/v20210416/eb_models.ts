/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * 用来描述ckafka投递目标
 */
export interface CkafkaTargetParams {
  /**
   * 要投递到的ckafka topic
   */
  TopicName: string
  /**
   * 重试策略
   */
  RetryPolicy: RetryPolicy
}

/**
 * DeleteTarget返回参数结构体
 */
export interface DeleteTargetResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件规则ID
   */
  RuleId: string
}

/**
 * CheckRule请求参数结构体
 */
export interface CheckRuleRequest {
  /**
   * Event信息
   */
  Event: string
  /**
   * EventPattern信息
   */
  EventPattern: string
}

/**
 * 日志存储过滤条件
 */
export interface LogFilters {
  /**
   * 过滤字段名称
   */
  Key: string
  /**
   * 运算符, 全等 eq，不等 neq，相似 like，排除相似 not like,  小于 lt，小于且等于 lte，大于 gt，大于且等于 gte，在范围内 range，不在范围内 norange
   */
  Operator: string
  /**
   * 过滤值，范围运算需要同时输入两个值，以英文逗号分隔

   */
  Value: string
}

/**
 * CreateEventBus请求参数结构体
 */
export interface CreateEventBusRequest {
  /**
   * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
   */
  EventBusName: string
  /**
   * 事件集描述，不限字符类型，200字符描述以内
   */
  Description?: string
  /**
   * EB存储时长
   */
  SaveDays?: number
  /**
   * EB是否开启存储
   */
  EnableStore?: boolean
}

/**
 * 平台事件匹配规则
 */
export interface PlatformEventSummary {
  /**
   * 平台事件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName?: string
  /**
   * 平台事件匹配规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventPattern?: string
}

/**
 * 用来描述一个ckafka投递目标的重试策略
 */
export interface RetryPolicy {
  /**
   * 重试间隔 单位:秒
   */
  RetryInterval: number
  /**
   * 最大重试次数
   */
  MaxRetryAttempts: number
}

/**
 * CreateTransformation请求参数结构体
 */
export interface CreateTransformationRequest {
  /**
   * 事件总线 id
   */
  EventBusId: string
  /**
   * 规则id
   */
  RuleId: string
  /**
   * 一个转换规则列表，当前仅限定一个
   */
  Transformations: Array<Transformation>
}

/**
 * SearchLog返回参数结构体
 */
export interface SearchLogResponse {
  /**
   * 日志总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 每页日志条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: number
  /**
   * 日志检索结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<SearchLogResult>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListEventBuses返回参数结构体
 */
export interface ListEventBusesResponse {
  /**
   * 事件集信息
   */
  EventBuses?: Array<EventBus>
  /**
   * 事件集总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTarget请求参数结构体
 */
export interface CreateTargetRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 目标类型
   */
  Type: string
  /**
   * 目标描述
   */
  TargetDescription: TargetDescription
  /**
   * 事件规则ID
   */
  RuleId: string
}

/**
 * 日志检索详情
 */
export interface SearchLogResult {
  /**
   * 单条日志上报时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: string
  /**
   * 日志内容详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 事件来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 事件匹配规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleIds?: string
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subject?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 事件状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
  /**
   * 事件规则ID
   */
  RuleId: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRule返回参数结构体
 */
export interface UpdateRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTransformation返回参数结构体
 */
export interface DeleteTransformationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPlatformProducts返回参数结构体
 */
export interface ListPlatformProductsResponse {
  /**
   * 平台产品列表
   */
  PlatformProducts?: Array<PlatformProduct>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetEventBus请求参数结构体
 */
export interface GetEventBusRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * UpdateConnection请求参数结构体
 */
export interface UpdateConnectionRequest {
  /**
   * 连接器ID
   */
  ConnectionId: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 使能开关
   */
  Enable?: boolean
  /**
   * 描述
   */
  Description?: string
  /**
   * 连接器名称
   */
  ConnectionName?: string
}

/**
 * Transform输出参数
 */
export interface OutputStructParam {
  /**
   * 对应输出json中的key
   */
  Key: string
  /**
   * 可以填json-path也可以支持常量或者内置关键字date类型
   */
  Value: string
  /**
   * value的数据类型, 可选值: STRING, NUMBER,BOOLEAN,NULL,SYS_VARIABLE,JSONPATH
   */
  ValueType: string
}

/**
 * GetRule请求参数结构体
 */
export interface GetRuleRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件规则ID
   */
  RuleId: string
}

/**
 * 日志查询相关接口filter参数定义
 */
export interface LogFilter {
  /**
   * 过滤字段名称
   */
  Key?: string
  /**
   * 运算符，全等 eq，不等 neq，相似 like，排除相似 not like,  小于 lt，小于且等于 lte，大于 gt，大于且等于 gte，在范围内 range，不在范围内 norange
   */
  Operator?: string
  /**
   * 过滤值,范围运算需要同时输入两个值，以英文逗号分隔

   */
  Value?: string
  /**
   * 该层级filters逻辑关系，取值 "AND" 或 "OR"
   */
  Type?: string
  /**
   * LogFilters数组
   */
  Filters?: Array<LogFilters>
}

/**
 * APIGWParams描述
 */
export interface APIGWParams {
  /**
   * HTTPS
   */
  Protocol: string
  /**
   * POST
   */
  Method: string
}

/**
 * 平台产品基础信息
 */
export interface PlatformProduct {
  /**
   * 平台产品名称
   */
  ProductName?: string
  /**
   * 平台产品类型
   */
  ProductType?: string
}

/**
 * 描述如何提取数据
 */
export interface Extraction {
  /**
   * JsonPath, 不指定则使用默认值$.
   */
  ExtractionInputPath: string
  /**
   * 取值: TEXT/JSON
   */
  Format: string
  /**
   * 仅在Text需要传递
注意：此字段可能返回 null，表示取不到有效值。
   */
  TextParams?: TextParams
}

/**
 * Data Transfer Service参数
 */
export interface DTSParams {
  /**
   * Consumer Group Name
   */
  ConsumerGroupName: string
  /**
   * 账户名
   */
  Account: string
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password: string
}

/**
 * CreateTarget返回参数结构体
 */
export interface CreateTargetResponse {
  /**
   * 目标ID
   */
  TargetId: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRule请求参数结构体
 */
export interface UpdateRuleRequest {
  /**
   * 事件规则ID
   */
  RuleId: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 使能开关。
   */
  Enable?: boolean
  /**
   * 规则描述，不限字符类型，200字符描述以内。
   */
  Description?: string
  /**
   * 参考：[事件模式](https://cloud.tencent.com/document/product/1359/56084)
   */
  EventPattern?: string
  /**
   * 事件规则名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
   */
  RuleName?: string
}

/**
 * CreateConnection返回参数结构体
 */
export interface CreateConnectionResponse {
  /**
   * 连接器ID
   */
  ConnectionId: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTargets请求参数结构体
 */
export interface ListTargetsRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
   */
  OrderBy?: string
  /**
   * 事件规则ID
   */
  RuleId?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 分页偏移量，默认为0。
   */
  Offset?: number
  /**
   * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
   */
  Order?: string
}

/**
 * 一个转换器
 */
export interface Transformation {
  /**
   * 描述如何提取数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extraction?: Extraction
  /**
   * 描述如何过滤数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  EtlFilter?: EtlFilter
  /**
   * 描述如何数据转换
注意：此字段可能返回 null，表示取不到有效值。
   */
  Transform?: Transform
}

/**
 * UpdateTransformation返回参数结构体
 */
export interface UpdateTransformationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckTransformation返回参数结构体
 */
export interface CheckTransformationResponse {
  /**
   * 经过Transformations处理之后的数据
   */
  Output: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTargets返回参数结构体
 */
export interface ListTargetsResponse {
  /**
   * 目标总数
   */
  TotalCount: number
  /**
   * 目标信息
   */
  Targets: Array<Target>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述如何过滤数据
 */
export interface EtlFilter {
  /**
   * 语法Rule规则保持一致
   */
  Filter: string
}

/**
 * ConnectionDescription描述
 */
export interface ConnectionDescription {
  /**
   * 资源qcs六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606)
   */
  ResourceDescription: string
  /**
   * apigw参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  APIGWParams?: APIGWParams
  /**
   * ckafka参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CkafkaParams?: CkafkaParams
  /**
   * data transfer service (DTS)参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DTSParams?: DTSParams
  /**
   * tdmq参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TDMQParams?: TDMQParams
}

/**
 * Target信息
 */
export interface Target {
  /**
   * 目标类型
   */
  Type: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 目标ID
   */
  TargetId: string
  /**
   * 目标描述
   */
  TargetDescription: TargetDescription
  /**
   * 事件规则ID
   */
  RuleId: string
  /**
   * 开启批量投递使能
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableBatchDelivery: boolean
  /**
   * 批量投递最长等待时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchTimeout: number
  /**
   * 批量投递最大事件条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  BatchEventCount: number
}

/**
 * DeleteEventBus请求参数结构体
 */
export interface DeleteEventBusRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * ListEventBuses请求参数结构体
 */
export interface ListEventBusesRequest {
  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
   */
  OrderBy?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
   */
  Order?: string
  /**
   * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。
   */
  Filters?: Array<Filter>
  /**
   * 分页偏移量，默认为0。
   */
  Offset?: number
}

/**
 * CreateTransformation返回参数结构体
 */
export interface CreateTransformationResponse {
  /**
   * 生成的转换器id
   */
  TransformationId: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 平台事件名称
 */
export interface PlatformEventDetail {
  /**
   * 事件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName?: string
  /**
   * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventType?: string
}

/**
 * DeleteTransformation请求参数结构体
 */
export interface DeleteTransformationRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 转换器id
   */
  TransformationId: string
}

/**
 * Ckafka 连接器参数
 */
export interface CkafkaParams {
  /**
   * kafka offset
   */
  Offset: string
  /**
   * ckafka  topic
   */
  TopicName: string
}

/**
 * eb event信息
 */
export interface Event {
  /**
   * 事件源的信息,新产品上报必须符合EB的规范
   */
  Source: string
  /**
   * 事件数据，内容由创建事件的系统来控制，当前datacontenttype仅支持application/json;charset=utf-8，所以该字段是json字符串
   */
  Data: string
  /**
   * 事件类型，可自定义，选填。云服务默认写 COS:Created:PostObject，用“：”分割类型字段
   */
  Type: string
  /**
   * 事件来源详细描述，可自定义，选填。云服务默认为标准qcs资源表示语法：qcs::dts:ap-guangzhou:appid/uin:xxx
   */
  Subject: string
  /**
   * 事件发生的毫秒时间戳，
time.Now().UnixNano()/1e6
   */
  Time?: number
}

/**
 * UpdateTarget请求参数结构体
 */
export interface UpdateTargetRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件规则ID
   */
  RuleId: string
  /**
   * 事件目标ID
   */
  TargetId: string
  /**
   * 开启批量投递使能
   */
  EnableBatchDelivery?: boolean
  /**
   * 批量投递最长等待时间
   */
  BatchTimeout?: number
  /**
   * 批量投递最大事件条数
   */
  BatchEventCount?: number
}

/**
 * ListConnections返回参数结构体
 */
export interface ListConnectionsResponse {
  /**
   * 连接器信息
   */
  Connections: Array<Connection>
  /**
   * 连接器总数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPlatformProducts请求参数结构体
 */
export type ListPlatformProductsRequest = null

/**
 * PublishEvent请求参数结构体
 */
export interface PublishEventRequest {
  /**
   * 事件列表
   */
  EventList: Array<Event>
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * 描述如何数据转换

 */
export interface Transform {
  /**
   * 描述如何数据转换
   */
  OutputStructs: Array<OutputStructParam>
}

/**
 * ListPlatformEventNames请求参数结构体
 */
export interface ListPlatformEventNamesRequest {
  /**
   * 平台产品类型
   */
  ProductType: string
}

/**
 * 事件集信息
 */
export interface EventBus {
  /**
   * 更新时间
   */
  ModTime: string
  /**
   * 事件集描述，不限字符类型，200字符描述以内
   */
  Description: string
  /**
   * 创建时间
   */
  AddTime: string
  /**
   * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
   */
  EventBusName: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件集类型
   */
  Type: string
  /**
   * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: string
  /**
   * 连接器基础信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectionBriefs?: Array<ConnectionBrief>
  /**
   * 目标简要信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetBriefs?: Array<TargetBrief>
}

/**
 * ListPlatformEventPatterns返回参数结构体
 */
export interface ListPlatformEventPatternsResponse {
  /**
   * 平台产品事件匹配规则
   */
  EventPatterns?: Array<PlatformEventSummary>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRules请求参数结构体
 */
export interface ListRulesRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
   */
  OrderBy?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 分页偏移量，默认为0。
   */
  Offset?: number
  /**
   * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
   */
  Order?: string
}

/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
  /**
   * 参考：[事件模式](https://cloud.tencent.com/document/product/1359/56084)
   */
  EventPattern: string
  /**
   * 事件集ID。
   */
  EventBusId: string
  /**
   * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
   */
  RuleName: string
  /**
   * 使能开关。
   */
  Enable?: boolean
  /**
   * 事件集描述，不限字符类型，200字符描述以内
   */
  Description?: string
}

/**
 * DeleteConnection返回参数结构体
 */
export interface DeleteConnectionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTransformation返回参数结构体
 */
export interface GetTransformationResponse {
  /**
   * 转换规则列表
   */
  Transformations: Array<Transformation>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckRule返回参数结构体
 */
export interface CheckRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTarget返回参数结构体
 */
export interface UpdateTargetResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishEvent返回参数结构体
 */
export interface PublishEventResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则信息
 */
export interface Rule {
  /**
   * 状态
   */
  Status: string
  /**
   * 修改时间
   */
  ModTime: string
  /**
   * 使能开关
   */
  Enable: boolean
  /**
   * 描述
   */
  Description: string
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 创建时间
   */
  AddTime: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * Target 简要信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Targets: Array<TargetBrief>
  /**
   * rule设置的dlq规则. 可能为null
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterConfig: DeadLetterConfig
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
 * 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
 * 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 一个或者多个过滤值。
   */
  Values: Array<string>
  /**
   * 过滤键的名称。
   */
  Name: string
}

/**
 * Connection信息
 */
export interface Connection {
  /**
   * 状态
   */
  Status: string
  /**
   * 更新时间
   */
  ModTime: string
  /**
   * 使能开关
   */
  Enable: boolean
  /**
   * 描述
   */
  Description: string
  /**
   * 创建时间
   */
  AddTime: string
  /**
   * 连接器ID
   */
  ConnectionId: string
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 连接器描述
   */
  ConnectionDescription: ConnectionDescription
  /**
   * 连接器名称
   */
  ConnectionName: string
  /**
   * 类型
   */
  Type: string
}

/**
 * DeleteEventBus返回参数结构体
 */
export interface DeleteEventBusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEventBus返回参数结构体
 */
export interface CreateEventBusResponse {
  /**
   * 事件集ID
   */
  EventBusId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteConnection请求参数结构体
 */
export interface DeleteConnectionRequest {
  /**
   * 连接器ID
   */
  ConnectionId: string
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * UpdateTransformation请求参数结构体
 */
export interface UpdateTransformationRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 转换器id
   */
  TransformationId: string
  /**
   * 一个转换规则列表，当前仅限定一个
   */
  Transformations: Array<Transformation>
}

/**
 * GetPlatformEventTemplate请求参数结构体
 */
export interface GetPlatformEventTemplateRequest {
  /**
   * 平台产品事件类型
   */
  EventType: string
}

/**
 * PutEvents返回参数结构体
 */
export interface PutEventsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckTransformation请求参数结构体
 */
export interface CheckTransformationRequest {
  /**
   * 待处理的json字符串
   */
  Input: string
  /**
   * 一个转换规则列表
   */
  Transformations: Array<Transformation>
}

/**
 * UpdateConnection返回参数结构体
 */
export interface UpdateConnectionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEventBus返回参数结构体
 */
export interface UpdateEventBusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TDMQ参数详情
 */
export interface TDMQParams {
  /**
   * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
  /**
   * 集群支撑网接入点
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterEndPoint?: string
}

/**
 * GetEventBus返回参数结构体
 */
export interface GetEventBusResponse {
  /**
   * 更新时间
   */
  ModTime?: string
  /**
   * 事件集描述
   */
  Description?: string
  /**
   * 日志主题ID
   */
  ClsTopicId?: string
  /**
   * 创建时间
   */
  AddTime?: string
  /**
   * 日志集ID
   */
  ClsLogsetId?: string
  /**
   * 事件集名称
   */
  EventBusName?: string
  /**
   * 事件集ID
   */
  EventBusId?: string
  /**
   * （已废弃）事件集类型
   */
  Type?: string
  /**
   * 计费模式
   */
  PayMode?: string
  /**
   * EB日志存储时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  SaveDays?: number
  /**
   * EB日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogTopicId?: string
  /**
   * 是否开启存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableStore?: boolean
  /**
   * 消息序列，是否有序
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkMode?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogTagValue请求参数结构体
 */
export interface DescribeLogTagValueRequest {
  /**
   * 起始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 聚合字段
   */
  GroupField: string
  /**
   * 页数
   */
  Page: number
  /**
   * 每页数据大小
   */
  Limit: number
  /**
   * 筛选条件
   */
  Filter?: Array<LogFilter>
}

/**
 * 目标简要信息
 */
export interface TargetBrief {
  /**
   * 目标ID
   */
  TargetId: string
  /**
   * 目标类型
   */
  Type: string
}

/**
 * ListRules返回参数结构体
 */
export interface ListRulesResponse {
  /**
   * 事件规则信息
   */
  Rules: Array<Rule>
  /**
   * 事件规则总数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述Es规则目标
 */
export interface ESTargetParams {
  /**
   * 网络连接类型
   */
  NetMode: string
  /**
   * 索引前缀
   */
  IndexPrefix: string
  /**
   * es日志轮换粒度
   */
  RotationInterval: string
  /**
   * DTS事件配置
   */
  OutputMode: string
  /**
   * DTS索引配置
   */
  IndexSuffixMode: string
  /**
   * es模版类型
   */
  IndexTemplateType?: string
}

/**
 * GetRule返回参数结构体
 */
export interface GetRuleResponse {
  /**
   * 事件集id
   */
  EventBusId?: string
  /**
   * 事件规则id
   */
  RuleId?: string
  /**
   * 事件规则名称
   */
  RuleName?: string
  /**
   * 事件规则状态
   */
  Status?: string
  /**
   * 使能开关
   */
  Enable?: boolean
  /**
   * 事件规则描述
   */
  Description?: string
  /**
   * 事件模式
   */
  EventPattern?: string
  /**
   * 创建时间
   */
  AddTime?: string
  /**
   * 更新时间
   */
  ModTime?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateEventBus请求参数结构体
 */
export interface UpdateEventBusRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件集描述，不限字符类型，200字符描述以内
   */
  Description?: string
  /**
   * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
   */
  EventBusName?: string
  /**
   * EB日志存储时长
   */
  SaveDays?: number
  /**
   * EB日志主题ID
   */
  LogTopicId?: string
  /**
   * 是否开启存储
   */
  EnableStore?: boolean
}

/**
 * GetPlatformEventTemplate返回参数结构体
 */
export interface GetPlatformEventTemplateResponse {
  /**
   * 平台产品事件模板
   */
  EventTemplate?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云函数参数
 */
export interface SCFParams {
  /**
   * 批量投递最长等待时间
   */
  BatchTimeout?: number
  /**
   * 批量投递最大事件条数
   */
  BatchEventCount?: number
  /**
   * 开启批量投递使能
   */
  EnableBatchDelivery?: boolean
}

/**
 * rule对应的dlq配置
 */
export interface DeadLetterConfig {
  /**
   * 支持dlq、丢弃、忽略错误继续传递三种模式, 分别对应: DLQ,DROP,IGNORE_ERROR
   */
  DisposeMethod: string
  /**
   * 设置了DLQ方式后,此选项必填. 错误消息会被投递到对应的kafka topic中
注意：此字段可能返回 null，表示取不到有效值。
   */
  CkafkaDeliveryParams?: CkafkaDeliveryParams
}

/**
 * ListConnections请求参数结构体
 */
export interface ListConnectionsRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 根据哪个字段进行返回结果排序，目前支持如下以下字段：AddTime, ModTime
   */
  OrderBy?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
   */
  Order?: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * 描述如何切分数据
 */
export interface TextParams {
  /**
   * 逗号、| 、制表符、空格、换行符、%、#，限制长度为 1。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Separator?: string
  /**
   * 填写正则表达式：长度128
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regex?: string
}

/**
 * SearchLog请求参数结构体
 */
export interface SearchLogRequest {
  /**
   * 起始时间unix 毫秒时间戳
   */
  StartTime: number
  /**
   * 结束时间unix 毫秒时间戳
   */
  EndTime: number
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 页码
   */
  Page: number
  /**
   * 每页数据大小
   */
  Limit: number
  /**
   * 筛选条件
   */
  Filter?: Array<LogFilter>
  /**
   * 排序数组
   */
  OrderFields?: Array<string>
  /**
   * 排序方式，asc 从旧到新，desc 从新到旧
   */
  OrderBy?: string
}

/**
 * 用来描述需要投递到kafka topic的参数
 */
export interface CkafkaDeliveryParams {
  /**
   * ckafka topic name
   */
  TopicName: string
  /**
   * ckafka资源qcs六段式
   */
  ResourceDescription: string
}

/**
 * CreateConnection请求参数结构体
 */
export interface CreateConnectionRequest {
  /**
   * 连接器描述
   */
  ConnectionDescription: ConnectionDescription
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 连接器名称
   */
  ConnectionName: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 使能开关
   */
  Enable?: boolean
  /**
   * 类型
   */
  Type?: string
}

/**
 * ListPlatformEventPatterns请求参数结构体
 */
export interface ListPlatformEventPatternsRequest {
  /**
   * 平台产品类型
   */
  ProductType: string
}

/**
 * GetTransformation请求参数结构体
 */
export interface GetTransformationRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 转换器id
   */
  TransformationId: string
}

/**
 * 连接器基础信息
 */
export interface ConnectionBrief {
  /**
   * 连接器类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 连接器状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * PutEvents请求参数结构体
 */
export interface PutEventsRequest {
  /**
   * 事件列表
   */
  EventList: Array<Event>
  /**
   * 事件集ID
   */
  EventBusId: string
}

/**
 * TargetDescription描述
 */
export interface TargetDescription {
  /**
   * QCS资源六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606)
   */
  ResourceDescription: string
  /**
   * 云函数参数
   */
  SCFParams?: SCFParams
  /**
   * Ckafka参数
   */
  CkafkaTargetParams?: CkafkaTargetParams
  /**
   * ElasticSearch参数
   */
  ESTargetParams?: ESTargetParams
}

/**
 * DeleteTarget请求参数结构体
 */
export interface DeleteTargetRequest {
  /**
   * 事件集ID
   */
  EventBusId: string
  /**
   * 事件目标ID
   */
  TargetId: string
  /**
   * 事件规则ID
   */
  RuleId: string
}

/**
 * DescribeLogTagValue返回参数结构体
 */
export interface DescribeLogTagValueResponse {
  /**
   * 索引检索维度值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<string>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPlatformEventNames返回参数结构体
 */
export interface ListPlatformEventNamesResponse {
  /**
   * 平台产品列表
   */
  EventNames?: Array<PlatformEventDetail>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
