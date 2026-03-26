/**
 * data/services.js — 服务模块种子数据
 * storageKey: srsd_services
 *
 * auth 字段取值：
 *   'none'    — 未设置（服务类型不支持鉴权）
 *   'disabled'— 已关闭
 *   'basic'   — 开启 Basic Auth
 *   'forward' — 开启 Forward Auth
 *
 * addrType: 'ip' | 'dns'
 * protocol: 'http' | 'https' | 'grpc' | 'tcp'
 */
const SEED_SERVICES = [
  { id: 'svc-001', name: 'vip',                consulName: 'vip-domeos-pub',                    ns: 'domeos-pub',      bizline: '北京研发中心', proxy: 'vip-domeos-pub.domeos.sohucs.com',                    auth: 'none',    authConfig: null,    protocol: 'http',  addrType: 'ip',  healthyCount: 3, totalCount: 3, aliases: [], logEnabled: true,  logType: 'stdout', desc: '',                                     createdAt: '2025-06-10T08:00:00Z' },
  { id: 'svc-002', name: 'schuro-cloud',        consulName: 'schuro-cloud-sohu-cs-public',       ns: 'sohu-cs-public',  bizline: '',             proxy: 'schuro-cloud-sohu-cs-public.domeos.sohucs.com',       auth: 'none',    authConfig: null,    protocol: 'http',  addrType: 'ip',  healthyCount: 2, totalCount: 2, aliases: [], logEnabled: true,  logType: 'stdout', desc: '',                                     createdAt: '2025-07-15T09:30:00Z' },
  { id: 'svc-003', name: 'test-health-checker', consulName: 'test-health-checker-changjie-test', ns: 'changjie-test',   bizline: '北京研发中心', proxy: 'test-health-checker-changjie-test.domeos.sohucs.com', auth: 'disabled',authConfig: null,    protocol: 'http',  addrType: 'ip',  healthyCount: 1, totalCount: 1, aliases: [], logEnabled: true,  logType: 'stdout', desc: '图片管理工具',                          createdAt: '2025-08-01T10:00:00Z' },
  { id: 'svc-004', name: 'jenkins',             consulName: 'jenkins-panther-backend',           ns: 'panther-backend', bizline: '大数据中心',   proxy: 'jenkins-panther-backend.domeos.sohucs.com',           auth: 'basic',   authConfig: { type: 'basic' },   protocol: 'http',  addrType: 'ip',  healthyCount: 2, totalCount: 2, aliases: [], logEnabled: true,  logType: 'stdout', desc: '',                                     createdAt: '2025-09-05T11:00:00Z' },
  { id: 'svc-005', name: 'apollo',              consulName: 'apollo-panther-backend',            ns: 'panther-backend', bizline: '大数据中心',   proxy: 'apollo-panther-backend.domeos.sohucs.com',            auth: 'forward', authConfig: { type: 'forward', forwardUrl: 'http://auth-service/verify' }, protocol: 'http',  addrType: 'ip',  healthyCount: 0, totalCount: 1, aliases: [], logEnabled: false, logType: 'stdout', desc: '',                                     createdAt: '2025-09-10T12:00:00Z' },
  { id: 'svc-006', name: 'argo',                consulName: 'argo-cloud-native',                 ns: 'cloud-native',    bizline: '大数据中心',   proxy: 'argo-cloud-native.domeos.sohucs.com',                 auth: 'basic',   authConfig: { type: 'basic' },   protocol: 'https', addrType: 'ip',  healthyCount: 3, totalCount: 3, aliases: ['argo.internal.sohu.com'], logEnabled: true,  logType: 'loki',   desc: 'Argo - 云原生应用部署管理平台',          createdAt: '2025-10-01T08:00:00Z' },
  { id: 'svc-007', name: 'nightingale-prod',    consulName: 'nightingale-prod-cloud-native',     ns: 'cloud-native',    bizline: '大数据中心',   proxy: 'nightingale-prod-cloud-native.domeos.sohucs.com',     auth: 'forward', authConfig: { type: 'forward', forwardUrl: 'http://panther-auth/verify' }, protocol: 'http',  addrType: 'ip',  healthyCount: 2, totalCount: 2, aliases: [], logEnabled: true,  logType: 'loki',   desc: '夜莺线上1环境',                          createdAt: '2025-10-15T09:00:00Z' },
  { id: 'svc-008', name: 'nightingale-test',    consulName: 'nightingale-test-cloud-native',     ns: 'cloud-native',    bizline: '大数据中心',   proxy: 'nightingale-test-cloud-native.domeos.sohucs.com',     auth: 'basic',   authConfig: { type: 'basic' },   protocol: 'http',  addrType: 'ip',  healthyCount: 1, totalCount: 2, aliases: [], logEnabled: true,  logType: 'stdout', desc: '夜莺测试环境',                           createdAt: '2025-10-20T10:00:00Z' },
  { id: 'svc-009', name: 'kubient',             consulName: 'kubient-cloud-native',              ns: 'cloud-native',    bizline: '大数据中心',   proxy: 'kubient-cloud-native.domeos.sohucs.com',              auth: 'forward', authConfig: { type: 'forward', forwardUrl: 'http://sso-service/auth' }, protocol: 'https', addrType: 'ip',  healthyCount: 5, totalCount: 5, aliases: ['k8s-manager.sohu.com'], logEnabled: false, logType: 'stdout', desc: 'Kubient K8S 管理工具',                   createdAt: '2025-11-01T08:00:00Z' },
  { id: 'svc-010', name: 'azure-cloud',         consulName: 'azure-cloud-panther-web',           ns: 'panther-web',     bizline: '大数据中心',   proxy: 'azure-cloud-panther-web.domeos.sohucs.com',           auth: 'basic',   authConfig: { type: 'basic' },   protocol: 'http',  addrType: 'ip',  healthyCount: 2, totalCount: 3, aliases: [], logEnabled: true,  logType: 'stdout', desc: 'azure 微型云存储',                       createdAt: '2025-11-10T09:00:00Z' },
];
