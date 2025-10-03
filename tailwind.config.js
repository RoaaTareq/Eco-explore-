/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beigeLight: '#f8f1e8',      // خلفيات أساسية
        darkGreen: '#2d373c',        // أزرار ونصوص داكنة
        oliveLight: '#819877',       // عناصر ثانوية
        grayishGreen: '#ceddcd',    // خلفيات بطاقات
        emeraldGreen: '#216e5a',    // أزرار رئيسية وعناوين
        goldBeige: '#d7c28f',       // تمييز وخلفيات دافئة
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
        english: ['Poppins', 'Montserrat', 'sans-serif'],
      },
      fontSize: {
        headingPrimary: ['36px', '44px'],   // العنوان الرئيسي
        headingSecondary: ['24px', '32px'], // العناوين الفرعية
        body: ['16px', '24px'],             // النصوص العادية
        button: ['18px', '24px'],           // الأزرار
      },
    },
  },
  plugins: [],
};
