import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <article key={post.id} className="mb-6 md:mb-8">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline">
          {post.pageIcon.startsWith("data") ? (
            <h2 className="text-lg inline-flex md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              <img src={`${post.pageIcon}`} alt={post.title} className="max-h-6"/>&nbsp;{post.title}
            </h2>
          ) : (
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              {post.pageIcon} {post.title}
            </h2>
          )}
          <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
            <FormattedDate date={post.date} />
          </time>
        </header>
        <main>
          <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
        </main>
      </article>
    </Link>
  );
};

export default BlogPost;
