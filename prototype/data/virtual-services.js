/**
 * data/virtual-services.js — 虚拟服务种子数据（二期新增）
 * storageKey: srsd_virtual_services
 *
 * 虚拟服务没有实例列表，通过关联同空间下的真实服务并配置流量规则实现流量调度。
 *
 * routes: Array<{ id, conditions: [{type, field, matchType, value}], upstreams: [{serviceId, serviceName, weight}] }>
 *   - 条件路由，按顺序优先级匹配，第一条满足的规则生效
 *   - type: 'header' | 'cookie' | 'query' | 'path'
 *   - matchType: 'exact' | 'prefix' | 'regex'
 *   - path 类型只支持 prefix 匹配，无需 field
 *   - upstreams: 命中该规则时按权重分发到的后端服务，权重之和须为 100
 *
 * defaultBackend: { serviceId, serviceName }
 *   - 所有条件路由不匹配时转发到此服务（单一后端，无需配置权重）
 */
const SEED_VIRTUAL_SERVICES = [
  {
    id: 'vs-001',
    name: 'nightingale-canary',
    ns: 'cloud-native',
    bizline: '大数据中心',
    proxy: 'nightingale-cloud-native.domeos.sohucs.com',
    desc: '夜莺金丝雀发布：Header x-canary=true 的流量走测试版（90% 旧 + 10% 新），其余流量全走线上',
    routes: [
      {
        id: 'r-001',
        conditions: [
          { type: 'header', field: 'x-canary', matchType: 'exact', value: 'true' },
        ],
        upstreams: [
          { serviceId: 'svc-007', serviceName: 'nightingale-prod', weight: 90 },
          { serviceId: 'svc-008', serviceName: 'nightingale-test', weight: 10 },
        ],
      },
    ],
    defaultBackend: { serviceId: 'svc-007', serviceName: 'nightingale-prod' },
    auth: 'disabled',
    createdBy: '吕青华',
    createdAt: '2026-02-01T10:00:00Z',
  },
  {
    id: 'vs-002',
    name: 'panther-api-gateway',
    ns: 'panther-backend',
    bizline: '大数据中心',
    proxy: 'api-panther-backend.domeos.sohucs.com',
    desc: 'Panther 后端统一入口，v2 Header 流量按 80/20 切量到 jenkins/apollo，其余走 jenkins',
    routes: [
      {
        id: 'r-002',
        conditions: [
          { type: 'header', field: 'x-version', matchType: 'exact', value: 'v2' },
        ],
        upstreams: [
          { serviceId: 'svc-004', serviceName: 'jenkins', weight: 80 },
          { serviceId: 'svc-005', serviceName: 'apollo',  weight: 20 },
        ],
      },
    ],
    defaultBackend: { serviceId: 'svc-004', serviceName: 'jenkins' },
    auth: 'disabled',
    createdBy: '吕青华',
    createdAt: '2026-02-15T09:00:00Z',
  },
];
