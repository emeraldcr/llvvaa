# Next.js 15 Metadata Type Import Fix Design

## Overview

This design addresses a TypeScript import error in `lib/metadata-config.ts` where the `OpenGraph` type is being imported directly from the 'next' package, which is not supported in Next.js 15.3.3. The error occurs because Next.js 15 has restructured its type exports, and `OpenGraph` is no longer a direct export.

**Error Details:**
```
Type error: Module '"next"' has no exported member 'OpenGraph'. Did you mean to use 'import OpenGraph from "next"' instead?
```

## Architecture

### Problem Analysis

The current implementation attempts to import `OpenGraph` as a named export:
```typescript
import type { Metadata, OpenGraph } from 'next';
```

However, in Next.js 15, the `OpenGraph` type is accessed as a property of the `Metadata` type, not as a standalone export.

### Solution Architecture

```mermaid
flowchart TD
    A[Current Implementation] --> B[Direct OpenGraph Import]
    B --> C[Build Error in Next.js 15]
    
    D[Fixed Implementation] --> E[Use Metadata['openGraph'] Type]
    E --> F[Successful TypeScript Compilation]
    
    G[Type Inference] --> H[Extract OpenGraph from Metadata]
    H --> I[Maintain Type Safety]
```

### Type Resolution Strategy

The fix involves using TypeScript's indexed access types to extract the `OpenGraph` type from the `Metadata` interface:

```typescript
// Instead of direct import
type OpenGraph = Metadata['openGraph']

// Or using NonNullable for stricter typing
type OpenGraph = NonNullable<Metadata['openGraph']>
```

## Implementation Design

### File Modifications

**Target File:** `lib/metadata-config.ts`

#### Import Statement Fix

**Current (Broken):**
```typescript
import type { Metadata, OpenGraph } from 'next';
```

**Fixed:**
```typescript
import type { Metadata } from 'next';

// Extract OpenGraph type from Metadata interface
type OpenGraph = NonNullable<Metadata['openGraph']>
```

#### Type Safety Considerations

1. **NonNullable Wrapper**: Use `NonNullable<Metadata['openGraph']>` to ensure the type excludes `undefined`
2. **Compatibility**: This approach works with all Next.js 15.x versions
3. **Future-Proofing**: Less likely to break with future Next.js updates

### Function Signatures

The `getOpenGraphConfig` function signature remains unchanged:

```typescript
export const getOpenGraphConfig = (
  locale: string,
  title: string,
  description: string,
  customUrl?: string
): OpenGraph => {
  // Implementation remains the same
}
```

### Interface Compatibility

The existing `OpenGraphConfig` interface can be kept for additional type safety, but the return type of `getOpenGraphConfig` should use the extracted `OpenGraph` type to ensure compatibility with Next.js metadata expectations.

## Testing Strategy

### Compilation Verification

1. **TypeScript Check**: Ensure `tsc --noEmit` passes without errors
2. **Build Test**: Verify `npm run build` completes successfully
3. **Development Server**: Confirm `npm run dev` starts without type errors

### Functional Testing

1. **Metadata Generation**: Test all functions that use the `OpenGraph` type:
   - `getOpenGraphConfig()`
   - `createLocaleMetadata()`
2. **Page Metadata**: Verify metadata generation works in:
   - Tour pages (`/[locale]/tours/[slug]`)
   - Search pages (`/[locale]/search`)
   - Layout files (`/[locale]/layout.tsx`)

### Runtime Verification

Verify that the generated metadata structure matches Next.js expectations:

```typescript
// Expected structure should remain unchanged
{
  title: string,
  description: string,
  url: string,
  siteName: string,
  images: Array<{
    url: string,
    width: number,
    height: number,
    alt: string
  }>,
  locale: string,
  type: string
}
```

## Risk Assessment

### Low Risk Changes

- **Type-only modification**: No runtime behavior changes
- **Backward compatible**: Existing function signatures remain the same
- **Isolated impact**: Only affects the metadata utility file

### Validation Points

1. **Build System**: Ensure Next.js build process completes
2. **SEO Metadata**: Verify OpenGraph tags render correctly in HTML
3. **Social Sharing**: Test that social media previews still work
4. **Internationalization**: Confirm metadata works across all locales

## Implementation Complete

✅ **SOLUTION READY FOR APPLICATION**

The fix for the Next.js 15 metadata type import error has been designed and is ready to be applied to `lib/metadata-config.ts`.

### Exact Changes Required

**File:** `lib/metadata-config.ts`
**Line 8:** Replace the import statement

**From:**
```typescript
import type { Metadata, OpenGraph } from 'next';
```

**To:**
```typescript
import type { Metadata } from 'next';

// Extract OpenGraph type from Metadata interface for Next.js 15 compatibility
type OpenGraph = NonNullable<Metadata['openGraph']>
```

This change:
- Removes the direct `OpenGraph` import that doesn't exist in Next.js 15
- Extracts the `OpenGraph` type from the `Metadata` interface using TypeScript's indexed access
- Uses `NonNullable` to ensure type safety
- Maintains backward compatibility with all existing function signatures

### Verification Steps

1. Apply the import fix to `lib/metadata-config.ts`
2. Run `npm run build` to verify TypeScript compilation
3. Test metadata generation on tour and search pages
4. Confirm OpenGraph tags render correctly in HTML output

The fix is low-risk and only affects type definitions without changing runtime behavior.