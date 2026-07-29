'use client';

import { useEffect, useState } from 'react';
import type { BusinessHours } from './types';

interface OpenStatus {
  isOpen: boolean;
  label: string;
}

/** ساعات کاری پیش‌فرض — این را با ساعات واقعی مپا کافه جایگزین کن */
export const defaultBusinessHours: BusinessHours = {
  0: { open: '09:00', close: '23:00' }, // یکشنبه
  1: { open: '09:00', close: '23:00' }, // دوشنبه
  2: { open: '09:00', close: '23:00' }, // سه‌شنبه
  3: { open: '09:00', close: '23:00' }, // چهارشنبه
  4: { open: '09:00', close: '23:00' }, // پنج‌شنبه
  5: { open: '09:00', close: '23:30' }, // جمعه
  6: { open: '10:00', close: '23:30' }, // شنبه
};

function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

export function useOpenStatus(hours: BusinessHours = defaultBusinessHours): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>({ isOpen: true, label: '' });

  useEffect(() => {
    const check = (): void => {
      const now = new Date();
      const todayHours = hours[now.getDay()];

      if (!todayHours) {
        setStatus({ isOpen: false, label: 'امروز تعطیل است' });
        return;
      }

      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      const openMinutes = toMinutes(todayHours.open);
      const closeMinutes = toMinutes(todayHours.close);
      const isOpen = nowMinutes >= openMinutes && nowMinutes < closeMinutes;

      setStatus({
        isOpen,
        label: isOpen ? `باز است تا ${todayHours.close}` : `بسته — از ${todayHours.open} باز می‌شویم`,
      });
    };

    check();
    const interval = setInterval(check, 60 * 1000);
    return () => clearInterval(interval);
  }, [hours]);

  return status;
}
