'use client';

import { ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search restaurants, cuisines…"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      style={{
        width: '100%',
        maxWidth: 500,
        padding: '12px 16px',
        borderRadius: 12,
        border: '1px solid #e0e0e0',
        fontSize: 14,
        outline: 'none',
      }}
    />
  );
}
