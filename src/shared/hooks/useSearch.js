'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useSearch(options = {}) {
  const {
    queryKey = 'search',
    initialValue = ''
  } = options;

  const router = useRouter();
  const searchParams = useSearchParams();

  const urlValue = searchParams?.get(queryKey) || '';
  const [value, setValue] = useState(urlValue || initialValue);

  useEffect(() => {
    setValue(urlValue);
  }, [urlValue]);

  const submit = () => {
    const params = new URLSearchParams(searchParams?.toString());

    if (value) {
      params.set(queryKey, value);
    } else {
      params.delete(queryKey);
    }

    router.push(`?${params.toString()}`);
  };

  const clear = () => {
    const params = new URLSearchParams(searchParams?.toString());
    params.delete(queryKey);

    setValue('');
    router.push(`?${params.toString()}`);
  };

  return {
    value,
    setValue,
    submit,
    clear,
    activeValue: urlValue,
  };
}
