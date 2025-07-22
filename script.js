// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// Toggle Chat
function toggleChat() {
  const chatbox = document.getElementById('chatbox');
  chatbox.style.display = (chatbox.style.display === 'block') ? 'none' : 'block';
  document.getElementById('userInput').focus();
}

// Penguin Chatbot Responses (trained brain)
function basicPenguinReply(input) {
  const lower = input.toLowerCase();

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) 
    return "Hello! I'm Rollie 🦔, your friendly assistant from Pangolin. How can I help you today?";

  if (lower.includes('what is pangolin') || lower.includes('who are you')) 
    return "Pangolin is Bangladesh’s trusted digital payment platform – similar to bKash and Nagad – designed to make your financial life easier with fast, secure, and simple services right from your phone! And I'm Rollie, your assistant! 🦔";

  if (lower.includes('services') || lower.includes('what can you do') || lower.includes('features')) 
    return "Here’s what Pangolin offers:\n• 💸 Send Money instantly\n• 💳 Cash Out anytime\n• 📱 Mobile Recharge with offers\n• 🏦 Add Money from banks/cards\n• 💡 Pay Utility Bills easily\n• 📅 EMI Payments\n• 🛍️ Pay via QR code or online checkout\n\nClick any service from the menu to learn more!";

  if (lower.includes('send money')) 
    return "Pangolin's Send Money lets you transfer funds instantly to any mobile number across Bangladesh. Fast, secure, and simple! 💸";

  if (lower.includes('cash out')) 
    return "Need cash? Use Pangolin’s Cash Out to withdraw from agents or ATMs whenever needed. 💳";

  if (lower.includes('mobile recharge') || lower.includes('recharge')) 
    return "Recharge any mobile operator easily using Pangolin – plus, enjoy exclusive recharge offers! 📱";

  if (lower.includes('add money')) 
    return "Load funds into your Pangolin wallet from banks, debit/credit cards, or other wallets to start transacting. 🏦";

  if (lower.includes('bill') || lower.includes('pay bills')) 
    return "Pay your utility bills like electricity, gas, water, and internet – all from your Pangolin app. 💡 Simple, fast, secure.";

  if (lower.includes('emi') || lower.includes('installment')) 
    return "Track and pay your monthly installments using Pangolin's EMI Payment service. Convenient and reliable. 📅";

  if (lower.includes('payment') || lower.includes('make payment') || lower.includes('qr')) 
    return "Make payments via QR code at stores, restaurants, or pay online. Safe and smooth with Pangolin! 🛍️";

  if (lower.includes('contact') || lower.includes('support') || lower.includes('customer care')) 
    return "Need assistance? 🛠️ Contact us via:\n• Live Chat\n• Phone Call\n• Email Support\nJust visit our Contact Us page to reach out anytime!";

  if (lower.includes('help')) 
    return "I'm Rollie 🦔, always ready to help! Ask me about our services, payments, or how to get in touch with Pangolin support.";

  if (lower.includes('thanks') || lower.includes('thank')) 
    return "You're welcome! 🦔 Happy to help anytime!";

  if (lower.includes('bye') || lower.includes('goodbye')) 
    return "Goodbye from Rollie! 🦔 Wishing you a wonderful day!";

  return "Hmm... I'm Rollie 🦔 but I didn’t quite catch that. Try asking me about services, payments, or getting support!";
}

// Send Message
function sendMessage() {
  const userInput = document.getElementById('userInput');
  const messages = document.getElementById('messages');
  const message = userInput.value.trim();
  if (message === '') return;

  messages.innerHTML += `<div class="user-msg">${message}</div>`;
  const reply = basicPenguinReply(message);
  messages.innerHTML += `<div class="bot-msg">${reply}</div>`;
  messages.scrollTop = messages.scrollHeight;
  userInput.value = '';
}

// Send on Enter
const userInput = document.getElementById('userInput');
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Hamburger Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

let hideTimer;

dropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimer);
    dropdownMenu.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    hideTimer = setTimeout(() => {
        dropdownMenu.style.display = 'none';
    }, 300);  // 1 second delay
});
