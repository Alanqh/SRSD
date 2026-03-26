/**
 * data/tokens.js — Token 管理种子数据（二期新增）
 * storageKey: srsd_tokens
 *
 * Token 是 Consul ACL Token 在业务层面的抽象
 * 一个 Token 属于某个命名空间，可关联该空间下的多个服务（多对多）
 *
 * status: 'active' | 'expired'
 * linkedServices: string[]  — 关联服务的 id 列表
 */
const SEED_TOKENS = [
  {
    id: 'tok-001',
    name: 'cloud-native-deploy-token',
    nsId: 'ns-005',
    ns: 'cloud-native',
    consulToken: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    desc: '供 DomeOS 侧部署使用，关联 Argo 和 Nightingale',
    linkedServices: ['svc-006', 'svc-007'],
    status: 'active',
    createdBy: '吕青华',
    createdAt: '2025-12-01T08:00:00Z',
  },
  {
    id: 'tok-002',
    name: 'panther-backend-token',
    nsId: 'ns-006',
    ns: 'panther-backend',
    consulToken: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    desc: '供 panther-backend 命名空间下所有服务使用',
    linkedServices: ['svc-004', 'svc-005'],
    status: 'active',
    createdBy: '吕青华',
    createdAt: '2026-01-10T09:00:00Z',
  },
  {
    id: 'tok-003',
    name: 'changjie-test-token-v1',
    nsId: 'ns-008',
    ns: 'changjie-test',
    consulToken: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
    desc: '长捷测试空间第一版 Token，已到期',
    linkedServices: [],
    status: 'expired',
    createdBy: '张磊',
    createdAt: '2025-06-01T08:00:00Z',
  },
];
