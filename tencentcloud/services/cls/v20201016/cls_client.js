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
 * cls client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cls.tencentcloudapi.com", "2020-10-16", clientConfig);
    }
    /**
     * 创建机器组
     */
    async CreateMachineGroup(req, cb) {
        return this.request("CreateMachineGroup", req, cb);
    }
    /**
     * 用于删除机器组信息
     */
    async DeleteMachineGroupInfo(req, cb) {
        return this.request("DeleteMachineGroupInfo", req, cb);
    }
    /**
     * 本接口用于获取告警任务历史
     */
    async GetAlarmLog(req, cb) {
        return this.request("GetAlarmLog", req, cb);
    }
    /**
     * ## 提示
为了保障您日志数据的可靠性以及更高效地使用日志服务，建议您使用CLS优化后的接口[上传结构化日志](https://cloud.tencent.com/document/product/614/16873)。

同时我们给此接口专门优化定制了多个语言版本的SDK供您选择，SDK提供统一的异步发送、资源控制、自动重试、优雅关闭、感知上报等功能，使上报日志功能更完善，详情请参考[SDK采集](https://cloud.tencent.com/document/product/614/67157)。

同时云API上传日志接口也支持同步上传日志数据，如果您选择继续使用此接口请参考下文。

## 功能描述

本接口用于将日志写入到指定的日志主题。

日志服务提供以下两种模式：

#### 负载均衡模式

系统根据当前日志主题下所有可读写的分区，遵循负载均衡原则自动分配写入的目标分区。该模式适合消费不保序的场景。

#### 哈希路由模式

系统根据携带的哈希值（X-CLS-HashKey）将数据写入到符合范围要求的目标分区。例如，可以将某个日志源端通过 hashkey 与某个主题分区强绑定，这样可以保证数据在该分区上写入和消费是严格保序的。

                 

#### 输入参数(pb二进制流，位于body中)

| 字段名       | 类型    | 位置 | 必须 | 含义                                                         |
| ------------ | ------- | ---- | ---- | ------------------------------------------------------------ |
| logGroupList | message | pb   | 是   | logGroup 列表，封装好的日志组列表内容，建议 logGroup 数量不要超过5个 |

LogGroup 说明：

| 字段名      | 是否必选 | 含义                                                         |
| ----------- | -------- | ------------------------------------------------------------ |
| logs        | 是       | 日志数组，表示有多个 Log 组成的集合，一个 Log 表示一条日志，一个 LogGroup 中 Log 个数不能超过10000 |
| contextFlow | 否       | LogGroup 的唯一ID，需要使用上下文功能时传入。格式："{上下文ID}-{LogGroupID}"。<br>上下文ID：唯一标识一个上下文（连续滚动的一系列日志文件，或者是需要保序的一系列日志），16进制64位整型字符串。<br>LogGroupID：连续递增的一串整型，16进制64位整型字符串。样例："102700A66102516A-59F59"。                        |
| filename    | 否       | 日志文件名                                                   |
| source      | 否       | 日志来源，一般使用机器 IP 作为标识                           |
| logTags     | 否       | 日志的标签列表                                               |

Log 说明：

| 字段名   | 是否必选 | 含义                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| time     | 是       | 日志时间（Unix 格式时间戳），支持秒、毫秒，建议采用毫秒      |
| contents | 否       | key-value 格式的日志内容，表示一条日志里的多个 key-value 组合 |

Content 说明：

| 字段名 | 是否必选 | 含义                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| key    | 是       | 单条日志里某个字段组的 key 值，不能以`_`开头                 |
| value  | 是       | 单条日志某个字段组的 value 值，单条日志 value 不能超过1MB，LogGroup 中所有 value 总和不能超过5MB |

LogTag 说明：

| 字段名 | 是否必选 | 含义                             |
| ------ | -------- | -------------------------------- |
| key    | 是       | 自定义的标签 key                 |
| value  | 是       | 自定义的标签 key 对应的 value 值 |

## PB 编译示例

本示例将说明如何使用官方 protoc 编译工具将 PB 描述文件 编译生成为 C++ 语言可调用的上传日志接口。

> ?目前 protoc 官方支持 Java、C++、Python 等语言的编译，详情请参见 [protoc](https://github.com/protocolbuffers/protobuf)。

#### 1. 安装 Protocol Buffer

下载 [Protocol Buffer](https://main.qcloudimg.com/raw/d7810aaf8b3073fbbc9d4049c21532aa/protobuf-2.6.1.tar.gz) ，解压并安装。示例版本为 protobuf 2.6.1，环境为 Centos 7.3 系统。 解压`protobuf-2.6.1.tar.gz`压缩包至`/usr/local`目录并进入该目录，执行命令如下：

```
tar -zxvf protobuf-2.6.1.tar.gz -C /usr/local/ && cd /usr/local/protobuf-2.6.1
```

开始编译和安装，配置环境变量，执行命令如下：

```
[root@VM_0_8_centos protobuf-2.6.1]# ./configure
[root@VM_0_8_centos protobuf-2.6.1]# make && make install
[root@VM_0_8_centos protobuf-2.6.1]# export PATH=$PATH:/usr/local/protobuf-2.6.1/bin
```

编译成功后，您可以使用以下命令查看版本：

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --version
liprotoc 2.6.1
```

#### 2. 创建 PB 描述文件

PB 描述文件是通信双方约定的数据交换格式，上传日志时须将规定的协议格式编译成对应语言版本的调用接口，然后添加到工程代码里，详情请参见 [protoc](https://github.com/protocolbuffers/protobuf) 。

以日志服务所规定的 PB 数据格式内容为准， 在本地创建 PB 消息描述文件 cls.proto。

> !PB 描述文件内容不可更改，且文件名须以`.proto`结尾。

cls.proto 内容（PB 描述文件）如下：

```
package cls;

message Log
{
    message Content
    {
        required string key   = 1; // 每组字段的 key
        required string value = 2; // 每组字段的 value
    }
    required int64   time     = 1; // 时间戳，UNIX时间格式
    repeated Content contents = 2; // 一条日志里的多个kv组合
}

message LogTag
{
    required string key       = 1;
    required string value     = 2;
}

message LogGroup
{
    repeated Log    logs        = 1; // 多条日志合成的日志数组
    optional string contextFlow = 2; // 目前暂无效用
    optional string filename    = 3; // 日志文件名
    optional string source      = 4; // 日志来源，一般使用机器IP
    repeated LogTag logTags     = 5;
}

message LogGroupList
{
    repeated LogGroup logGroupList = 1; // 日志组列表
}
```

#### 3. 编译生成

此例中，使用 proto 编译器生成 C++ 语言的文件，在 cls.proto 文件的同一目录下，执行如下编译命令：

```
protoc --cpp_out=./ ./cls.proto
```

> ?`--cpp_out=./`表示编译成 cpp 格式并输出当前目录下，`./cls.proto`表示位于当前目录下的 cls.proto 描述文件。

编译成功后，会输出对应语言的代码文件。此例会生成 cls.pb.h 头文件和 [cls.pb.cc](http://cls.pb.cc) 代码实现文件，如下所示：

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --cpp_out=./ ./cls.proto
[root@VM_0_8_centos protobuf-2.6.1]# ls
cls.pb.cc cls.pb.h cls.proto
```

#### 4. 调用

将生成的 cls.pb.h 头文件引入代码中，调用接口进行数据格式封装。
     */
    async UploadLog(req, cb) {
        return this.request("UploadLog", req, cb);
    }
    /**
     * 本接口用于创建投递任务
     */
    async CreateConsumer(req, cb) {
        return this.request("CreateConsumer", req, cb);
    }
    /**
     * 本接口用于获取kafka用户信息
     */
    async DescribeKafkaUser(req, cb) {
        return this.request("DescribeKafkaUser", req, cb);
    }
    /**
     * 本接口用于修改日志主题。
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 本接口用于获取cos导入配置
     */
    async DescribeCosRecharges(req, cb) {
        return this.request("DescribeCosRecharges", req, cb);
    }
    /**
     * 本接口用于获取日志集信息列表。
     */
    async DescribeLogsets(req, cb) {
        return this.request("DescribeLogsets", req, cb);
    }
    /**
     * 本接口用于修改Kafka数据订阅任务
     */
    async ModifyKafkaRecharge(req, cb) {
        return this.request("ModifyKafkaRecharge", req, cb);
    }
    /**
     * 本接口用于获取日志下载任务列表
     */
    async DescribeExports(req, cb) {
        return this.request("DescribeExports", req, cb);
    }
    /**
     * 本接口用于修改索引配置，该接口除受默认接口请求频率限制外，针对单个日志主题，并发数不能超过1，即同一时间同一个日志主题只能有一个正在执行的索引配置修改操作。

     */
    async ModifyIndex(req, cb) {
        return this.request("ModifyIndex", req, cb);
    }
    /**
     * 新建投递到COS的任务，【！！！注意】使用此接口，需要检查是否配置了投递COS的角色和权限。如果没有配置，请参考文档投递权限查看和配置https://cloud.tencent.com/document/product/614/71623。
     */
    async CreateShipper(req, cb) {
        return this.request("CreateShipper", req, cb);
    }
    /**
     * 本接口用于获取索引配置信息
     */
    async DescribeIndex(req, cb) {
        return this.request("DescribeIndex", req, cb);
    }
    /**
     * 本接口用于获取主题分区列表。
     */
    async DescribePartitions(req, cb) {
        return this.request("DescribePartitions", req, cb);
    }
    /**
     * 本接口用于创建索引
     */
    async CreateIndex(req, cb) {
        return this.request("CreateIndex", req, cb);
    }
    /**
     * 本接口用于获取ScheduledSql任务列表
     */
    async DescribeScheduledSqlInfo(req, cb) {
        return this.request("DescribeScheduledSqlInfo", req, cb);
    }
    /**
     * 删除采集规则配置
     */
    async DeleteConfig(req, cb) {
        return this.request("DeleteConfig", req, cb);
    }
    /**
     * 本接口用于获取特殊采集配置，特殊采集配置应用于自建K8S环境的采集Agent
     */
    async DescribeConfigExtras(req, cb) {
        return this.request("DescribeConfigExtras", req, cb);
    }
    /**
     * 本接口用于校验Kafka服务集群是否可以正常访问
     */
    async CheckRechargeKafkaServer(req, cb) {
        return this.request("CheckRechargeKafkaServer", req, cb);
    }
    /**
     * 本接口用于修改投递任务
     */
    async ModifyConsumer(req, cb) {
        return this.request("ModifyConsumer", req, cb);
    }
    /**
     * 本接口用于创建Kafka数据订阅任务
     */
    async CreateKafkaRecharge(req, cb) {
        return this.request("CreateKafkaRecharge", req, cb);
    }
    /**
     * 该接口用于创建通知渠道组。
     */
    async CreateAlarmNotice(req, cb) {
        return this.request("CreateAlarmNotice", req, cb);
    }
    /**
     * 本接口用于删除投递配置
     */
    async DeleteConsumer(req, cb) {
        return this.request("DeleteConsumer", req, cb);
    }
    /**
     * 本接口用于修改告警策略。需要至少修改一项有效内容。
     */
    async ModifyAlarm(req, cb) {
        return this.request("ModifyAlarm", req, cb);
    }
    /**
     * 删除机器组
     */
    async DeleteMachineGroup(req, cb) {
        return this.request("DeleteMachineGroup", req, cb);
    }
    /**
     * 重试失败的投递任务
     */
    async RetryShipperTask(req, cb) {
        return this.request("RetryShipperTask", req, cb);
    }
    /**
     * 本接口用于获取日志主题列表，支持分页
     */
    async DescribeTopics(req, cb) {
        return this.request("DescribeTopics", req, cb);
    }
    /**
     * 本接口用于删除日志集。
     */
    async DeleteLogset(req, cb) {
        return this.request("DeleteLogset", req, cb);
    }
    /**
     * 获取投递到COS的任务配置信息
     */
    async DescribeShippers(req, cb) {
        return this.request("DescribeShippers", req, cb);
    }
    /**
     * 修改机器组
     */
    async ModifyMachineGroup(req, cb) {
        return this.request("ModifyMachineGroup", req, cb);
    }
    /**
     * 删除应用到机器组的采集配置
     */
    async DeleteConfigFromMachineGroup(req, cb) {
        return this.request("DeleteConfigFromMachineGroup", req, cb);
    }
    /**
     * 本接口用于删除数据加工任务
     */
    async DeleteDataTransform(req, cb) {
        return this.request("DeleteDataTransform", req, cb);
    }
    /**
     * 本接口用于创建日志集，返回新创建的日志集的 ID。
     */
    async CreateLogset(req, cb) {
        return this.request("CreateLogset", req, cb);
    }
    /**
     * 本接口用于获取Kafka数据订阅任务
     */
    async DescribeKafkaRecharges(req, cb) {
        return this.request("DescribeKafkaRecharges", req, cb);
    }
    /**
     * 本接口用于创建数据加工任务。
     */
    async CreateDataTransform(req, cb) {
        return this.request("CreateDataTransform", req, cb);
    }
    /**
     * 用于添加机器组信息
     */
    async AddMachineGroupInfo(req, cb) {
        return this.request("AddMachineGroupInfo", req, cb);
    }
    /**
     * 本接口用于获取数据加工任务列表基本信息
     */
    async DescribeDataTransformInfo(req, cb) {
        return this.request("DescribeDataTransformInfo", req, cb);
    }
    /**
     * 该接口用于获取通知渠道组列表
     */
    async DescribeAlarmNotices(req, cb) {
        return this.request("DescribeAlarmNotices", req, cb);
    }
    /**
     * 本接口用于创建日志主题。
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 应用采集配置到指定机器组
     */
    async ApplyConfigToMachineGroup(req, cb) {
        return this.request("ApplyConfigToMachineGroup", req, cb);
    }
    /**
     * 本接口用于删除特殊采集规则配置，特殊采集配置应用于自建K8S环境的采集Agent
     */
    async DeleteConfigExtra(req, cb) {
        return this.request("DeleteConfigExtra", req, cb);
    }
    /**
     * 本接口用于修改cos导入任务
     */
    async ModifyCosRecharge(req, cb) {
        return this.request("ModifyCosRecharge", req, cb);
    }
    /**
     * 本接口用于分裂主题分区
     */
    async SplitPartition(req, cb) {
        return this.request("SplitPartition", req, cb);
    }
    /**
     * 该接口用于删除通知渠道组
     */
    async DeleteAlarmNotice(req, cb) {
        return this.request("DeleteAlarmNotice", req, cb);
    }
    /**
     * 本接口用于获取仪表盘
     */
    async DescribeDashboards(req, cb) {
        return this.request("DescribeDashboards", req, cb);
    }
    /**
     * 本接口用于构建日志数量直方图
     */
    async DescribeLogHistogram(req, cb) {
        return this.request("DescribeLogHistogram", req, cb);
    }
    /**
     * 本接口用于检索分析日志, 该接口除受默认接口请求频率限制外，针对单个日志主题，查询并发数不能超过15。
     */
    async SearchLog(req, cb) {
        return this.request("SearchLog", req, cb);
    }
    /**
     * 本接口用于删除ScheduledSql任务
     */
    async DeleteScheduledSql(req, cb) {
        return this.request("DeleteScheduledSql", req, cb);
    }
    /**
     * 获取制定机器组下的机器状态
     */
    async DescribeMachines(req, cb) {
        return this.request("DescribeMachines", req, cb);
    }
    /**
     * 打开Kafka协议消费功能
     */
    async OpenKafkaConsumer(req, cb) {
        return this.request("OpenKafkaConsumer", req, cb);
    }
    /**
     * 修改采集规则配置
     */
    async ModifyConfig(req, cb) {
        return this.request("ModifyConfig", req, cb);
    }
    /**
     * 获取告警历史，例如今天未恢复的告警
     */
    async DescribeAlertRecordHistory(req, cb) {
        return this.request("DescribeAlertRecordHistory", req, cb);
    }
    /**
     * 本接口用于删除日志主题。
     */
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    /**
     * 获取投递任务列表
     */
    async DescribeShipperTasks(req, cb) {
        return this.request("DescribeShipperTasks", req, cb);
    }
    /**
     * 本接口用于删除Kafka数据订阅任务
     */
    async DeleteKafkaRecharge(req, cb) {
        return this.request("DeleteKafkaRecharge", req, cb);
    }
    /**
     * 创建采集规则配置
     */
    async CreateConfig(req, cb) {
        return this.request("CreateConfig", req, cb);
    }
    /**
     * 获取机器组绑定的采集规则配置
     */
    async DescribeMachineGroupConfigs(req, cb) {
        return this.request("DescribeMachineGroupConfigs", req, cb);
    }
    /**
     * 修改Kafka协议消费信息
     */
    async ModifyKafkaConsumer(req, cb) {
        return this.request("ModifyKafkaConsumer", req, cb);
    }
    /**
     * 删除投递COS任务
     */
    async DeleteShipper(req, cb) {
        return this.request("DeleteShipper", req, cb);
    }
    /**
     * 本接口用于删除日志主题的索引配置，删除索引配置后将无法检索和查询采集到的日志。
     */
    async DeleteIndex(req, cb) {
        return this.request("DeleteIndex", req, cb);
    }
    /**
     * 本接口用于修改数据加工任务
     */
    async ModifyDataTransform(req, cb) {
        return this.request("ModifyDataTransform", req, cb);
    }
    /**
     * 修改现有的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
     */
    async ModifyShipper(req, cb) {
        return this.request("ModifyShipper", req, cb);
    }
    /**
     * 本接口用于删除告警策略。
     */
    async DeleteAlarm(req, cb) {
        return this.request("DeleteAlarm", req, cb);
    }
    /**
     * 获取Kafka协议消费信息
     */
    async DescribeKafkaConsumer(req, cb) {
        return this.request("DescribeKafkaConsumer", req, cb);
    }
    /**
     * 本接口用于搜索日志上下文附近的内容
     */
    async DescribeLogContext(req, cb) {
        return this.request("DescribeLogContext", req, cb);
    }
    /**
     * 本接口用于获取投递配置
     */
    async DescribeConsumer(req, cb) {
        return this.request("DescribeConsumer", req, cb);
    }
    /**
     * 该接口用于修改通知渠道组
     */
    async ModifyAlarmNotice(req, cb) {
        return this.request("ModifyAlarmNotice", req, cb);
    }
    /**
     * 获取采集规则配置
     */
    async DescribeConfigs(req, cb) {
        return this.request("DescribeConfigs", req, cb);
    }
    /**
     * 本接口用于创建cos导入任务
     */
    async CreateCosRecharge(req, cb) {
        return this.request("CreateCosRecharge", req, cb);
    }
    /**
     * 获取机器组信息列表
     */
    async DescribeMachineGroups(req, cb) {
        return this.request("DescribeMachineGroups", req, cb);
    }
    /**
     * 本接口用于合并一个读写态的主题分区，合并时指定一个主题分区 ID，日志服务会自动合并范围右相邻的分区。
     */
    async MergePartition(req, cb) {
        return this.request("MergePartition", req, cb);
    }
    /**
     * 本接口用于创建特殊采集配置任务，特殊采集配置应用于自建K8S环境的采集Agent
     */
    async CreateConfigExtra(req, cb) {
        return this.request("CreateConfigExtra", req, cb);
    }
    /**
     * 本接口用于预览Kafka数据订阅任务客户日志信息
     */
    async PreviewKafkaRecharge(req, cb) {
        return this.request("PreviewKafkaRecharge", req, cb);
    }
    /**
     * 获取采集规则配置所绑定的机器组
     */
    async DescribeConfigMachineGroups(req, cb) {
        return this.request("DescribeConfigMachineGroups", req, cb);
    }
    /**
     * 本接口用于修改特殊采集配置任务，特殊采集配置应用于自建K8S环境的采集Agent
     */
    async ModifyConfigExtra(req, cb) {
        return this.request("ModifyConfigExtra", req, cb);
    }
    /**
     * 本接口用于修改日志集信息
     */
    async ModifyLogset(req, cb) {
        return this.request("ModifyLogset", req, cb);
    }
    /**
     * 本接口用于删除日志下载任务
     */
    async DeleteExport(req, cb) {
        return this.request("DeleteExport", req, cb);
    }
    /**
     * 本接口用于创建告警策略。
     */
    async CreateAlarm(req, cb) {
        return this.request("CreateAlarm", req, cb);
    }
    /**
     * 本接口用于创建ScheduledSql任务
     */
    async CreateScheduledSql(req, cb) {
        return this.request("CreateScheduledSql", req, cb);
    }
    /**
     * 本接口仅创建下载任务，任务返回的下载地址，请用户调用DescribeExports查看任务列表。其中有下载地址CosPath参数。参考文档https://cloud.tencent.com/document/product/614/56449
     */
    async CreateExport(req, cb) {
        return this.request("CreateExport", req, cb);
    }
    /**
     * 本接口用于修改ScheduledSql任务
     */
    async ModifyScheduledSql(req, cb) {
        return this.request("ModifyScheduledSql", req, cb);
    }
    /**
     * 关闭Kafka协议消费
     */
    async CloseKafkaConsumer(req, cb) {
        return this.request("CloseKafkaConsumer", req, cb);
    }
    /**
     * 本接口用于获取告警策略列表。
     */
    async DescribeAlarms(req, cb) {
        return this.request("DescribeAlarms", req, cb);
    }
}
exports.Client = Client;
