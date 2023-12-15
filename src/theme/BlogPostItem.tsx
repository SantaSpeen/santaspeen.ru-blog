import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from "@docusaurus/theme-common/internal";
import Giscus from "@giscus/react";

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();
  if (!isBlogPostPage) {
    return <BlogPostItem {...props} />;
  }
  return (
    <>
      <BlogPostItem {...props} />
      {(
        <div className="docusaurus-blog-comments">
          <Giscus
            repo="SantaSpeen/santaspeen.ru-blog"
            repoId="R_kgDOK6Fd_Q"
            category="General"
            categoryId="DIC_kwDOK6Fd_c4Cbwpe"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="dark"
            lang={'ru'}
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}