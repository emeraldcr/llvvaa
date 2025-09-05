const fs = require('fs');
const path = require('path');

// Image audit scanner for llvvaa project
class ImageAuditor {
  constructor() {
    this.publicDir = path.join(process.cwd(), 'public');
    this.imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
    this.auditResults = {
      totalImages: 0,
      totalSize: 0,
      imagesByFormat: {},
      largeImages: [],
      codeReferences: [],
      images: []
    };
  }

  // Scan public directory recursively for images
  scanPublicDirectory(dir = this.publicDir, relativePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const itemRelativePath = path.join(relativePath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively scan subdirectories
        this.scanPublicDirectory(fullPath, itemRelativePath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        
        if (this.imageExtensions.includes(ext)) {
          const imageInfo = this.analyzeImage(fullPath, itemRelativePath, stat);
          this.auditResults.images.push(imageInfo);
          this.auditResults.totalImages++;
          this.auditResults.totalSize += stat.size;
          
          // Track by format
          const format = ext.substring(1);
          this.auditResults.imagesByFormat[format] = 
            (this.auditResults.imagesByFormat[format] || 0) + 1;
          
          // Flag large images (>500KB)
          if (stat.size > 500 * 1024) {
            this.auditResults.largeImages.push({
              path: itemRelativePath,
              size: this.formatFileSize(stat.size),
              sizeBytes: stat.size
            });
          }
        }
      }
    });
  }

  // Analyze individual image file
  analyzeImage(fullPath, relativePath, stat) {
    return {
      path: relativePath,
      fullPath: fullPath,
      format: path.extname(relativePath).substring(1).toLowerCase(),
      size: stat.size,
      sizeFormatted: this.formatFileSize(stat.size),
      publicPath: '/' + relativePath.replace(/\\/g, '/'),
      needsOptimization: stat.size > 100 * 1024, // Flag files >100KB
      isLarge: stat.size > 500 * 1024 // Flag files >500KB
    };
  }

  // Scan codebase for image references
  scanCodeReferences() {
    const srcDir = path.join(process.cwd(), 'app');
    this.scanDirectoryForReferences(srcDir);
  }

  scanDirectoryForReferences(dir, depth = 0) {
    if (depth > 5) return; // Prevent infinite recursion
    
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          this.scanDirectoryForReferences(fullPath, depth + 1);
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
          this.analyzeFileForImageReferences(fullPath);
        }
      });
    } catch (error) {
      console.warn(`Could not scan directory ${dir}:`, error.message);
    }
  }

  analyzeFileForImageReferences(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        // Look for image references
        const imgMatches = [
          ...line.matchAll(/src=["']([^"']*\.(jpg|jpeg|png|gif|webp|avif|svg))["']/gi),
          ...line.matchAll(/url\(['"]([^'"]*\.(jpg|jpeg|png|gif|webp|avif|svg))['"]?\)/gi),
          ...line.matchAll(/backgroundImage.*['"]([^'"]*\.(jpg|jpeg|png|gif|webp|avif|svg))['"]?/gi),
          ...line.matchAll(/from ['"]([^'"]*\.(jpg|jpeg|png|gif|webp|avif|svg))['"]?/gi)
        ];
        
        imgMatches.forEach(match => {
          const imagePath = match[1];
          if (imagePath.startsWith('/') || imagePath.startsWith('./') || imagePath.startsWith('../')) {
            this.auditResults.codeReferences.push({
              file: path.relative(process.cwd(), filePath),
              line: index + 1,
              imagePath: imagePath,
              context: line.trim(),
              type: this.getImageUsageType(line)
            });
          }
        });
      });
    } catch (error) {
      console.warn(`Could not read file ${filePath}:`, error.message);
    }
  }

  getImageUsageType(line) {
    if (line.includes('<img')) return 'img_tag';
    if (line.includes('<Image')) return 'next_image';
    if (line.includes('background')) return 'css_background';
    if (line.includes('import')) return 'import';
    return 'other';
  }

  // Format file size in human readable format
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  // Generate audit report
  generateReport() {
    console.log('\n🔍 IMAGE AUDIT REPORT FOR LLVVAA PROJECT');
    console.log('===============================================\n');
    
    console.log('📊 SUMMARY');
    console.log(`Total Images: ${this.auditResults.totalImages}`);
    console.log(`Total Size: ${this.formatFileSize(this.auditResults.totalSize)}`);
    console.log(`Average Size: ${this.formatFileSize(Math.round(this.auditResults.totalSize / this.auditResults.totalImages))}\n`);
    
    console.log('📁 BY FORMAT');
    Object.entries(this.auditResults.imagesByFormat).forEach(([format, count]) => {
      console.log(`  ${format.toUpperCase()}: ${count} files`);
    });
    console.log('');
    
    console.log('🚨 LARGE FILES (>500KB) - HIGH PRIORITY');
    if (this.auditResults.largeImages.length === 0) {
      console.log('  None found');
    } else {
      this.auditResults.largeImages
        .sort((a, b) => b.sizeBytes - a.sizeBytes)
        .forEach(img => {
          console.log(`  ${img.path} - ${img.size}`);
        });
    }
    console.log('');
    
    console.log('💻 CODE REFERENCES');
    const referencesByType = {};
    this.auditResults.codeReferences.forEach(ref => {
      referencesByType[ref.type] = (referencesByType[ref.type] || 0) + 1;
    });
    
    Object.entries(referencesByType).forEach(([type, count]) => {
      console.log(`  ${type}: ${count} references`);
    });
    console.log('');
    
    console.log('🎯 OPTIMIZATION RECOMMENDATIONS');
    const needsOptimization = this.auditResults.images.filter(img => img.needsOptimization);
    console.log(`• ${needsOptimization.length} images need optimization (>100KB)`);
    console.log(`• ${this.auditResults.largeImages.length} images are critically large (>500KB)`);
    
    const imgTagRefs = this.auditResults.codeReferences.filter(ref => ref.type === 'img_tag');
    console.log(`• ${imgTagRefs.length} <img> tags should be converted to Next.js <Image>`);
    
    const potentialSavings = this.auditResults.totalSize * 0.7; // Estimated 70% reduction
    console.log(`• Potential size reduction: ~${this.formatFileSize(potentialSavings)} (70%)`);
    console.log('');
    
    return this.auditResults;
  }

  // Save detailed report to JSON
  saveDetailedReport() {
    const reportPath = path.join(process.cwd(), 'scripts', 'image-audit-report.json');
    const detailedReport = {
      timestamp: new Date().toISOString(),
      summary: {
        totalImages: this.auditResults.totalImages,
        totalSize: this.auditResults.totalSize,
        totalSizeFormatted: this.formatFileSize(this.auditResults.totalSize),
        averageSize: Math.round(this.auditResults.totalSize / this.auditResults.totalImages),
        imagesByFormat: this.auditResults.imagesByFormat
      },
      largeImages: this.auditResults.largeImages,
      allImages: this.auditResults.images,
      codeReferences: this.auditResults.codeReferences,
      recommendations: {
        imagesToOptimize: this.auditResults.images.filter(img => img.needsOptimization).length,
        imgTagsToConvert: this.auditResults.codeReferences.filter(ref => ref.type === 'img_tag').length,
        estimatedSavings: Math.round(this.auditResults.totalSize * 0.7)
      }
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(detailedReport, null, 2));
    console.log(`📄 Detailed report saved to: ${reportPath}\n`);
    
    return detailedReport;
  }
}

// Run the audit
if (require.main === module) {
  const auditor = new ImageAuditor();
  
  console.log('Starting image audit...');
  auditor.scanPublicDirectory();
  auditor.scanCodeReferences();
  
  const results = auditor.generateReport();
  auditor.saveDetailedReport();
  
  console.log('✅ Audit complete!');
}

module.exports = ImageAuditor;