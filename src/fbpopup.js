
const SUPPORT_MESSAGES = [
    "✨ Enjoying ToneGenie? A kind review would mean a lot!",
    "☕ Like the tool? Buy me a coffee & keep it alive!",
    "💬 Helped you today? A small review goes a long way.",
    "🪄 Magic happened? Show some love with a quick rating!",
    "💡 This tool runs on creativity (and a little coffee)!",
    "🫶 Built this for creators — your feedback fuels updates!",
    "😄 Smiled while using ToneGenie? Say thanks with a review!",
    "🚀 Help us grow! Drop a review if it helped you fly.",
    "🔧 One dev. Many cups of coffee. Support keeps me coding!",
    "❤️ Liked the vibe? A rating helps more than you think.",
    "🌟 If this saved your time — rate it, fuel the mission!",
    "📝 Love ToneGenie? Tap a star & tell the world!",
    "👀 Still here? Might as well drop a 5-star review 😉",
    "🌈 Spread good vibes — your review keeps this tool free!",
    "🔥 This took caffeine, passion & late nights. Show support!",
    "💻 One-man army here. A review = real motivation 🚀",
    "🎁 Like a free gift? Help me with a tiny shoutout!",
    "🤖 AI worked hard. Now give it a little applause 💬",
    "📢 Love tools like this? Your feedback keeps them alive!",
    "🥰 Reviews aren’t just stars — they keep solo devs going!",
    "🙌 If this helped you close a deal, boost the project!",
    "🔁 Using this often? Pay it forward with a kind review.",
    "🎯 If this hit the right tone — let the world know!",
    "😌 Made writing easier today? Consider showing some ❤️",
    "💬 Sharing is caring — leave feedback to help others!",
    "🌟 Found it useful? A small review = huge impact!",
    "🧠 Good AI deserves good vibes. Drop a rating!",
    "🍀 Feeling lucky this worked? Pay it back with stars!",
    "🎉 This is free, but your review is priceless!",
    "👋 Before you go, your 5-star review = fuel for updates!"
  ];

  function incrementUsageCountAndMaybePrompt() {
  
    chrome.storage.local.get('Feedback_Submitted',function(response){
     
        
        useCount += 1;
        chrome.storage.local.set({ textEnhancerUsage: useCount });
        if (useCount > 0 && (useCount % 4 === 0)) {
          showReviewPopup();
        }
      
    });
  }

  function showReviewPopup() {
    if (document.querySelector('.text-enhancer-feedback-popup')) return;
    const popup = document.createElement('div');
    popup.className = 'text-enhancer-feedback-popup';
    popup.style.cssText = `position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;`;
  
    const msg = document.createElement('p');
    msg.textContent = SUPPORT_MESSAGES[Math.floor(Math.random()*SUPPORT_MESSAGES.length)];
    msg.style.margin='0 0 12px 0';
    popup.appendChild(msg);
 
    const stars = document.createElement('div');
    stars.className = 'text-enhancer-stars';
    stars.style.cssText='display:flex;gap:6px;margin-bottom:12px;';
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('button');
      star.className = 'text-enhancer-star-btn';
      star.textContent = '★';
      star.style.cssText = 'background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;transition:color 0.2s;';
      star.onclick = () => {
        for (let j = 1; j <= i; j++) {
          stars.children[j - 1].style.color = '#facc15';
        }
      };
      stars.appendChild(star);
    }
    popup.appendChild(stars);

    const review = document.createElement('textarea');
    review.className= ' .text-enhancer-review-popup textarea ';
    review.style.cssText = 'width:100%;padding:10px 12px;border:none;border-radius:8px;background:#1c1c24;color:#f3f4f6;font-size:13px;margin-bottom:12px;';
    review.placeholder = 'Your thoughts';
    review.rows=2;
    review.cols=20;
    popup.appendChild(review);
  
    const btn = document.createElement('button');
    btn.textContent = 'Share'
    btn.style.cssText = 'display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;';
    btn.onclick = () => {
        SubmitReview(); 
      chrome.storage.local.set({ textEnhancerReviewed: true });
      popup.remove();
    };
  
    const later = document.createElement('button');
    later.textContent = 'Later';
    later.style.cssText='display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;';
    later.onclick = () => popup.remove();
    popup.appendChild(btn);
    popup.appendChild(later);
  
    document.body.appendChild(popup);
  }

export default incrementUsageCountAndMaybePrompt;

  


