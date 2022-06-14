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
 * ResetPassword请求参数结构体
 */
export interface ResetPasswordRequest {
  /**
   * 用户ID
   */
  UserId: string

  /**
   * 用户目录ID
   */
  UserStoreId: string
}

/**
 * ResetPassword返回参数结构体
 */
export interface ResetPasswordResponse {
  /**
   * 重置后的用户密码
   */
  Password: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
