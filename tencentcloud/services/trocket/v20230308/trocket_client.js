"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * trocket client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("trocket.tencentcloudapi.com", "2023-03-08", clientConfig);
    }
    /**
     * 修改主题属性
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 添加角色
     */
    async CreateRole(req, cb) {
        return this.request("CreateRole", req, cb);
    }
    /**
     * 导入消费者组列表
     */
    async ImportSourceClusterConsumerGroups(req, cb) {
        return this.request("ImportSourceClusterConsumerGroups", req, cb);
    }
    /**
     * 删除实例
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 创建消费组
     */
    async CreateConsumerGroup(req, cb) {
        return this.request("CreateConsumerGroup", req, cb);
    }
    /**
     * 查询角色列表，Filter参数使用说明如下：

1. RoleName，角色名称模糊搜索
     */
    async DescribeRoleList(req, cb) {
        return this.request("DescribeRoleList", req, cb);
    }
    /**
     * 运营端查询topicStata
     */
    async DescribeTopicStatsOp(req, cb) {
        return this.request("DescribeTopicStatsOp", req, cb);
    }
    /**
     * 删除消费组
     */
    async DeleteConsumerGroup(req, cb) {
        return this.request("DeleteConsumerGroup", req, cb);
    }
    /**
     * 修改消费组属性
     */
    async ModifyConsumerGroup(req, cb) {
        return this.request("ModifyConsumerGroup", req, cb);
    }
    /**
     * 删除角色
     */
    async DeleteRole(req, cb) {
        return this.request("DeleteRole", req, cb);
    }
    /**
     * 查询消费组详情
     */
    async DescribeConsumerGroup(req, cb) {
        return this.request("DescribeConsumerGroup", req, cb);
    }
    /**
     * 创建主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 购买新实例
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 查询实例信息
     */
    async DescribeInstance(req, cb) {
        return this.request("DescribeInstance", req, cb);
    }
    /**
     * 删除主题
     */
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    /**
     * 导入topic列表
     */
    async ImportSourceClusterTopics(req, cb) {
        return this.request("ImportSourceClusterTopics", req, cb);
    }
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    async DescribeInstanceList(req, cb) {
        return this.request("DescribeInstanceList", req, cb);
    }
    /**
     * 获取消费组列表，Filter参数使用说明如下：

1. ConsumerGroupName，名称模糊查询
2. ConsumeMessageOrderly，投递顺序性。"true":顺序投递；"false":并发投递
     */
    async DescribeConsumerGroupList(req, cb) {
        return this.request("DescribeConsumerGroupList", req, cb);
    }
    /**
     * 修改角色
     */
    async ModifyRole(req, cb) {
        return this.request("ModifyRole", req, cb);
    }
    /**
     * 查询主题详情，Offset和Limit参数是指订阅该主题的消费组查询分页参数，Filter参数使用说明如下：

ConsumerGroup，消费组名称过滤
     */
    async DescribeTopic(req, cb) {
        return this.request("DescribeTopic", req, cb);
    }
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    async DescribeTopicList(req, cb) {
        return this.request("DescribeTopicList", req, cb);
    }
    /**
     * 修改实例属性
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
}
exports.Client = Client;
