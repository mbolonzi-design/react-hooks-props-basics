import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";
import BlogRecomment from "./BlogRecomment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
      isPublished={true}
      minutesToRead={1}
       />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Comment commentText="I don't agree at all, in need to do my own research. - Mbolonzi" />
      <BlogRecomment recommentSite="Visit here for more of this" />
    </div>
  );
}

export default BlogPost;
