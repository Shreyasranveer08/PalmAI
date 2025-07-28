const predictions = [
  // Health Predictions (1–34)
  { category: "Health", text: "Your energy will improve if you rest well tonight." },
  { category: "Health", text: "Stay hydrated, your body is asking for balance." },
  { category: "Health", text: "A small change in your diet will bring big results." },
  { category: "Health", text: "Breathing exercises will bring calm today." },
  { category: "Health", text: "Take a walk — it will refresh your soul and body." },
  { category: "Health", text: "Listen to your body. It’s wiser than you think." },
  { category: "Health", text: "A healthy mind leads to a healthy life." },
  { category: "Health", text: "Stretch and release your stress today." },
  { category: "Health", text: "Avoid screens before bed — sleep is your superpower." },
  { category: "Health", text: "Focus on immunity this week. Nature is your healer." },
  { category: "Health", text: "Fresh air will lift your mood and energy." },
  { category: "Health", text: "You are healing, slowly but surely." },
  { category: "Health", text: "Try a new fruit — your body will thank you." },
  { category: "Health", text: "Health is wealth. Protect it today." },
  { category: "Health", text: "Drink herbal tea — your soul needs it." },
  { category: "Health", text: "Yoga will bring balance to your chaotic thoughts." },
  { category: "Health", text: "Slow down — overwork is draining your life force." },
  { category: "Health", text: "Your smile is healing — use it more." },
  { category: "Health", text: "Take deep breaths, healing begins inside." },
  { category: "Health", text: "Avoid junk today, your body needs kindness." },
  { category: "Health", text: "Go to bed early, dreams await you." },
  { category: "Health", text: "Water is your healing companion today." },
  { category: "Health", text: "Skip the stress — it’s not worth your peace." },
  { category: "Health", text: "Start your day with a healthy ritual." },
  { category: "Health", text: "You’ll feel stronger than ever soon." },
  { category: "Health", text: "Your aura is glowing with wellness." },
  { category: "Health", text: "Don’t ignore that little pain — check it out." },
  { category: "Health", text: "Good sleep is your natural medicine." },
  { category: "Health", text: "Spiritual calm brings physical strength." },
  { category: "Health", text: "Laughter will boost your immunity today." },
  { category: "Health", text: "A new health habit will stick this time." },
  { category: "Health", text: "Detox your thoughts as well as your diet." },
  { category: "Health", text: "Touch the earth barefoot — ground yourself." },
  { category: "Health", text: "Your body needs a digital detox too." },

  // Love Predictions (35–67)
  { category: "Love", text: "Someone secretly admires your heart, not just your face." },
  { category: "Love", text: "A message from the past will stir your emotions." },
  { category: "Love", text: "Trust your heart — it already knows the answer." },
  { category: "Love", text: "A soft conversation can fix what silence couldn't." },
  { category: "Love", text: "Romance is blooming — open your arms." },
  { category: "Love", text: "Your love language will be understood today." },
  { category: "Love", text: "Forgive. Sometimes love needs space, not endings." },
  { category: "Love", text: "Someone’s heart beats for you in silence." },
  { category: "Love", text: "Be honest — love grows in truth." },
  { category: "Love", text: "Don’t rush — divine timing is real in love." },
  { category: "Love", text: "You are worthy of deep, lasting love." },
  { category: "Love", text: "A loving surprise is on its way." },
  { category: "Love", text: "Say what you feel before it’s too late." },
  { category: "Love", text: "Your soulmate feels your energy even from afar." },
  { category: "Love", text: "Love is healing — let it in." },
  { category: "Love", text: "You’re closer to your true love than you realize." },
  { category: "Love", text: "Distance can't dim true feelings." },
  { category: "Love", text: "A romantic chapter is about to unfold." },
  { category: "Love", text: "Healing past love helps welcome new love." },
  { category: "Love", text: "Your love life needs patience, not pressure." },
  { category: "Love", text: "Your silence is being misunderstood — speak from love." },
  { category: "Love", text: "Reconnection is possible — keep your heart open." },
  { category: "Love", text: "Your next conversation might change everything." },
  { category: "Love", text: "True love often walks in quietly." },
  { category: "Love", text: "Someone is manifesting you right now." },
  { category: "Love", text: "An old spark may turn into a new flame." },
  { category: "Love", text: "Give love one more chance — but wisely." },
  { category: "Love", text: "You deserve someone who understands your silence." },
  { category: "Love", text: "The right one sees your scars as strength." },
  { category: "Love", text: "Your love story is still being written." },
  { category: "Love", text: "A heart-to-heart is all you need today." },
  { category: "Love", text: "Stop chasing — let love come to you." },
  { category: "Love", text: "Your eyes will meet someone special very soon." },
  { category: "Love", text: "Self-love will magnetize true love." },

  // Career Predictions (68–100)
  { category: "Career", text: "A breakthrough is around the corner — keep moving." },
  { category: "Career", text: "Your talent is about to be recognized." },
  { category: "Career", text: "Stay consistent — rewards are near." },
  { category: "Career", text: "A new idea will change your professional path." },
  { category: "Career", text: "Don’t settle — aim higher." },
  { category: "Career", text: "Your hard work is being watched silently." },
  { category: "Career", text: "Speak up in your next meeting — you’ll shine." },
  { category: "Career", text: "Collaboration will open new doors today." },
  { category: "Career", text: "Trust the process — success takes shape slowly." },
  { category: "Career", text: "An unexpected career opportunity will arise." },
  { category: "Career", text: "Take one bold step — the universe will match it." },
  { category: "Career", text: "You’re born to lead — start believing it." },
  { category: "Career", text: "Today is perfect to update your vision board." },
  { category: "Career", text: "Passion will guide your path to purpose." },
  { category: "Career", text: "You’re building something powerful. Don’t quit." },
  { category: "Career", text: "Say yes — even if you’re scared." },
  { category: "Career", text: "Risk will bring reward this week." },
  { category: "Career", text: "You’re one connection away from your dream job." },
  { category: "Career", text: "Your intuition is your best business coach." },
  { category: "Career", text: "Hustle with heart — that’s your magic." },
  { category: "Career", text: "Imposter syndrome is lying — you are capable." },
  { category: "Career", text: "A positive shift is happening in your work life." },
  { category: "Career", text: "The interview you’re nervous about will go well." },
  { category: "Career", text: "You’re meant for greatness — act like it." },
  { category: "Career", text: "Clarity will strike — trust your next decision." },
  { category: "Career", text: "Stay calm — chaos often comes before success." },
  { category: "Career", text: "You are becoming someone powerful." },
  { category: "Career", text: "Celebrate small wins — they lead to big ones." },
  { category: "Career", text: "You are the CEO of your destiny." },
  { category: "Career", text: "Don’t fear competition — your vibe is unmatched." },
  { category: "Career", text: "Let your work speak louder than your doubt." },
  { category: "Career", text: "Prepare — a spotlight moment is coming soon." },
  { category: "Career", text: "Say what you want — the universe is listening." },
  { category: "Career", text: "You will attract abundance through your mindset." }
];


function triggerFile(button) {
  const fileInput = button.previousElementSibling;
  fileInput.click();
}

function predict(event, category) {
  const file = event.target.files[0];
  if (!file) {
    alert("Please upload a palm image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imgId = category.toLowerCase() + "Image";
    const predId = category.toLowerCase() + "Prediction";

    document.getElementById(imgId).src = e.target.result;
    document.getElementById(imgId).style.display = "block";

    const list = predictions[category];
    const randomPrediction = list[Math.floor(Math.random() * list.length)];
    document.getElementById(predId).innerText = randomPrediction;
  };
  reader.readAsDataURL(file);
}
// Initially disable the scan button
document.getElementById('scanBtn').disabled = true;

// Enable it only after capture is done
document.getElementById('captureBtn').addEventListener('click', function () {
  // existing capture logic here...

  // Enable scan button now
  document.getElementById('scanBtn').disabled = false;
});
