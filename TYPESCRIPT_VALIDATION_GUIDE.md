# TypeScript Validation Guide

## Problem Overview

When attempting to run TypeScript files directly with Node.js, you may encounter syntax errors like:

```
SyntaxError: Unexpected token '{'
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
```

This occurs because Node.js cannot parse TypeScript syntax natively. The `import type` statements and TypeScript-specific constructs cause parsing failures.

## Solutions Implemented

### 1. TSX Runtime (Recommended)

We've added `tsx` as a development dependency, which provides a modern TypeScript execution runtime.

**Installation:**
```bash
npm install --save-dev tsx
```

**Usage:**
```bash
# Direct file execution
npx tsx lib/metadata-config.ts

# Through npm script
npm run validate-config
```

### 2. TypeScript Compiler Validation

Use the TypeScript compiler for type checking without code execution:

```bash
# Check all TypeScript files
npm run type-check

# Check specific file
npx tsc --noEmit lib/metadata-config.ts

# Watch mode for continuous validation
npm run type-check:watch
```

### 3. Next.js Build Validation

Leverage the existing Next.js build process:

```bash
npm run build
```

This performs comprehensive type checking as part of the build process.

## Available Scripts

The following scripts have been added to `package.json`:

```json
{
  "scripts": {
    "type-check": "tsc --noEmit",
    "type-check:watch": "tsc --noEmit --watch", 
    "validate-ts": "tsx",
    "validate-config": "tsx lib/metadata-config.ts",
    "validate-typescript": "tsx scripts/validate-typescript.ts",
    "validate-all-ts": "tsc --noEmit && echo All TypeScript files are valid"
  }
}
```

## Usage Examples

### Validate Specific Files

```bash
# Validate metadata configuration
npm run validate-config

# Validate with comprehensive testing
npm run validate-typescript

# Type-check without execution
npm run type-check
```

### Development Workflow

```bash
# Start development with type checking
npm run type-check:watch

# In another terminal
npm run dev
```

### Troubleshooting Common Issues

#### 1. Import Errors
**Problem:** `Cannot find module` errors
**Solution:** Ensure all dependencies are installed and paths are correct

#### 2. Syntax Errors  
**Problem:** Node.js cannot parse TypeScript
**Solution:** Use `tsx` or `tsc --noEmit` instead of direct Node.js execution

#### 3. Environment Variables
**Problem:** Missing environment variables in validation
**Solution:** Set required environment variables or use default values

## Advanced Usage

### Custom Validation Scripts

Create custom validation scripts in the `scripts/` directory:

```typescript
#!/usr/bin/env tsx
import * as config from '../lib/metadata-config.ts';

// Your validation logic here
console.log('Validation complete');
```

Make executable with:
```bash
npx tsx scripts/your-script.ts
```

### Pre-commit Hooks

Add TypeScript validation to git hooks:

```bash
# .git/hooks/pre-commit
#!/bin/sh
npm run type-check
```

### CI/CD Integration

Add to your CI/CD pipeline:

```yaml
# Example GitHub Actions
- name: TypeScript Validation
  run: |
    npm run type-check
    npm run validate-typescript
```

## Performance Tips

1. **Use incremental compilation:** TypeScript supports incremental builds for faster validation
2. **Parallel execution:** Run type checking alongside development server
3. **Targeted validation:** Validate specific files during development instead of entire codebase

## Security Considerations

- Never execute untrusted TypeScript files
- Validate environment variables before execution  
- Use sandboxed environments for automated validation

## Alternative Solutions

If `tsx` doesn't work for your use case:

1. **ts-node:** Traditional TypeScript execution runtime
2. **Compiled JavaScript:** Compile to JS first, then execute
3. **Build-only validation:** Use Next.js build process exclusively

## Troubleshooting Guide

| Error | Cause | Solution |
|-------|--------|----------|
| `SyntaxError: Unexpected token '{'` | Direct Node.js execution of TypeScript | Use `tsx` or `tsc --noEmit` |
| `Cannot find module` | Missing dependencies or wrong paths | Check imports and install dependencies |
| `Type errors` | TypeScript compilation issues | Fix type issues or check tsconfig.json |

## Best Practices

1. Always validate TypeScript before committing
2. Use type-only imports when possible
3. Keep validation scripts lightweight
4. Document custom validation requirements
5. Use environment-aware configurations