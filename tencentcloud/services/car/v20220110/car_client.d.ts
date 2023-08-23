import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateSessionResponse, StopPublishStreamRequest, StopPublishStreamResponse, DestroySessionResponse, StartPublishStreamResponse, ApplyConcurrentResponse, ApplyConcurrentRequest, DestroySessionRequest, StartPublishStreamRequest, CreateSessionRequest } from "./car_models";
/**
 * car client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于申请并发。接口超时时间：20秒。
     */
    ApplyConcurrent(req: ApplyConcurrentRequest, cb?: (error: string, rep: ApplyConcurrentResponse) => void): Promise<ApplyConcurrentResponse>;
    /**
     * 停止云端推流
     */
    StopPublishStream(req: StopPublishStreamRequest, cb?: (error: string, rep: StopPublishStreamResponse) => void): Promise<StopPublishStreamResponse>;
    /**
     * 销毁会话
     */
    DestroySession(req: DestroySessionRequest, cb?: (error: string, rep: DestroySessionResponse) => void): Promise<DestroySessionResponse>;
    /**
     * 本接口用于创建会话。接口超时时间：5秒。
     */
    CreateSession(req: CreateSessionRequest, cb?: (error: string, rep: CreateSessionResponse) => void): Promise<CreateSessionResponse>;
    /**
     * 开始云端推流
     */
    StartPublishStream(req: StartPublishStreamRequest, cb?: (error: string, rep: StartPublishStreamResponse) => void): Promise<StartPublishStreamResponse>;
}
