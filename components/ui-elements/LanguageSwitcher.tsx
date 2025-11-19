// /Users/macbookair/Documents/projects/spendly-landing/components/ui-elements/LanguageSwitcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'uk', label: 'Українська' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ko', label: '한국어' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'ja', label: '日本語' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (nextLocale: string) => {
    const codes = LANGS.map(l => l.code);
    const segments = pathname.split('/');
    let nextPath = `/${nextLocale}`;
    if (codes.includes(segments[1])) {
      segments[1] = nextLocale;
      nextPath = segments.join('/') || nextPath;
    } else {
      nextPath = `/${nextLocale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
    }
    router.push(nextPath);
  };

  const current = LANGS.find(l => l.code === locale)?.label || locale;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-10 px-3">{current}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={locale} onValueChange={onChange}>
          {LANGS.map(l => (
            <DropdownMenuRadioItem key={l.code} value={l.code}>
              {l.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}