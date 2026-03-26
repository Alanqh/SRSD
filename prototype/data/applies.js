/**
 * data/applies.js — 申请管理种子数据
 * storageKey: srsd_applies
 *
 * status: 'pending' | 'approved' | 'rejected'
 * clientType: 'service' | 'user'
 */
const SEED_APPLIES = [
  { id: 'app-001', seqId: 41, target: 'lgh-service-test2', client: 'lgh-new',           clientType: 'service', status: 'approved', applicant: '吕青华', reason: '集成测试需要',             appliedAt: '2026-01-07T17:06:00Z', reviewedAt: '2026-01-07T18:00:00Z' },
  { id: 'app-002', seqId: 40, target: 'lgh-service-test2', client: 'lgh-service-test2', clientType: 'service', status: 'approved', applicant: '吕青华', reason: '服务间互调',               appliedAt: '2026-01-06T17:01:00Z', reviewedAt: '2026-01-06T18:30:00Z' },
  { id: 'app-003', seqId: 37, target: 'lgh-service-test2', client: 'lgh-service-test2', clientType: 'service', status: 'rejected', applicant: '吕青华', reason: '测试访问权限',             appliedAt: '2026-01-05T18:00:00Z', reviewedAt: '2026-01-05T20:00:00Z' },
  { id: 'app-004', seqId: 35, target: 'lgh-service-test',  client: 'qinghualv',         clientType: 'user',    status: 'approved', applicant: '吕青华', reason: '个人调试，需要访问测试服务', appliedAt: '2026-01-05T15:57:00Z', reviewedAt: '2026-01-05T17:00:00Z' },
];
