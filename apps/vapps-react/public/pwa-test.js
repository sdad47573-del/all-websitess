/**
 * PWA Test Script
 * Run this in the browser console to test PWA functionality
 */

console.log('🧪 PWA Test Suite');
console.log('==================\n');

// Test 1: Service Worker Support
console.log('1️⃣ Testing Service Worker Support...');
if ('serviceWorker' in navigator) {
  console.log('✅ Service Worker is supported');
  
  navigator.serviceWorker.getRegistrations().then(registrations => {
    console.log(`   Found ${registrations.length} service worker(s)`);
    registrations.forEach((reg, index) => {
      console.log(`   SW ${index + 1}:`, reg.active ? 'Active' : 'Inactive');
    });
  });
} else {
  console.log('❌ Service Worker is NOT supported');
}

// Test 2: Manifest
console.log('\n2️⃣ Testing Manifest...');
fetch('/manifest.json')
  .then(response => response.json())
  .then(manifest => {
    console.log('✅ Manifest loaded successfully');
    console.log('   Name:', manifest.name);
    console.log('   Short Name:', manifest.short_name);
    console.log('   Icons:', manifest.icons.length);
  })
  .catch(error => {
    console.log('❌ Manifest failed to load:', error);
  });

// Test 3: Cache Storage
console.log('\n3️⃣ Testing Cache Storage...');
if ('caches' in window) {
  console.log('✅ Cache Storage is supported');
  
  caches.keys().then(cacheNames => {
    console.log(`   Found ${cacheNames.length} cache(s)`);
    cacheNames.forEach(name => {
      console.log(`   - ${name}`);
    });
  });
} else {
  console.log('❌ Cache Storage is NOT supported');
}

// Test 4: PWA Install Prompt
console.log('\n4️⃣ Testing Install Prompt...');
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('✅ Install prompt is available');
});

// Test 5: Display Mode
console.log('\n5️⃣ Testing Display Mode...');
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('✅ Running as PWA (standalone)');
} else {
  console.log('ℹ️  Running in browser');
}

// Test 6: Online/Offline
console.log('\n6️⃣ Testing Network Status...');
console.log(navigator.onLine ? '✅ Online' : '⚠️  Offline');

window.addEventListener('online', () => {
  console.log('🟢 Network: Online');
});

window.addEventListener('offline', () => {
  console.log('🔴 Network: Offline');
});

// Test 7: Icons
console.log('\n7️⃣ Testing Icons...');
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];
Promise.all(
  iconSizes.map(size => 
    fetch(`/icons/icon-${size}x${size}.png`)
      .then(response => ({ size, ok: response.ok }))
  )
).then(results => {
  const missing = results.filter(r => !r.ok);
  if (missing.length === 0) {
    console.log('✅ All icons are available');
  } else {
    console.log('⚠️  Missing icons:', missing.map(r => r.size));
  }
});

console.log('\n✨ Test suite complete!');
console.log('Check the results above for any issues.\n');
