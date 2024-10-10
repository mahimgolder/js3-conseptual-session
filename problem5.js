/*
biye-bari bor-jatri jaoyar poribohon:
bus = 50;
micro = 15;
rickshaw cast tk = 20;


******solveing plan :

total borjatri jabbe : 234 jon;
----------
bus (4) = 200 jon,----remaining = 34 jon;
micro (2) = 30 jon,---remaining = 4 jon;
remaining 4 jon ricksha te jabe .
rickshaw (4 jon) = vara hobe -- (20 * 4)=80tk

*/

function rickshawRent(peoples){
    const bus =50;
    const micro = 15;
    const perRickshawRent = 20;

    const remainingAfterBus = peoples % bus;
    const remainingAfterMicro = remainingAfterBus % micro;
    const goByRickshaw = remainingAfterMicro;
    const totalRickshawRent = goByRickshaw * perRickshawRent;

    return totalRickshawRent;
}
console.log(rickshawRent(234));

/*

 আসুন দেখি কীভাবে কাজ করছে এবং এর ফলাফল কী।

function rickshawVara(peoples) {
    const bus = 50; // ১টি বাসে ৫০ জন যাবে
    const micro = 15; // ১টি মাইক্রোবাসে ১৫ জন যাবে
    const perRickshawCost = 20; // ১টি রিকশার খরচ ২০ টাকা

    const remainingAfterBus = peoples % bus; // বাসের পর অবশিষ্ট মানুষ
    const remainingAfterMicro = remainingAfterBus % micro; // মাইক্রোবাসের পর অবশিষ্ট মানুষ
    
    return remainingAfterMicro * perRickshawCost; // অবশিষ্ট মানুষের জন্য রিকশার খরচ
}
console.log(rickshawVara(234)); // ফাংশন কল করে ফলাফল দেখানো হচ্ছে
কোডের কাজের প্রক্রিয়া
-----------------
1.বাসে যাত্রী সংখ্যা:

peoples % bus গণনা করে কতজন লোক বাসে যাবে এবং কতজন অবশিষ্ট থাকবে।
উদাহরণস্বরূপ, যদি peoples = 234, তাহলে remainingAfterBus = 234 % 50 হবে 34।
2.মাইক্রোবাসে যাত্রী সংখ্যা:

remainingAfterBus % micro গণনা করে কতজন লোক মাইক্রোবাসে যাবে এবং কতজন অবশিষ্ট থাকবে।
এই ক্ষেত্রে, remainingAfterMicro = 34 % 15 হবে 4।
3.রিকশার খরচ:

অবশিষ্ট ৪ জনের জন্য রিকশার খরচ হিসাব করা হচ্ছে:
remainingAfterMicro * perRickshawCost হবে 4 * 20 = 80 টাকা।
*ফলাফল
যখন rickshawVara(234) কল করা হয়, তখন আউটপুট হবে 80, মানে ৪ জন লোকের জন্য রিকশার খরচ ৮০ টাকা।
স্পষ্টতা
তুমি rickshaw ভ্যারিয়েবল ঘোষণা করেছো, কিন্তু এটি কোডে ব্যবহার করা হয়নি। তুমি যদি রিকশার মাধ্যমে ২ জন লোক নিতে চাও, তাহলে সেটা যুক্ত করা প্রয়োজন।
উন্নতকরণ
তুমি চাইলে কোডটিকে আরও পরিষ্কার ও কার্যকর করতে পারো। নিচে একটি সংস্কৃত কোড দেওয়া হলো, যেখানে রিকশা সংখ্যা হিসাব করা হয়েছে:

function rickshawVara(peoples) {
    const bus = 50; // ১টি বাসে ৫০ জন যাবে
    const micro = 15; // ১টি মাইক্রোবাসে ১৫ জন যাবে
    const perRickshawCost = 20; // ১টি রিকশার খরচ ২০ টাকা

    const remainingAfterBus = peoples % bus; // বাসের পর অবশিষ্ট মানুষ
    const remainingAfterMicro = remainingAfterBus % micro; // মাইক্রোবাসের পর অবশিষ্ট মানুষ
    
    const totalRickshawsNeeded = Math.ceil(remainingAfterMicro / 2); // ২ জনের জন্য রিকশা
    return totalRickshawsNeeded * perRickshawCost; // মোট রিকশার খরচ
}

console.log(rickshawVara(234)); // ফলাফল হবে 80



*/ 