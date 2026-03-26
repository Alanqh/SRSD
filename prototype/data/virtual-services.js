/**
 * data/virtual-services.js — 虚拟服务种子数据（二期新增）
 * storageKey: srsd_virtual_services
 *
 * 虚拟服务没有实例列表，通过关联同空间下的真实服务并配置流量规则实现流量调度。
 *
 * routes: Array<{ id, conditions: [{type, field, matchType, value}], targetServiceId, targetServiceName }>
 *   - 条件路由，按顺序优先级匹配，第一条满足的规则生效
 *   - type: 'header' | 'cookie' | 'query' | 'path'
 *   - matchType: 'exact' | 'prefix' | 'regex'
 *   - path 类型只支持 prefix 匹配，无需 field
 *
 * backends: Array<{ serviceId, serviceName, weight }>
 *   - 默认后端，所有条件路由不匹配时按权重分配，权重之和须等于 100
 */
const SEED_VIRTUAL_SERVICES = [
  {
    id: 'vs-001',
    name: 'nightingale-canary',
    ns: 'cloud-native',
    bizline: '大数据中心',
    proxy: 'nightingale-cloud-native.domeos.sohucs.com',
    desc: '夜莺金丝雀发布：Header x-canary=true 流量走测试版，其余流量走线上',
    routes: [
      {
        id: 'r-001',
        conditions: [
          { type: 'header', field: 'x-canary', matchType: 'exact', value: 'true' },
        ],
        targetServiceId: 'svc-008',
        targetServiceName: 'nightingale-test',
      },
    ],
    backends: [
      { serviceId: 'svc-007', serviceName: 'nightingale-prod', weight: 100 },
    ],
    createdBy: '吕青华',
    createdAt: '2026-02-01T10:00:00Z',
  },
  {
    id: 'vs-002',
    name: 'panther-api-gateway',
    ns: 'panther-backend',
    bizline: '大数据中心',
    proxy: 'api-panther-backend.domeos.sohucs.com',
    desc: 'Panther 后端统一入口，按 50/50 权重负载分配',
    routes: [],
    backends: [
      { serviceId: 'svc-004', serviceName: 'jenkins', weight: 50 },
      { serviceId: 'svc-005', serviceName: 'apollo',  weight: 50 },
    ],
    createdBy: '吕青华',
    createdAt: '2026-02-15T09:00:00Z',
  },
];
