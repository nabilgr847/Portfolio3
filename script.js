// ১. ফর্ম এলিমেন্টটাকে খুঁজে বের করা
const loginForm = document.getElementById('login-form');

// ২. ফর্ম যখন সাবমিট হবে (বাটন ক্লিক করলে)
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // যাতে পেজ রিলোড না হয়
    
    // ৩. ইনপুট বক্স থেকে আইডি এবং পাসওয়ার্ড সংগ্রহ করা
    const userId = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ৪. আইডি এবং পাসওয়ার্ড চেক করা
    // আপনি এখানে নিজের পছন্দমতো ID ও Pass পরিবর্তন করতে পারেন
    if (userId === "admin" && password === "1234") {
        alert("স্বাগতম নবাব! লগইন সফল হয়েছে।");
        
        // লগইন সফল হলে আপনার পোর্টফোলিও পেজে নিয়ে যাবে
        window.location.href = "nobabbilsdev-portfolio.html"; 
    } else {
        // ভুল হলে ওয়ার্নিং দিবে
        alert("ভুল আইডি অথবা পাসওয়ার্ড! আবার চেষ্টা করুন।");
    }
});

