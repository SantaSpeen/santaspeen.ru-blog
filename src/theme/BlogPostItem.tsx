import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from "@docusaurus/theme-common/internal";
import Giscus from "@giscus/react";

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();
  
  if (!isBlogPostPage) {
    return <BlogPostItem {...props} />;
  }
  
  const repo = "SantaSpeen/santaspeen.ru-blog"
  const repoId = "R_kgDOK6Fd_Q"
  const category = "General"
  const categoryId = "DIC_kwDOK6Fd_c4Cbwpe"

  return (
    <>
      <BlogPostItem {...props} />
      {(
        <div className="docusaurus-blog-comments">
          <Giscus
            repo={repo}
            repoId={repoId}
            category={category}
            categoryId={categoryId}
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
