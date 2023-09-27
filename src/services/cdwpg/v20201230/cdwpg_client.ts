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
  ResourceSpecNew,
  DestroyInstanceByApiResponse,
  CreateInstanceByApiRequest,
  CBSSpec,
  CreateInstanceByApiResponse,
  Tag,
  ChargeProperties,
  DestroyInstanceByApiRequest,
} from "./cdwpg_models"

/**
 * cdwpg client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cdwpg.tencentcloudapi.com", "2020-12-30", clientConfig)
  }

  /**
   * 销毁集群
   */
  async DestroyInstanceByApi(
    req: DestroyInstanceByApiRequest,
    cb?: (error: string, rep: DestroyInstanceByApiResponse) => void
  ): Promise<DestroyInstanceByApiResponse> {
    return this.request("DestroyInstanceByApi", req, cb)
  }

  /**
   * 创建集群
   */
  async CreateInstanceByApi(
    req: CreateInstanceByApiRequest,
    cb?: (error: string, rep: CreateInstanceByApiResponse) => void
  ): Promise<CreateInstanceByApiResponse> {
    return this.request("CreateInstanceByApi", req, cb)
  }
}
