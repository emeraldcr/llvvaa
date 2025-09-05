# CSP Implementation Guide

This document provides guidance on the Content Security Policy (CSP) implementation in the llvvaa Next.js application.

## Overview

The CSP implementation includes:
- Environment-specific policies (development vs production)
- Nonce-based script security
- Violation reporting and monitoring
- EmailJS integration compatibility
- Gradual deployment options

## Configuration

### Environment Variables

#### CSP Control
- `CSP_ENABLED`: Enable/disable CSP headers (default: true)
- `CSP_REPORT_ONLY`: Use report-only mode for monitoring (default: false)

#### EmailJS Configuration
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key

### Development vs Production

#### Development Mode
- Allows `'unsafe-eval'` for hot reload functionality
- Permits localhost connections
- More permissive for debugging

#### Production Mode
- Strict CSP policy
- No `'unsafe-eval'` allowed
- Limited to trusted sources only

## CSP Policies

### Script Sources
- `'self'`: Allow scripts from same origin
- `'nonce-{nonce}'`: Allow scripts with valid nonce
- `https://cdn.emailjs.com`: EmailJS CDN

### Style Sources
- `'self'`: Same origin styles
- `'unsafe-inline'`: Required for Tailwind CSS
- `https://fonts.googleapis.com`: Google Fonts

### Connection Sources
- `'self'`: Same origin connections
- `https://api.emailjs.com`: EmailJS API

## Violation Reporting

CSP violations are reported to `/api/csp-report` endpoint:
- Automatically filters false positives
- Logs violations for analysis
- Stores violations in development mode

## Testing Strategy

### Gradual Deployment
1. **Report-Only Mode**: Monitor violations without blocking
2. **Development Testing**: Test with strict CSP in development
3. **Staged Rollout**: Enable for percentage of production traffic
4. **Full Enforcement**: Complete CSP implementation

### Common Issues and Solutions

#### EmailJS Integration
- **Issue**: EmailJS library may use eval
- **Solution**: Modern versions are CSP-compliant

#### Three.js Compatibility
- **Issue**: WebGL shaders might require dynamic compilation
- **Solution**: Pre-compiled shaders or worker-based compilation

#### Development Tools
- **Issue**: Hot reload requires eval
- **Solution**: Allow `'unsafe-eval'` in development only

## Monitoring and Maintenance

### Key Metrics
- Violation frequency and types
- EmailJS success rates
- User experience impact

### Regular Tasks
- Review violation reports
- Update CSP policies as needed
- Test new third-party integrations

## Troubleshooting

### Disabling CSP
If CSP causes issues, temporarily disable:
```bash
export CSP_ENABLED=false
```

### Report-Only Mode
To monitor without blocking:
```bash
export CSP_REPORT_ONLY=true
```

### Common Error Messages

1. **\"Refused to execute inline script\"**
   - Cause: Inline script without nonce
   - Solution: Add nonce or move to external file

2. **\"Refused to load script from 'eval'\"**
   - Cause: Dynamic code execution
   - Solution: Update library or allow 'unsafe-eval' if necessary

3. **\"Refused to connect to URL\"**
   - Cause: Connection to unauthorized domain
   - Solution: Add domain to connect-src directive

## Best Practices

1. **Start with Report-Only**: Monitor violations before enforcing
2. **Test Thoroughly**: Verify all functionality works with CSP
3. **Monitor Continuously**: Watch for new violations
4. **Update Regularly**: Keep CSP policies current
5. **Document Changes**: Track policy modifications

## Next Steps

1. Deploy with report-only mode
2. Monitor violations for 1-2 weeks
3. Adjust policies based on findings
4. Enable enforcement mode
5. Continue monitoring and optimization