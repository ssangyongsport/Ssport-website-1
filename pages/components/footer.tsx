import Link from 'next/link';
import Script from 'next/script';
function footer() {
  return (
<footer className="bg-gray-50 dark:bg-gray-800">
  <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          組織
        </h2>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link href="/blog" className="hover:underline" passHref={true}>
              部落格
            </Link>
          </li>
          <li className="mb-4">
            <Link href="c" className="hover:underline" passHref={true}>
             聯繫
            </Link>
           </li>
          <li className="mb-4">
               <a id="footer-badge" href="https://status.ssangyongsports.org">
        狀態載入中
      </a>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            function updateFooterBadge(status) {
              const badge = document.getElementById('footer-badge');
              badge.textContent = status === 'UP' ? '系統運行' : '系統異常';
              badge.className = status.toLowerCase();
            }

            fetch('https://status.ssangyongsports.org/summary.json')
              .then(response => response.json())
              .then(data => {
                const status = data.page.status;
                updateFooterBadge(status);
                badge.href = data.page.url;
              })
              .catch(error => {
                console.error('無法讀取系統狀態', error);
              });
          `,
        }}
      ></script>
           </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          幫助
        </h2>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <a href="https://help.ssangyongsports.org/" className="hover:underline">
             幫助中心
            </a>
          </li>
          <li className="mb-4">
            <a href="https://help.ssangyongsports.org/" className="hover:underline">
            線上客服
            </a>
          </li>
          <li className="mb-4">
            <a href="https://discuss.ssangyongsports.org/" className="hover:underline">
              論壇
            </a>
          </li>
          <li className="mb-4">
            <Link href="c" className="hover:underline" passHref={true}>
              聯繫
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          條款
        </h2>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link href="/p" passHref={true}>
              隱私政策
            </Link>
          </li>
          <li className="mb-4">
            <a href="/t" className="hover:underline">
              服務條款
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          雙龍體育TV
        </h2>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <Link href="/tv" className=" hover:underline" passHref={true}>
              官網
            </Link>
          </li>
          <li className="mb-4">
            <a href="https://tv.ssangyongsports.org/buy.html" className="hover:underline">
              註冊
            </a>
          </li>
          <li className="mb-4">
            <a href="https://tv.ssangyongsports.org/login" className="hover:underline">
             登入
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          體育
        </h2>
        <ul className="text-gray-500 dark:text-gray-400">
          <li className="mb-4">
            <a href="https://slb.ssangyongsports.org/" className="hover:underline">
              雙龍職棒
            </a>
          </li>
          <li className="mb-4">
            <a href="https://sba.ssangyongsports.org/" className="hover:underline">
              雙龍職籃
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              雙龍足球
            </a>
          </li>          
        </ul>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="text-center">
      <Link
        href="/"
        className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
  src="https://i.imgur.com/JhurYW7.jpg"
  width={186}
  height={46}
  alt="雙龍體育Logo"
/>
</Link>
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
      Copyright © 2023 
        <a href="#" className="hover:underline">
          雙龍體育,
        </a>
      維護團隊：雙龍體育
      </span>
      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <a
            href="https://www.facebook.com/ssangyongsports/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>        
        <li>
          <a
            href="https://twitter.com/ssangyongsport"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ssangyongsportsorg"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>       
      </ul>
    </div>
  </div>
</footer>
  )
}

export default footer;
