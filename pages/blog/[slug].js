import fs from "fs";
import matter from "gray-matter";
import MarkdownIt from "markdown-it"; // import the markdown-it library
import md from "markdown-it"; // import the markdown-it library
import { NextSeo } from 'next-seo';
import path from "path";
import styles from '../components/Button.module.css';

// The page for each post
export default function Post({frontmatter, content}) {
    const {title, author, category, date, bannerImage, tags} = frontmatter

    return <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">                   
          <h1 className={`mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white ${styles.abc}`}>
        {title}
        </h1>
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          
            <img
              className="mr-4 w-16 h-16 rounded-full"
              src="https://discuss.ssangyongsports.org/data/avatars/l/0/1.jpg?1679114793"
              alt="Peter yang"
            />
            <div>
              <a
                href="https://discuss.ssangyongsports.org/members/peter-yang.1/"
                rel="author"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {author}
              </a>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                雙龍體育部長
              </p>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                <time
                  pubdate=""
                  dateTime="{date}"
                  title="{date}"
                >
                  {date}
                </time>
              </p>
            </div>
          </div>
        </address>      
    <div dangerouslySetInnerHTML={{ __html: content }} />
      </header>

    </article>
<NextSeo
  title={`${title}-雙龍體育blog`}
  description={title}
/>

  </div>
</main>

}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fullPath = path.join("posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true,
  // Disable header tags
  header: false,
    heading: false,
    plugins: [require('markdown-it-attrs')],


});
md.use(require('markdown-it-attrs'), {
    leftDelimiter: '[',
    rightDelimiter: ']',
  });
  const htmlContent = md.render(content);

  return {
  props: {
    frontmatter,
    content: htmlContent,
    },
  };
}  
