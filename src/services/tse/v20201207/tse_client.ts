/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ListCloudNativeAPIGatewayResult,
  DescribeCloudNativeAPIGatewayResponse,
  CreateCloudNativeAPIGatewayServiceResponse,
  DeleteCloudNativeAPIGatewayRouteRateLimitResponse,
  ApolloEnvParam,
  DescribeCloudNativeAPIGatewayServiceRateLimitRequest,
  CreateCloudNativeAPIGatewayRequest,
  CloudNativeAPIGatewayStrategyCronScalerConfig,
  DescribeCloudNativeAPIGatewayNodesRequest,
  ModifyCloudNativeAPIGatewayRouteRequest,
  DeleteNativeGatewayServerGroupResponse,
  CloudNativeAPIGatewayStrategy,
  DescribeSREInstanceAccessAddressResponse,
  ModifyCloudNativeAPIGatewayCanaryRuleResponse,
  CloudNativeAPIGatewayNodeConfig,
  CreateNativeGatewayServerGroupRequest,
  EngineRegionInfo,
  DeleteCloudNativeAPIGatewayResult,
  QpsThreshold,
  ModifyCloudNativeAPIGatewayServiceResponse,
  DescribeCloudNativeAPIGatewayNodesResponse,
  CreateCloudNativeAPIGatewayResponse,
  DeleteCloudNativeAPIGatewayCanaryRuleRequest,
  GatewayInstanceSchemeAndPorts,
  ModifyCloudNativeAPIGatewayRouteRateLimitRequest,
  NacosServerInterface,
  DescribeNacosReplicasRequest,
  CreateCloudNativeAPIGatewayServiceRequest,
  CloudNativeAPIGatewayBalancedService,
  ExternalRedis,
  EnvAddressInfo,
  InstanceTagInfo,
  DescribeCloudNativeAPIGatewayServicesRequest,
  NacosReplica,
  UpdateEngineInternetAccessRequest,
  CreateCloudNativeAPIGatewayCanaryRuleResponse,
  CreateCloudNativeAPIGatewayRouteRequest,
  KVPair,
  DeleteEngineResponse,
  DescribeCloudNativeAPIGatewayRoutesResponse,
  DescribeZookeeperReplicasRequest,
  DeleteCloudNativeAPIGatewayServiceResponse,
  InstancePort,
  DescribeCloudNativeAPIGatewayResult,
  DeleteCloudNativeAPIGatewayRouteResponse,
  DescribeCloudNativeAPIGatewayPortsResponse,
  CreateCloudNativeAPIGatewayRouteRateLimitRequest,
  DeleteNativeGatewayServerGroupRequest,
  ModifyCloudNativeAPIGatewayRouteResponse,
  DeleteNativeGatewayServerGroupResult,
  ServiceGovernanceInfo,
  DescribeNacosReplicasResponse,
  DeleteCloudNativeAPIGatewayServiceRateLimitRequest,
  CloudNativeAPIGatewayVpcConfig,
  CloudAPIGatewayCanaryRuleList,
  KongRoutePreview,
  CloudNativeAPIGatewayRateLimitDetail,
  CreateCloudNativeAPIGatewayRouteResponse,
  DescribeInstanceRegionInfo,
  KongTarget,
  DescribeCloudNativeAPIGatewaysRequest,
  DescribeNacosServerInterfacesResponse,
  KVMapping,
  RateLimitResponse,
  DescribeCloudNativeAPIGatewayServiceRateLimitResponse,
  DeleteCloudNativeAPIGatewayServiceRequest,
  CloudNativeAPIGatewayStrategyCronScalerConfigParam,
  EnvInfo,
  ModifyNativeGatewayServerGroupRequest,
  DescribeCloudNativeAPIGatewayRouteRateLimitRequest,
  DescribeOneCloudNativeAPIGatewayServiceRequest,
  CreateCloudNativeAPIGatewayRouteRateLimitResponse,
  DescribeCloudNativeAPIGatewaysResponse,
  UpdateEngineInternetAccessResponse,
  UpdateCloudNativeAPIGatewaySpecRequest,
  DescribeCloudNativeAPIGatewayServicesResponse,
  DeleteCloudNativeAPIGatewayRouteRateLimitRequest,
  ListFilter,
  DeleteEngineRequest,
  ZookeeperReplica,
  ModifyCloudNativeAPIGatewayServiceRateLimitRequest,
  DescribeSREInstanceAccessAddressRequest,
  DescribeCloudNativeAPIGatewayCanaryRulesResponse,
  SREInstance,
  NativeGatewayServerGroup,
  DeleteCloudNativeAPIGatewayServiceRateLimitResponse,
  CloudNativeAPIGatewayStrategyAutoScalerConfigMetric,
  CloudNativeAPIGatewayNode,
  UpdateCloudNativeAPIGatewaySpecResponse,
  DescribeGatewayInstancePortResult,
  DescribeZookeeperServerInterfacesResponse,
  DescribeNativeGatewayServerGroupsRequest,
  DeleteCloudNativeAPIGatewayRequest,
  EngineAdmin,
  PolarisLimiterAddress,
  DescribeOneCloudNativeAPIGatewayServiceResponse,
  ModifyCloudNativeAPIGatewayServiceRequest,
  DeleteCloudNativeAPIGatewayResponse,
  KongServices,
  ModifyCloudNativeAPIGatewayResponse,
  DescribeZookeeperServerInterfacesRequest,
  DescribeCloudNativeAPIGatewayRouteRateLimitResponse,
  UpdateCloudNativeAPIGatewayResult,
  DescribeCloudNativeAPIGatewayRequest,
  DeleteCloudNativeAPIGatewayCanaryRuleResponse,
  CreateCloudNativeAPIGatewayCanaryRuleRequest,
  DeleteCloudNativeAPIGatewayRouteRequest,
  InternetConfig,
  DescribeCloudNativeAPIGatewayRoutesRequest,
  CreateEngineResponse,
  CreateCloudNativeAPIGatewayServiceRateLimitResponse,
  DescribeCloudNativeAPIGatewayNodesResult,
  CloudNativeAPIGatewayCanaryRule,
  ModifyCloudNativeAPIGatewayServiceRateLimitResponse,
  CloudNativeAPIGatewayStrategyAutoScalerConfig,
  DescribeNacosServerInterfacesRequest,
  CloudNativeAPIGatewayCanaryRuleCondition,
  DescribeSREInstancesResponse,
  ZookeeperServerInterface,
  CreateCloudNativeAPIGatewayServerGroupResult,
  BoundK8SInfo,
  KongUpstreamInfo,
  DescribeSREInstancesRequest,
  CreateNativeGatewayServerGroupResponse,
  CreateCloudNativeAPIGatewayServiceRateLimitRequest,
  DescribeZookeeperReplicasResponse,
  NativeGatewayServerGroups,
  CreateEngineRequest,
  ModifyCloudNativeAPIGatewayCanaryRuleRequest,
  VpcInfo,
  KongServiceRouteList,
  CreateCloudNativeAPIGatewayResult,
  ModifyCloudNativeAPIGatewayRequest,
  KongServicePreview,
  ModifyCloudNativeAPIGatewayRouteRateLimitResponse,
  Filter,
  DescribeCloudNativeAPIGatewayCanaryRulesRequest,
  DescribeNativeGatewayServerGroupsResponse,
  DescribeCloudNativeAPIGatewayPortsRequest,
  ModifyNativeGatewayServerGroupResponse,
  KongServiceDetail,
} from "./tse_models"

/**
 * tse client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tse.tencentcloudapi.com", "2020-12-07", clientConfig)
  }

  /**
   * 查询Nacos类型引擎实例副本信息
   */
  async DescribeNacosReplicas(
    req: DescribeNacosReplicasRequest,
    cb?: (error: string, rep: DescribeNacosReplicasResponse) => void
  ): Promise<DescribeNacosReplicasResponse> {
    return this.request("DescribeNacosReplicas", req, cb)
  }

  /**
   * 修改云原生API网关实例分组基础信息
   */
  async ModifyNativeGatewayServerGroup(
    req: ModifyNativeGatewayServerGroupRequest,
    cb?: (error: string, rep: ModifyNativeGatewayServerGroupResponse) => void
  ): Promise<ModifyNativeGatewayServerGroupResponse> {
    return this.request("ModifyNativeGatewayServerGroup", req, cb)
  }

  /**
   * 删除云原生网关的限流插件(服务)
   */
  async DeleteCloudNativeAPIGatewayServiceRateLimit(
    req: DeleteCloudNativeAPIGatewayServiceRateLimitRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceRateLimitResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayServiceRateLimitResponse> {
    return this.request("DeleteCloudNativeAPIGatewayServiceRateLimit", req, cb)
  }

  /**
   * 查询zookeeper服务接口列表
   */
  async DescribeZookeeperServerInterfaces(
    req: DescribeZookeeperServerInterfacesRequest,
    cb?: (error: string, rep: DescribeZookeeperServerInterfacesResponse) => void
  ): Promise<DescribeZookeeperServerInterfacesResponse> {
    return this.request("DescribeZookeeperServerInterfaces", req, cb)
  }

  /**
   * 获取云原生网关服务详情
   */
  async DescribeOneCloudNativeAPIGatewayService(
    req: DescribeOneCloudNativeAPIGatewayServiceRequest,
    cb?: (error: string, rep: DescribeOneCloudNativeAPIGatewayServiceResponse) => void
  ): Promise<DescribeOneCloudNativeAPIGatewayServiceResponse> {
    return this.request("DescribeOneCloudNativeAPIGatewayService", req, cb)
  }

  /**
   * 修改云原生网关限流插件(服务)
   */
  async ModifyCloudNativeAPIGatewayServiceRateLimit(
    req: ModifyCloudNativeAPIGatewayServiceRateLimitRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceRateLimitResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayServiceRateLimitResponse> {
    return this.request("ModifyCloudNativeAPIGatewayServiceRateLimit", req, cb)
  }

  /**
   * 创建引擎实例
   */
  async CreateEngine(
    req: CreateEngineRequest,
    cb?: (error: string, rep: CreateEngineResponse) => void
  ): Promise<CreateEngineResponse> {
    return this.request("CreateEngine", req, cb)
  }

  /**
   * 修改云原生网关的灰度规则
   */
  async ModifyCloudNativeAPIGatewayCanaryRule(
    req: ModifyCloudNativeAPIGatewayCanaryRuleRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayCanaryRuleResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayCanaryRuleResponse> {
    return this.request("ModifyCloudNativeAPIGatewayCanaryRule", req, cb)
  }

  /**
   * 删除云原生网关服务
   */
  async DeleteCloudNativeAPIGatewayService(
    req: DeleteCloudNativeAPIGatewayServiceRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayServiceResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayServiceResponse> {
    return this.request("DeleteCloudNativeAPIGatewayService", req, cb)
  }

  /**
   * 创建云原生网关服务
   */
  async CreateCloudNativeAPIGatewayService(
    req: CreateCloudNativeAPIGatewayServiceRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayServiceResponse> {
    return this.request("CreateCloudNativeAPIGatewayService", req, cb)
  }

  /**
   * 查询云原生网关路由列表
   */
  async DescribeCloudNativeAPIGatewayRoutes(
    req: DescribeCloudNativeAPIGatewayRoutesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRoutesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayRoutesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayRoutes", req, cb)
  }

  /**
   * 获取云原生API网关实例信息
   */
  async DescribeCloudNativeAPIGateway(
    req: DescribeCloudNativeAPIGatewayRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayResponse> {
    return this.request("DescribeCloudNativeAPIGateway", req, cb)
  }

  /**
   * 获取云原生API网关实例端口信息
   */
  async DescribeCloudNativeAPIGatewayPorts(
    req: DescribeCloudNativeAPIGatewayPortsRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayPortsResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayPortsResponse> {
    return this.request("DescribeCloudNativeAPIGatewayPorts", req, cb)
  }

  /**
   * 删除云原生网关路由
   */
  async DeleteCloudNativeAPIGatewayRoute(
    req: DeleteCloudNativeAPIGatewayRouteRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayRouteResponse> {
    return this.request("DeleteCloudNativeAPIGatewayRoute", req, cb)
  }

  /**
   * 删除引擎实例
   */
  async DeleteEngine(
    req: DeleteEngineRequest,
    cb?: (error: string, rep: DeleteEngineResponse) => void
  ): Promise<DeleteEngineResponse> {
    return this.request("DeleteEngine", req, cb)
  }

  /**
   * 删除云原生网关的灰度规则
   */
  async DeleteCloudNativeAPIGatewayCanaryRule(
    req: DeleteCloudNativeAPIGatewayCanaryRuleRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayCanaryRuleResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayCanaryRuleResponse> {
    return this.request("DeleteCloudNativeAPIGatewayCanaryRule", req, cb)
  }

  /**
   * 获取云原生API网关实例列表
   */
  async DescribeCloudNativeAPIGateways(
    req: DescribeCloudNativeAPIGatewaysRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewaysResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewaysResponse> {
    return this.request("DescribeCloudNativeAPIGateways", req, cb)
  }

  /**
   * 查询云原生网关服务列表
   */
  async DescribeCloudNativeAPIGatewayServices(
    req: DescribeCloudNativeAPIGatewayServicesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServicesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayServicesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayServices", req, cb)
  }

  /**
   * 修改云原生网关限流插件(路由)
   */
  async ModifyCloudNativeAPIGatewayRouteRateLimit(
    req: ModifyCloudNativeAPIGatewayRouteRateLimitRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayRouteRateLimitResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayRouteRateLimitResponse> {
    return this.request("ModifyCloudNativeAPIGatewayRouteRateLimit", req, cb)
  }

  /**
   * 查询nacos服务接口列表
   */
  async DescribeNacosServerInterfaces(
    req: DescribeNacosServerInterfacesRequest,
    cb?: (error: string, rep: DescribeNacosServerInterfacesResponse) => void
  ): Promise<DescribeNacosServerInterfacesResponse> {
    return this.request("DescribeNacosServerInterfaces", req, cb)
  }

  /**
   * 修改云原生API网关实例的节点规格信息，比如节点扩缩容或者升降配
   */
  async UpdateCloudNativeAPIGatewaySpec(
    req: UpdateCloudNativeAPIGatewaySpecRequest,
    cb?: (error: string, rep: UpdateCloudNativeAPIGatewaySpecResponse) => void
  ): Promise<UpdateCloudNativeAPIGatewaySpecResponse> {
    return this.request("UpdateCloudNativeAPIGatewaySpec", req, cb)
  }

  /**
   * 查询Zookeeper类型注册引擎实例副本信息
   */
  async DescribeZookeeperReplicas(
    req: DescribeZookeeperReplicasRequest,
    cb?: (error: string, rep: DescribeZookeeperReplicasResponse) => void
  ): Promise<DescribeZookeeperReplicasResponse> {
    return this.request("DescribeZookeeperReplicas", req, cb)
  }

  /**
   * 创建云原生API网关实例
   */
  async CreateCloudNativeAPIGateway(
    req: CreateCloudNativeAPIGatewayRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayResponse> {
    return this.request("CreateCloudNativeAPIGateway", req, cb)
  }

  /**
   * 用于查询引擎实例列表
   */
  async DescribeSREInstances(
    req: DescribeSREInstancesRequest,
    cb?: (error: string, rep: DescribeSREInstancesResponse) => void
  ): Promise<DescribeSREInstancesResponse> {
    return this.request("DescribeSREInstances", req, cb)
  }

  /**
   * 查询云原生网关的限流插件(服务)
   */
  async DescribeCloudNativeAPIGatewayServiceRateLimit(
    req: DescribeCloudNativeAPIGatewayServiceRateLimitRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayServiceRateLimitResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayServiceRateLimitResponse> {
    return this.request("DescribeCloudNativeAPIGatewayServiceRateLimit", req, cb)
  }

  /**
   * 查询云原生网关的限流插件(路由)
   */
  async DescribeCloudNativeAPIGatewayRouteRateLimit(
    req: DescribeCloudNativeAPIGatewayRouteRateLimitRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayRouteRateLimitResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayRouteRateLimitResponse> {
    return this.request("DescribeCloudNativeAPIGatewayRouteRateLimit", req, cb)
  }

  /**
   * 修改云原生网关服务
   */
  async ModifyCloudNativeAPIGatewayService(
    req: ModifyCloudNativeAPIGatewayServiceRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayServiceResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayServiceResponse> {
    return this.request("ModifyCloudNativeAPIGatewayService", req, cb)
  }

  /**
   * 获取云原生网关节点列表
   */
  async DescribeCloudNativeAPIGatewayNodes(
    req: DescribeCloudNativeAPIGatewayNodesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayNodesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayNodesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayNodes", req, cb)
  }

  /**
   * 创建云原生网关的灰度规则
   */
  async CreateCloudNativeAPIGatewayCanaryRule(
    req: CreateCloudNativeAPIGatewayCanaryRuleRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayCanaryRuleResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayCanaryRuleResponse> {
    return this.request("CreateCloudNativeAPIGatewayCanaryRule", req, cb)
  }

  /**
   * 修改引擎公网访问配置
   */
  async UpdateEngineInternetAccess(
    req: UpdateEngineInternetAccessRequest,
    cb?: (error: string, rep: UpdateEngineInternetAccessResponse) => void
  ): Promise<UpdateEngineInternetAccessResponse> {
    return this.request("UpdateEngineInternetAccess", req, cb)
  }

  /**
   * 修改云原生API网关实例基础信息
   */
  async ModifyCloudNativeAPIGateway(
    req: ModifyCloudNativeAPIGatewayRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayResponse> {
    return this.request("ModifyCloudNativeAPIGateway", req, cb)
  }

  /**
   * 创建云原生网关限流插件(服务)
   */
  async CreateCloudNativeAPIGatewayServiceRateLimit(
    req: CreateCloudNativeAPIGatewayServiceRateLimitRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayServiceRateLimitResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayServiceRateLimitResponse> {
    return this.request("CreateCloudNativeAPIGatewayServiceRateLimit", req, cb)
  }

  /**
   * 删除云原生API网关实例
   */
  async DeleteCloudNativeAPIGateway(
    req: DeleteCloudNativeAPIGatewayRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayResponse> {
    return this.request("DeleteCloudNativeAPIGateway", req, cb)
  }

  /**
   * 创建云原生网关路由
   */
  async CreateCloudNativeAPIGatewayRoute(
    req: CreateCloudNativeAPIGatewayRouteRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayRouteResponse> {
    return this.request("CreateCloudNativeAPIGatewayRoute", req, cb)
  }

  /**
   * 创建云原生网关引擎分组
   */
  async CreateNativeGatewayServerGroup(
    req: CreateNativeGatewayServerGroupRequest,
    cb?: (error: string, rep: CreateNativeGatewayServerGroupResponse) => void
  ): Promise<CreateNativeGatewayServerGroupResponse> {
    return this.request("CreateNativeGatewayServerGroup", req, cb)
  }

  /**
   * 删除云原生网关的限流插件(路由)
   */
  async DeleteCloudNativeAPIGatewayRouteRateLimit(
    req: DeleteCloudNativeAPIGatewayRouteRateLimitRequest,
    cb?: (error: string, rep: DeleteCloudNativeAPIGatewayRouteRateLimitResponse) => void
  ): Promise<DeleteCloudNativeAPIGatewayRouteRateLimitResponse> {
    return this.request("DeleteCloudNativeAPIGatewayRouteRateLimit", req, cb)
  }

  /**
   * 创建云原生网关限流插件(路由)
   */
  async CreateCloudNativeAPIGatewayRouteRateLimit(
    req: CreateCloudNativeAPIGatewayRouteRateLimitRequest,
    cb?: (error: string, rep: CreateCloudNativeAPIGatewayRouteRateLimitResponse) => void
  ): Promise<CreateCloudNativeAPIGatewayRouteRateLimitResponse> {
    return this.request("CreateCloudNativeAPIGatewayRouteRateLimit", req, cb)
  }

  /**
   * 查询云原生网关分组信息
   */
  async DescribeNativeGatewayServerGroups(
    req: DescribeNativeGatewayServerGroupsRequest,
    cb?: (error: string, rep: DescribeNativeGatewayServerGroupsResponse) => void
  ): Promise<DescribeNativeGatewayServerGroupsResponse> {
    return this.request("DescribeNativeGatewayServerGroups", req, cb)
  }

  /**
   * 修改云原生网关路由
   */
  async ModifyCloudNativeAPIGatewayRoute(
    req: ModifyCloudNativeAPIGatewayRouteRequest,
    cb?: (error: string, rep: ModifyCloudNativeAPIGatewayRouteResponse) => void
  ): Promise<ModifyCloudNativeAPIGatewayRouteResponse> {
    return this.request("ModifyCloudNativeAPIGatewayRoute", req, cb)
  }

  /**
   * 删除网关实例分组
   */
  async DeleteNativeGatewayServerGroup(
    req: DeleteNativeGatewayServerGroupRequest,
    cb?: (error: string, rep: DeleteNativeGatewayServerGroupResponse) => void
  ): Promise<DeleteNativeGatewayServerGroupResponse> {
    return this.request("DeleteNativeGatewayServerGroup", req, cb)
  }

  /**
   * 查询云原生网关灰度规则列表
   */
  async DescribeCloudNativeAPIGatewayCanaryRules(
    req: DescribeCloudNativeAPIGatewayCanaryRulesRequest,
    cb?: (error: string, rep: DescribeCloudNativeAPIGatewayCanaryRulesResponse) => void
  ): Promise<DescribeCloudNativeAPIGatewayCanaryRulesResponse> {
    return this.request("DescribeCloudNativeAPIGatewayCanaryRules", req, cb)
  }

  /**
   * 查询引擎实例访问地址
   */
  async DescribeSREInstanceAccessAddress(
    req: DescribeSREInstanceAccessAddressRequest,
    cb?: (error: string, rep: DescribeSREInstanceAccessAddressResponse) => void
  ): Promise<DescribeSREInstanceAccessAddressResponse> {
    return this.request("DescribeSREInstanceAccessAddress", req, cb)
  }
}
