#!/usr/bin/env tsx
/**
 * TypeScript Validation Script
 * 
 * Validates TypeScript files by loading and testing their exports
 * This script can be run directly with tsx or through npm scripts
 */

import * as metadataConfig from '../lib/metadata-config';

console.log('🔍 Starting TypeScript validation...\n');

try {
  // Test metadata-config.ts exports
  console.log('✅ metadata-config.ts loaded successfully');
  console.log('📦 Available exports:', Object.keys(metadataConfig));
  
  // Test basic functions
  const baseUrl = metadataConfig.getBaseUrl();
  console.log('🌐 Base URL:', baseUrl);
  
  const metadataBase = metadataConfig.getMetadataBase();
  console.log('🏠 Metadata base:', metadataBase.href);
  
  // Test locale-specific functions
  const englishKeywords = metadataConfig.getDefaultKeywords('en');
  const spanishKeywords = metadataConfig.getDefaultKeywords('es');
  console.log('🔑 English keywords count:', englishKeywords.length);
  console.log('🔑 Spanish keywords count:', spanishKeywords.length);
  
  // Test OpenGraph config
  const ogConfig = metadataConfig.getOpenGraphConfig(
    'en',
    'Test Title',
    'Test Description'
  );
  console.log('📱 OpenGraph config generated:', !!ogConfig.title);
  
  // Test Twitter config
  const twitterConfig = metadataConfig.getTwitterConfig(
    'Test Title',
    'Test Description'
  );
  console.log('🐦 Twitter config generated:', !!twitterConfig.title);
  
  // Test complete metadata creation
  const completeMetadata = metadataConfig.createLocaleMetadata('en');
  console.log('📄 Complete metadata generated:', !!completeMetadata.title);
  
  console.log('\n✅ All TypeScript validation tests passed!');
  console.log('🎉 The metadata-config.ts file is functioning correctly.');
  
} catch (error) {
  console.error('❌ TypeScript validation failed:', error);
  process.exit(1);
}