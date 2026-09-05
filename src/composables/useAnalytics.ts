/**
 * Цели Яндекс.Метрики — единая таблица seo-plan-v3 §6.2 / direct-plan-v2 §6.1.
 * Мессенджеров нет (client-answers п. 3.4): целей click_whatsapp / click_telegram не существует.
 * Счётчик подключается после подтверждения доступа (VITE_METRIKA_ID); без него вызовы — no-op.
 */

export type GoalId = 'form_start' | 'form_quote_submit' | 'click_phone' | 'click_email' | 'lead';

declare global {
  interface Window {
    ym?: (id: number, action: string, ...params: unknown[]) => void;
  }
}

const METRIKA_ID = Number(import.meta.env.VITE_METRIKA_ID || 0);
const firedOnce = new Set<GoalId>();

function reach(goal: GoalId): void {
  if (METRIKA_ID && typeof window !== 'undefined' && typeof window.ym === 'function') {
    window.ym(METRIKA_ID, 'reachGoal', goal);
  } else if (import.meta.env.DEV) {
    console.info(`[metrika] reachGoal: ${goal}`);
  }
}

export function useAnalytics() {
  /** Обычная цель. */
  function goal(id: GoalId): void {
    reach(id);
  }

  /** Цель один раз за визит (form_start). */
  function goalOnce(id: GoalId): void {
    if (firedOnce.has(id)) return;
    firedOnce.add(id);
    reach(id);
  }

  /** Агрегат «обращение»: form_quote_submit, click_phone или click_email + lead. */
  function leadVia(id: Exclude<GoalId, 'lead' | 'form_start'>): void {
    reach(id);
    reach('lead');
  }

  /** id Метрики из client id для связки заявки с визитом (direct-plan §6.4). */
  function getClientId(): Promise<string> {
    return new Promise((resolve) => {
      if (METRIKA_ID && typeof window !== 'undefined' && typeof window.ym === 'function') {
        let settled = false;
        window.ym(METRIKA_ID, 'getClientID', (id: string) => {
          settled = true;
          resolve(id);
        });
        setTimeout(() => {
          if (!settled) resolve('');
        }, 1000);
      } else {
        resolve('');
      }
    });
  }

  return { goal, goalOnce, leadVia, getClientId };
}
