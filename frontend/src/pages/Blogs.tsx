import { AppBar } from "../component/AppBar";
import { BlogCard } from "../component/BlogCard";
import { BlogSkeleton } from "../component/BlogSkelton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const {loading , blogs} = useBlogs()

  if(loading){
    return (<div>
      <AppBar />
      <div className="flex justify-center flex-col items-center">
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      </div>
    </div>)
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div >
          {blogs.map(blog=><BlogCard
                    key={blog.id}
                    id={blog.id}
                    // authorName={blog.author.name || "Anonymous"}
                    authorName={blog.autherName || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}/>
          )}
          
        </div>
      </div>
    </div>
  );
};
