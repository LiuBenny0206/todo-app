/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 使用 'class' 替代 'selector' 是更常见的方式
  content: ["./src/**/*.{js,jsx}"], // 這樣配置可以捕獲 src 資料夾下所有的 .js 和 .jsx 文件
  theme: {
    extend: {
      backgroundImage: theme => ({
        'check-gradient': 'linear-gradient(to right, hsl(192, 100%, 67%),  hsl(280, 87%, 65%))', // 渐变色
      }),
      screens: {
        'xs': '320px',  // 新增更小的斷點
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
