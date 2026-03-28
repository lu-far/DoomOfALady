(function () {
  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderPosts(posts) {
    var mount = document.getElementById("blog-post-list");
    if (!mount) {
      return;
    }

    if (!Array.isArray(posts) || posts.length === 0) {
      mount.innerHTML = '<article class="post"><h3>No posts yet</h3><p class="post-meta">Create a file in the blogs folder to add your first post.</p></article>';
      return;
    }

    var html = posts
      .map(function (post) {
        var title = escapeHtml(post.title || "Untitled Post");
        var summary = escapeHtml(post.summary || "No summary provided yet.");
        var date = escapeHtml(post.displayDate || "No date");
        var readTime = escapeHtml(post.readTime || "5 min read");
        var path = escapeHtml(post.path || "#");

        return (
          '<article class="post">' +
          '<h3><a class="publication-link" href="' +
          path +
          '">' +
          title +
          "</a></h3>" +
          '<p class="post-meta">' +
          date +
          " - " +
          readTime +
          "</p>" +
          "<p>" +
          summary +
          "</p>" +
          "</article>"
        );
      })
      .join("");

    mount.innerHTML = html;
  }

  function loadPosts() {
    fetch("blogs/posts.json", { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load blog posts");
        }

        return response.json();
      })
      .then(renderPosts)
      .catch(function () {
        var mount = document.getElementById("blog-post-list");
        if (!mount) {
          return;
        }

        mount.innerHTML =
          '<article class="post"><h3>Could not load posts</h3><p class="post-meta">Run scripts/generate_blog_manifest.py to create blogs/posts.json.</p></article>';
      });
  }

  document.addEventListener("DOMContentLoaded", loadPosts);
})();
