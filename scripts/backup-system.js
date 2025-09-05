const fs = require('fs');
const path = require('path');

// Backup system for original images before optimization
class ImageBackupSystem {
  constructor() {
    this.publicDir = path.join(process.cwd(), 'public');
    this.backupDir = path.join(this.publicDir, '_originals');
    this.imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];
  }

  // Create backup directory structure
  ensureBackupDirectory() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
      console.log('✅ Created backup directory: /public/_originals/');
    }
  }

  // Backup all images from public directory
  backupImages() {
    this.ensureBackupDirectory();
    let backedUpCount = 0;
    let totalSize = 0;

    console.log('🔄 Starting backup process...\n');

    this.scanAndBackup(this.publicDir, '');
    
    console.log(`\n✅ Backup complete!`);
    console.log(`📦 Backed up ${backedUpCount} images`);
    console.log(`💾 Total backup size: ${this.formatFileSize(totalSize)}\n`);

    return { backedUpCount, totalSize };
  }

  scanAndBackup(sourceDir, relativePath) {
    // Skip the _originals directory itself
    if (sourceDir.includes('_originals')) return;

    const items = fs.readdirSync(sourceDir);
    
    items.forEach(item => {
      const sourcePath = path.join(sourceDir, item);
      const itemRelativePath = path.join(relativePath, item);
      const stat = fs.statSync(sourcePath);

      if (stat.isDirectory()) {
        // Create corresponding directory in backup
        const backupDirPath = path.join(this.backupDir, itemRelativePath);
        if (!fs.existsSync(backupDirPath)) {
          fs.mkdirSync(backupDirPath, { recursive: true });
        }
        // Recursively backup subdirectory
        this.scanAndBackup(sourcePath, itemRelativePath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        
        if (this.imageExtensions.includes(ext)) {
          this.backupSingleImage(sourcePath, itemRelativePath, stat);
        }
      }
    });
  }

  backupSingleImage(sourcePath, relativePath, stat) {
    const backupPath = path.join(this.backupDir, relativePath);
    
    // Ensure backup subdirectory exists
    const backupSubDir = path.dirname(backupPath);
    if (!fs.existsSync(backupSubDir)) {
      fs.mkdirSync(backupSubDir, { recursive: true });
    }

    // Copy file if it doesn't already exist in backup
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(sourcePath, backupPath);
      console.log(`✓ Backed up: ${relativePath} (${this.formatFileSize(stat.size)})`);
      return { backed: true, size: stat.size };
    } else {
      console.log(`- Skipped: ${relativePath} (already exists)`);
      return { backed: false, size: 0 };
    }
  }

  // Restore images from backup
  restoreImages() {
    if (!fs.existsSync(this.backupDir)) {
      console.error('❌ Backup directory not found. Cannot restore.');
      return false;
    }

    console.log('🔄 Starting restore process...\n');
    let restoredCount = 0;

    this.scanAndRestore(this.backupDir, '');

    console.log(`\n✅ Restore complete! Restored ${restoredCount} images\n`);
    return true;
  }

  scanAndRestore(backupSource, relativePath) {
    const items = fs.readdirSync(backupSource);
    
    items.forEach(item => {
      const backupItemPath = path.join(backupSource, item);
      const itemRelativePath = path.join(relativePath, item);
      const stat = fs.statSync(backupItemPath);

      if (stat.isDirectory()) {
        // Ensure target directory exists
        const targetDir = path.join(this.publicDir, itemRelativePath);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        // Recursively restore subdirectory
        this.scanAndRestore(backupItemPath, itemRelativePath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        
        if (this.imageExtensions.includes(ext)) {
          this.restoreSingleImage(backupItemPath, itemRelativePath);
        }
      }
    });
  }

  restoreSingleImage(backupPath, relativePath) {
    const targetPath = path.join(this.publicDir, relativePath);
    
    // Ensure target subdirectory exists
    const targetSubDir = path.dirname(targetPath);
    if (!fs.existsSync(targetSubDir)) {
      fs.mkdirSync(targetSubDir, { recursive: true });
    }

    // Copy file from backup to target
    fs.copyFileSync(backupPath, targetPath);
    console.log(`✓ Restored: ${relativePath}`);
  }

  // Verify backup integrity
  verifyBackup() {
    if (!fs.existsSync(this.backupDir)) {
      console.error('❌ Backup directory not found.');
      return false;
    }

    console.log('🔍 Verifying backup integrity...\n');
    
    const originalImages = this.getAllImages(this.publicDir, '', true); // Skip _originals
    const backupImages = this.getAllImages(this.backupDir, '', false);

    const missingInBackup = originalImages.filter(orig => 
      !backupImages.find(backup => backup.relativePath === orig.relativePath)
    );

    if (missingInBackup.length === 0) {
      console.log('✅ Backup verification passed! All images are backed up.\n');
      return true;
    } else {
      console.log('❌ Backup verification failed! Missing images:');
      missingInBackup.forEach(img => {
        console.log(`  - ${img.relativePath}`);
      });
      console.log('');
      return false;
    }
  }

  getAllImages(startDir, relativePath, skipOriginals) {
    const images = [];
    
    if (skipOriginals && startDir.includes('_originals')) {
      return images;
    }

    const items = fs.readdirSync(startDir);
    
    items.forEach(item => {
      if (skipOriginals && item === '_originals') {
        return; // Skip the backup directory when scanning originals
      }

      const fullPath = path.join(startDir, item);
      const itemRelativePath = path.join(relativePath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        images.push(...this.getAllImages(fullPath, itemRelativePath, skipOriginals));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        
        if (this.imageExtensions.includes(ext)) {
          images.push({
            relativePath: itemRelativePath,
            fullPath: fullPath,
            size: stat.size
          });
        }
      }
    });

    return images;
  }

  // Format file size helper
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  // Clean backup directory (use with caution)
  cleanBackup() {
    if (fs.existsSync(this.backupDir)) {
      fs.rmSync(this.backupDir, { recursive: true, force: true });
      console.log('🗑️ Backup directory cleaned.\n');
    }
  }
}

// CLI interface
if (require.main === module) {
  const backup = new ImageBackupSystem();
  const command = process.argv[2] || 'backup';

  switch (command) {
    case 'backup':
      backup.backupImages();
      backup.verifyBackup();
      break;
    case 'restore':
      backup.restoreImages();
      break;
    case 'verify':
      backup.verifyBackup();
      break;
    case 'clean':
      backup.cleanBackup();
      break;
    default:
      console.log('Usage: node backup-system.js [backup|restore|verify|clean]');
  }
}

module.exports = ImageBackupSystem;