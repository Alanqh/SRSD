/**
 * common.js — 所有页面共享的工具函数（纯原生 JS，无框架依赖）
 *
 * 提供：
 *   genId()              → 生成唯一 ID 字符串
 *   now()                → 返回当前时间字符串（ISO 8601）
 *   formatTime(value)    → 将 ISO 时间格式化为中文展示
 *   escHtml(str)         → HTML 转义，防 XSS
 *   showToast(text,icon) → 显示 Toast 消息
 *   confirm2(...)        → 显示确认弹窗
 *   confirmOk()          → 确认弹窗点"确定"
 *   closeConfirm()       → 关闭确认弹窗
 *   openModal(el)        → 显示弹窗遮罩层
 *   closeModal(el)       → 隐藏弹窗遮罩层
 *   useStorage(key,seed) → sessionStorage 读写辅助
 */

/* ── 基础工具 ── */

function genId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function now() {
  return new Date().toISOString();
}

function formatTime(value) {
  if (!value) return '--';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-');
}

/** HTML 转义，在 innerHTML 插入用户数据时必须使用 */
function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Toast 消息 ── */

/**
 * showToast('操作成功')
 * showToast('删除失败', '❌')
 * 依赖页面中存在 <div class="toast-list"> 容器
 */
function showToast(text, icon = '✅') {
  const list = document.querySelector('.toast-list');
  if (!list) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span>${escHtml(icon)}</span><span>${escHtml(text)}</span>`;
  list.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* ── 确认弹窗 ── */

let _confirmOkCb = null;

/**
 * confirm2('确认删除该记录？', () => doDelete(id))
 * confirm2('确认提交？', onOk, '提交确认')  // 自定义标题
 * 依赖页面中存在 id="confirm-overlay" / "confirm-title" / "confirm-content"
 */
function confirm2(content, onOk, title = '操作确认') {
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-content').textContent = content;
  document.getElementById('confirm-overlay').style.display = 'flex';
  _confirmOkCb = onOk;
}

function confirmOk() {
  _confirmOkCb?.();
  closeConfirm();
}

function closeConfirm() {
  document.getElementById('confirm-overlay').style.display = 'none';
  _confirmOkCb = null;
}

/* ── 弹窗遮罩 ── */

/**
 * openModal(document.getElementById('my-modal'))
 * closeModal(document.getElementById('my-modal'))
 */
function openModal(el) {
  el.style.display = 'flex';
}

function closeModal(el) {
  el.style.display = 'none';
}

/* ── sessionStorage 持久化 ── */

/**
 * const { load, save } = useStorage('panther_task_list', SEED_DATA);
 * let list = load();
 * function saveList() { save(list); }
 */
function useStorage(key, seedData = []) {
  function cloneSeed() {
    return JSON.parse(JSON.stringify(seedData));
  }

  function load() {
    const raw = sessionStorage.getItem(key);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && Array.isArray(seedData) && seedData.length > 0) {
          // 空数组直接重新种子
          if (parsed.length === 0) {
            const seed = cloneSeed();
            sessionStorage.setItem(key, JSON.stringify(seed));
            return seed;
          }
          // 种子有静态 ID 时，检查存储数据是否与种子 ID 有任何交集
          // 若完全不重叠，说明存储的是旧 schema 数据，需要重新种子
          const seedIds = new Set(seedData.map(d => d.id).filter(Boolean));
          if (seedIds.size > 0 && !parsed.some(d => seedIds.has(d.id))) {
            const seed = cloneSeed();
            sessionStorage.setItem(key, JSON.stringify(seed));
            return seed;
          }
        }
        return parsed;
      } catch (err) {
        console.warn(`[useStorage] failed to parse sessionStorage for key "${key}", reset to seed data.`, err);
      }
    }
    const seed = cloneSeed();
    sessionStorage.setItem(key, JSON.stringify(seed));
    return seed;
  }

  function save(val) {
    sessionStorage.setItem(key, JSON.stringify(val));
  }

  return { load, save };
}

/* ── 侧边栏菜单 ── */

/**
 * 展开/收起父级菜单组
 * 用法：<div class="menu-group-header" onclick="toggleMenu(this)">
 */
function toggleMenu(header) {
  const group = header.closest('.menu-group');
  if (group) group.classList.toggle('expanded');
}
