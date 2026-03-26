/**
 * data/reviews.js — 审核管理种子数据
 * storageKey: srsd_reviews
 *
 * status: 'pending' | 'approved' | 'rejected'
 * clientType: 'service' | 'user'
 */
const SEED_REVIEWS = [
  { id: 'rev-001', seqId: 44, target: 'nightingale-prod', client: 'monitor-agent',       clientType: 'service', status: 'pending',  applicant: '张磊', reason: '监控服务需要访问夜莺线上接口',         appliedAt: '2026-03-20T09:00:00Z', reviewedAt: null },
  { id: 'rev-002', seqId: 43, target: 'argo',             client: 'deploy-pipeline',      clientType: 'service', status: 'pending',  applicant: '王立', reason: '部署流水线需要调用 Argo 接口触发部署', appliedAt: '2026-03-18T14:30:00Z', reviewedAt: null },
  { id: 'rev-003', seqId: 42, target: 'nightingale-prod', client: 'zhangsan',             clientType: 'user',    status: 'pending',  applicant: '张三', reason: '运营值班需要访问监控大盘',             appliedAt: '2026-03-15T11:00:00Z', reviewedAt: null },
  { id: 'rev-004', seqId: 38, target: 'argo',             client: 'ci-runner',            clientType: 'service', status: 'approved', applicant: '刘振', reason: 'CI 流水线发布需要',                   appliedAt: '2026-02-20T10:00:00Z', reviewedAt: '2026-02-20T16:00:00Z' },
  { id: 'rev-005', seqId: 36, target: 'nightingale-test', client: 'test-monitor-service', clientType: 'service', status: 'rejected', applicant: '王丹', reason: '测试监控数据对接',                   appliedAt: '2026-02-10T09:00:00Z', reviewedAt: '2026-02-10T17:00:00Z' },
];
