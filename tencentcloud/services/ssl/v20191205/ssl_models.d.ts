/**
 * ApplyCertificate返回参数结构体
 */
export interface ApplyCertificateResponse {
    /**
      * 证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CompleteCertificate请求参数结构体
 */
export interface CompleteCertificateRequest {
    /**
      * 证书ID
      */
    CertificateId: string;
}
/**
 * DeleteCertificate请求参数结构体
 */
export interface DeleteCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * DescribeCertificateOperateLogs返回参数结构体
 */
export interface DescribeCertificateOperateLogsResponse {
    /**
      * 当前查询条件日志总数。
      */
    AllTotal?: number;
    /**
      * 本次请求返回的日志数量。
      */
    TotalCount?: number;
    /**
      * 证书操作日志列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperateLogs?: Array<OperationLog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CommitCertificateInformation请求参数结构体
 */
export interface CommitCertificateInformationRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * DownloadCertificate返回参数结构体
 */
export interface DownloadCertificateResponse {
    /**
      * ZIP base64 编码内容，base64 解码后可保存为 ZIP 文件。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content?: string;
    /**
      * MIME 类型：application/zip = ZIP 压缩文件。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContentType?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReplaceCertificate返回参数结构体
 */
export interface ReplaceCertificateResponse {
    /**
      * 证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DownloadCertificate请求参数结构体
 */
export interface DownloadCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * CancelCertificateOrder请求参数结构体
 */
export interface CancelCertificateOrderRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * ModifyCertificateProject返回参数结构体
 */
export interface ModifyCertificateProjectResponse {
    /**
      * 修改所属项目成功的证书集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessCertificates?: Array<string>;
    /**
      * 修改所属项目失败的证书集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailCertificates?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 的内容。
 */
export interface Certificates {
    /**
      * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin: string;
    /**
      * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: string;
    /**
      * 证书来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
    From: string;
    /**
      * 证书套餐类型：1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageType: string;
    /**
      * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateType: string;
    /**
      * 颁发者。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductZhName: string;
    /**
      * 主域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias: string;
    /**
      * 状态值 0：审核中，1：已通过，2：审核失败，3：已过期，4：已添加 DNS 解析记录，5：OV/EV 证书，待提交资料，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateExtra: CertificateExtra;
    /**
      * 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityStatus: string;
    /**
      * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusMsg: string;
    /**
      * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyType: string;
    /**
      * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertBeginTime: string;
    /**
      * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertEndTime: string;
    /**
      * 证书有效期，单位（月）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ValidityPeriod: string;
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime: string;
    /**
      * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateId: string;
    /**
      * 证书包含的多个域名（包含主域名）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectAltName: Array<string>;
    /**
      * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageTypeName: string;
    /**
      * 状态名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusName: string;
    /**
      * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVip: boolean;
    /**
      * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDv: boolean;
    /**
      * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsWildcard: boolean;
    /**
      * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVulnerability: boolean;
    /**
      * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewAble: boolean;
    /**
      * 项目信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectInfo: ProjectInfo;
    /**
      * 关联的云资源，暂不可用
注意：此字段可能返回 null，表示取不到有效值。
      */
    BoundResource: Array<string>;
    /**
      * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Deployable: boolean;
}
/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 数组下，key为CertificateExtra 的内容。
 */
export interface CertificateExtra {
    /**
      * 证书可配置域名数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainNumber: string;
    /**
      * 原始证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginCertificateId: string;
    /**
      * 重颁发证书原始 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReplacedBy: string;
    /**
      * 重颁发证书新 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReplacedFor: string;
    /**
      * 新订单证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewOrder: string;
}
/**
 * DescribeCertificate返回参数结构体
 */
export interface DescribeCertificateResponse {
    /**
      * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin?: string;
    /**
      * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId?: string;
    /**
      * 证书来源：trustasia = 亚洲诚信，upload = 用户上传。
注意：此字段可能返回 null，表示取不到有效值。
      */
    From?: string;
    /**
      * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateType?: string;
    /**
      * 证书套餐类型：1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageType?: string;
    /**
      * 证书颁发者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductZhName?: string;
    /**
      * 域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain?: string;
    /**
      * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias?: string;
    /**
      * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusMsg?: string;
    /**
      * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyType?: string;
    /**
      * 漏洞扫描状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityStatus?: string;
    /**
      * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertBeginTime?: string;
    /**
      * 证书失效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertEndTime?: string;
    /**
      * 证书有效期：单位(月)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ValidityPeriod?: string;
    /**
      * 申请时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime?: string;
    /**
      * 订单 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrderId?: string;
    /**
      * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateExtra?: CertificateExtra;
    /**
      * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthDetail?: DvAuthDetail;
    /**
      * 漏洞扫描评估报告。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityReport?: string;
    /**
      * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateId?: string;
    /**
      * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageTypeName?: string;
    /**
      * 状态描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusName?: string;
    /**
      * 证书包含的多个域名（包含主域名）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectAltName?: Array<string>;
    /**
      * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVip?: boolean;
    /**
      * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsWildcard?: boolean;
    /**
      * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDv?: boolean;
    /**
      * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVulnerability?: boolean;
    /**
      * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewAble?: boolean;
    /**
      * 提交的资料信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubmittedData?: SubmittedData;
    /**
      * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Deployable?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 证书操作日志。
 */
export interface OperationLog {
    /**
      * 操作证书动作。
      */
    Action: string;
    /**
      * 操作时间。
      */
    CreatedOn: string;
}
/**
 * UploadCertificate请求参数结构体
 */
export interface UploadCertificateRequest {
    /**
      * 证书公钥。
      */
    CertificatePublicKey: string;
    /**
      * 私钥内容，证书类型为 SVR 时必填，为 CA 时可不填。
      */
    CertificatePrivateKey?: string;
    /**
      * 证书类型，默认 SVR。CA = 客户端证书，SVR = 服务器证书。
      */
    CertificateType?: string;
    /**
      * 备注名称。
      */
    Alias?: string;
    /**
      * 项目 ID。
      */
    ProjectId?: number;
}
/**
 * DescribeCertificateDetail请求参数结构体
 */
export interface DescribeCertificateDetailRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * ApplyCertificate请求参数结构体
 */
export interface ApplyCertificateRequest {
    /**
      * 验证方式：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证。
      */
    DvAuthMethod: string;
    /**
      * 域名。
      */
    DomainName: string;
    /**
      * 项目 ID。
      */
    ProjectId?: number;
    /**
      * 证书类型，目前仅支持类型2。2 = TrustAsia TLS RSA CA。
      */
    PackageType?: string;
    /**
      * 邮箱。
      */
    ContactEmail?: string;
    /**
      * 手机。
      */
    ContactPhone?: string;
    /**
      * 有效期，默认12个月，目前仅支持12个月。
      */
    ValidityPeriod?: string;
    /**
      * 加密算法，仅支持 RSA。
      */
    CsrEncryptAlgo?: string;
    /**
      * 密钥对参数，仅支持2048。
      */
    CsrKeyParameter?: string;
    /**
      * CSR 的加密密码。
      */
    CsrKeyPassword?: string;
    /**
      * 备注名称。
      */
    Alias?: string;
    /**
      * 原证书 ID，用于重新申请。
      */
    OldCertificateId?: string;
}
/**
 * ReplaceCertificate请求参数结构体
 */
export interface ReplaceCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证。
      */
    ValidType: string;
    /**
      * 类型，默认 Original。可选项：Original = 原证书 CSR，Upload = 手动上传，Online = 在线生成。
      */
    CsrType?: string;
    /**
      * CSR 内容。
      */
    CsrContent?: string;
    /**
      * KEY 密码。
      */
    CsrkeyPassword?: string;
}
/**
 * DeleteCertificate返回参数结构体
 */
export interface DeleteCertificateResponse {
    /**
      * 删除结果。
      */
    DeleteResult?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCertificateDetail返回参数结构体
 */
export interface DescribeCertificateDetailResponse {
    /**
      * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin?: string;
    /**
      * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId?: string;
    /**
      * 证书来源：trustasia = 亚洲诚信，upload = 用户上传。
注意：此字段可能返回 null，表示取不到有效值。
      */
    From?: string;
    /**
      * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateType?: string;
    /**
      * 证书套餐类型：1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageType?: string;
    /**
      * 颁发者。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductZhName?: string;
    /**
      * 域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain?: string;
    /**
      * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias?: string;
    /**
      * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusMsg?: string;
    /**
      * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyType?: string;
    /**
      * 漏洞扫描状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityStatus?: string;
    /**
      * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertBeginTime?: string;
    /**
      * 证书失效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertEndTime?: string;
    /**
      * 证书有效期：单位（月）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ValidityPeriod?: string;
    /**
      * 申请时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime?: string;
    /**
      * 订单 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrderId?: string;
    /**
      * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateExtra?: CertificateExtra;
    /**
      * 证书私钥
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificatePrivateKey?: string;
    /**
      * 证书公钥
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificatePublicKey?: string;
    /**
      * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthDetail?: DvAuthDetail;
    /**
      * 漏洞扫描评估报告。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityReport?: string;
    /**
      * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateId?: string;
    /**
      * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TypeName?: string;
    /**
      * 状态描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusName?: string;
    /**
      * 证书包含的多个域名（包含主域名）
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectAltName?: Array<string>;
    /**
      * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVip?: boolean;
    /**
      * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsWildcard?: boolean;
    /**
      * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDv?: boolean;
    /**
      * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVulnerability?: boolean;
    /**
      * 提交的资料信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubmittedData?: SubmittedData;
    /**
      * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewAble?: boolean;
    /**
      * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Deployable?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckCertificateChain返回参数结构体
 */
export interface CheckCertificateChainResponse {
    /**
      * 1为通过检查，0为未通过检查。
      */
    IsValid?: boolean;
    /**
      * 1为可信CA，0为不可信CA。
      */
    IsTrustedCA?: boolean;
    /**
      * 包含证书链中每一段证书的通用名称。
      */
    Chains?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCertificateProject请求参数结构体
 */
export interface ModifyCertificateProjectRequest {
    /**
      * 需要修改所属项目的证书 ID 集合，最多100个证书。
      */
    CertificateIdList: Array<string>;
    /**
      * 项目 ID。
      */
    ProjectId: number;
}
/**
 * 返回参数键为 DvAuths 的内容。
 */
export interface DvAuths {
    /**
      * DV 认证密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthKey: string;
    /**
      * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthValue: string;
    /**
      * DV 认证值域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthDomain: string;
    /**
      * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthPath: string;
    /**
      * DV 认证子域名，
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthSubDomain: string;
    /**
      * DV 认证类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthVerifyType: string;
}
/**
 * ModifyCertificateAlias请求参数结构体
 */
export interface ModifyCertificateAliasRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * 备注名称。
      */
    Alias?: string;
}
/**
 * DescribeCertificate请求参数结构体
 */
export interface DescribeCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * 获取证书列表（DescribeCertificate）返回参数键为 DvAuthDetail 的内容。
 */
export interface DvAuthDetail {
    /**
      * DV 认证密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthKey?: string;
    /**
      * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthValue?: string;
    /**
      * DV 认证值域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthDomain: string;
    /**
      * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthPath: string;
    /**
      * DV 认证子域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthKeySubDomain: string;
    /**
      * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuths: Array<DvAuths>;
}
/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 下，key为 ProjectInfo 的内容。
 */
export interface ProjectInfo {
    /**
      * 项目名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectName: string;
    /**
      * 项目创建用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectCreatorUin: number;
    /**
      * 项目创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectCreateTime: string;
    /**
      * 项目信息简述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectResume: string;
    /**
      * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin: number;
    /**
      * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: string;
}
/**
 * DescribeCertificateOperateLogs请求参数结构体
 */
export interface DescribeCertificateOperateLogsRequest {
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 请求日志数量，默认为20。
      */
    Limit?: number;
    /**
      * 开始时间，默认15天前。
      */
    StartTime?: string;
    /**
      * 结束时间，默认现在时间。
      */
    EndTime?: string;
}
/**
 * CancelCertificateOrder返回参数结构体
 */
export interface CancelCertificateOrderResponse {
    /**
      * 取消订单成功的证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SubmitCertificateInformation返回参数结构体
 */
export interface SubmitCertificateInformationResponse {
    /**
      * 证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCertificates返回参数结构体
 */
export interface DescribeCertificatesResponse {
    /**
      * 总数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount?: number;
    /**
      * 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Certificates?: Array<Certificates>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CommitCertificateInformation返回参数结构体
 */
export interface CommitCertificateInformationResponse {
    /**
      * 亚信订单号。
      */
    OrderId?: string;
    /**
      * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UploadCertificate返回参数结构体
 */
export interface UploadCertificateResponse {
    /**
      * 证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckCertificateChain请求参数结构体
 */
export interface CheckCertificateChainRequest {
    /**
      * 待检查的证书链
      */
    CertificateChain: string;
}
/**
 * ModifyCertificateAlias返回参数结构体
 */
export interface ModifyCertificateAliasResponse {
    /**
      * 修改成功的证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SubmitCertificateInformation请求参数结构体
 */
export interface SubmitCertificateInformationRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * CSR 生成方式：online = 在线生成, parse = 手动上传。
      */
    CsrType?: string;
    /**
      * 上传的 CSR 内容。
      */
    CsrContent?: string;
    /**
      * 绑定证书的域名。
      */
    CertificateDomain?: string;
    /**
      * 上传的域名数组（多域名证书可以上传）。
      */
    DomainList?: Array<string>;
    /**
      * 私钥密码。
      */
    KeyPassword?: string;
    /**
      * 公司名称。
      */
    OrganizationName?: string;
    /**
      * 部门名称。
      */
    OrganizationDivision?: string;
    /**
      * 公司详细地址。
      */
    OrganizationAddress?: string;
    /**
      * 国家名称，如中国：CN 。
      */
    OrganizationCountry?: string;
    /**
      * 公司所在城市。
      */
    OrganizationCity?: string;
    /**
      * 公司所在省份。
      */
    OrganizationRegion?: string;
    /**
      * 公司邮编。
      */
    PostalCode?: string;
    /**
      * 公司座机区号。
      */
    PhoneAreaCode?: string;
    /**
      * 公司座机号码。
      */
    PhoneNumber?: string;
    /**
      * 证书验证方式。
      */
    VerifyType?: string;
    /**
      * 管理人名。
      */
    AdminFirstName?: string;
    /**
      * 管理人姓。
      */
    AdminLastName?: string;
    /**
      * 管理人手机号码。
      */
    AdminPhoneNum?: string;
    /**
      * 管理人邮箱地址。
      */
    AdminEmail?: string;
    /**
      * 管理人职位。
      */
    AdminPosition?: string;
    /**
      * 联系人名。
      */
    ContactFirstName?: string;
    /**
      * 联系人姓。
      */
    ContactLastName?: string;
    /**
      * 联系人邮箱地址。
      */
    ContactEmail?: string;
    /**
      * 联系人手机号码。
      */
    ContactNumber?: string;
    /**
      * 联系人职位。
      */
    ContactPosition?: string;
}
/**
 * 获取证书列表（DescribeCertificate）返回参数键为 SubmittedData 的内容。
 */
export interface SubmittedData {
    /**
      * CSR 类型，（online = 在线生成CSR，parse = 粘贴 CSR）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CsrType?: string;
    /**
      * CSR 内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CsrContent?: string;
    /**
      * 域名信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateDomain?: string;
    /**
      * DNS 信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainList?: Array<string>;
    /**
      * 私钥密码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyPassword?: string;
    /**
      * 企业或单位名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationName?: string;
    /**
      * 部门。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationDivision?: string;
    /**
      * 地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationAddress?: string;
    /**
      * 国家。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationCountry?: string;
    /**
      * 市。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationCity?: string;
    /**
      * 省。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationRegion?: string;
    /**
      * 邮政编码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PostalCode?: string;
    /**
      * 座机区号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneAreaCode?: string;
    /**
      * 座机号码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneNumber?: string;
    /**
      * 管理员名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminFirstName?: string;
    /**
      * 管理员姓。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminLastName?: string;
    /**
      * 管理员电话号码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminPhoneNum?: string;
    /**
      * 管理员邮箱地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminEmail?: string;
    /**
      * 管理员职位。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminPosition?: string;
    /**
      * 联系人名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactFirstName?: string;
    /**
      * 联系人姓。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactLastName?: string;
    /**
      * 联系人电话号码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactNumber?: string;
    /**
      * 联系人邮箱地址，
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactEmail?: string;
    /**
      * 联系人职位。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactPosition?: string;
    /**
      * 验证类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyType?: string;
}
/**
 * DescribeCertificates请求参数结构体
 */
export interface DescribeCertificatesRequest {
    /**
      * 分页偏移量，从0开始。
      */
    Offset?: number;
    /**
      * 每页数量，默认20。
      */
    Limit?: number;
    /**
      * 搜索关键词，可搜索证书 ID、备注名称、域名。例如： a8xHcaIs。
      */
    SearchKey?: string;
    /**
      * 证书类型：CA = 客户端证书，SVR = 服务器证书。
      */
    CertificateType?: string;
    /**
      * 项目 ID。
      */
    ProjectId?: number;
    /**
      * 按到期时间排序：DESC = 降序， ASC = 升序。
      */
    ExpirationSort?: string;
    /**
      * 证书状态。
      */
    CertificateStatus?: Array<number>;
    /**
      * 是否可部署，可选值：1 = 可部署，0 =  不可部署。
      */
    Deployable?: number;
}
/**
 * CompleteCertificate返回参数结构体
 */
export interface CompleteCertificateResponse {
    /**
      * 证书ID
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
