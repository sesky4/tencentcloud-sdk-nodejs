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
  NetworkStatus,
  InquirePriceRunInstancesResponse,
  TerminateInstancesRequest,
  DescribeServiceLoginSettingsResponse,
  DescribeInstanceNetworkStatusResponse,
  Instance,
  TerminateInstancesResponse,
  DescribeRegionsRequest,
  LoginSetting,
  Price,
  RegionInfo,
  DescribeScenesResponse,
  DescribeApplicationsRequest,
  RunInstancesRequest,
  DescribeInstancesResponse,
  SystemDisk,
  RunInstancesResponse,
  DescribeInstancesRequest,
  Filter,
  DescribeScenesRequest,
  DescribeRegionsResponse,
  InquirePriceRunInstancesRequest,
  DescribeServiceLoginSettingsRequest,
  ApplicationInfo,
  DescribeApplicationsResponse,
  ItemPrice,
  DescribeInstanceNetworkStatusRequest,
  LoginService,
  SceneInfo,
} from "./hai_models"

/**
 * hai client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("hai.tencentcloudapi.com", "2023-08-12", clientConfig)
  }

  /**
   * 查询服务登录配置
   */
  async DescribeServiceLoginSettings(
    req: DescribeServiceLoginSettingsRequest,
    cb?: (error: string, rep: DescribeServiceLoginSettingsResponse) => void
  ): Promise<DescribeServiceLoginSettingsResponse> {
    return this.request("DescribeServiceLoginSettings", req, cb)
  }

  /**
   * 查询应用
   */
  async DescribeApplications(
    req: DescribeApplicationsRequest,
    cb?: (error: string, rep: DescribeApplicationsResponse) => void
  ): Promise<DescribeApplicationsResponse> {
    return this.request("DescribeApplications", req, cb)
  }

  /**
   * 查询场景
   */
  async DescribeScenes(
    req: DescribeScenesRequest,
    cb?: (error: string, rep: DescribeScenesResponse) => void
  ): Promise<DescribeScenesResponse> {
    return this.request("DescribeScenes", req, cb)
  }

  /**
   * 查询地域列表
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 本接口 (RunInstances) 用于创建一个或多个指定配置的实例。
   */
  async RunInstances(
    req: RunInstancesRequest,
    cb?: (error: string, rep: RunInstancesResponse) => void
  ): Promise<RunInstancesResponse> {
    return this.request("RunInstances", req, cb)
  }

  /**
   * 查询实例的网络配置及消耗情况
   */
  async DescribeInstanceNetworkStatus(
    req: DescribeInstanceNetworkStatusRequest,
    cb?: (error: string, rep: DescribeInstanceNetworkStatusResponse) => void
  ): Promise<DescribeInstanceNetworkStatusResponse> {
    return this.request("DescribeInstanceNetworkStatus", req, cb)
  }

  /**
   * 查询实例
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 本接口 (InquirePriceRunInstances) 用于实例询价。
   */
  async InquirePriceRunInstances(
    req: InquirePriceRunInstancesRequest,
    cb?: (error: string, rep: InquirePriceRunInstancesResponse) => void
  ): Promise<InquirePriceRunInstancesResponse> {
    return this.request("InquirePriceRunInstances", req, cb)
  }

  /**
   * 本接口 (TerminateInstances) 用于主动退还实例。
   */
  async TerminateInstances(
    req: TerminateInstancesRequest,
    cb?: (error: string, rep: TerminateInstancesResponse) => void
  ): Promise<TerminateInstancesResponse> {
    return this.request("TerminateInstances", req, cb)
  }
}
