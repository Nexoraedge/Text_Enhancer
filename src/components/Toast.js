// Function to show a toast notification
export function showToast(message, type = 'info') {
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('gemini-enhancer-toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'gemini-enhancer-toast-container';
      toastContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
      `;
      document.body.appendChild(toastContainer);
    }
  
    // Create toast element
    const toast = document.createElement('div');
    toast.style.cssText = `
      background-color: ${type === 'error' ? '#f44336' : '#1a73e8'};
      color: white;
      padding: 12px 16px;
      border-radius: 4px;
      margin-top: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      max-width: 300px;
      opacity: 0;
      transition: opacity 0.3s;
    `;
    toast.textContent = message;
    toastContainer.appendChild(toast);
  
    // Fade in
    setTimeout(() => {
      toast.style.opacity = '1';
    }, 10);
  
    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toastContainer.removeChild(toast);
      }, 300);
    }, 3000);
  }

  export function showCopyNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
      z-index: 2147483647;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    notification.innerHTML = '✅ Copied to clipboard!';
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
