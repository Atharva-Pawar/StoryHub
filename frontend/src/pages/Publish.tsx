import axios from "axios";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import { BACKEND_URL } from "../config";

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Title and content are required");
      return;
    }

    setIsPublishing(true);
    setError("");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title: title.trim(), content: content.trim() },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (err) {
      setError("Failed to publish. Please try again.");
      console.error("Publish error:", err);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (error) setError("");
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (error) setError("");
  };

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/blogs"
              className="flex items-center gap-2 font-semibold text-lg text-[var(--color-text-primary)] hover:opacity-80 transition-opacity duration-200"
            >
              <svg
                className="h-6 w-6 text-[var(--color-accent-primary)]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              <span>Medium</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--color-text-muted)] hidden sm:block">
                {readTime} min read
              </span>
              <Button variant="ghost" size="sm" onClick={() => navigate("/blogs")}>
                Cancel
              </Button>
              <Button type="submit" form="publish-form" variant="primary" isLoading={isPublishing}>
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Editor */}
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <form id="publish-form" onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm" role="alert">
              {error}
            </div>
          )}

          {/* Title */}
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
            className="w-full text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] bg-transparent border-none outline-none resize-none mb-8 leading-tight"
            maxLength={100}
            aria-label="Blog post title"
            autoFocus
          />

          {/* Divider */}
          <hr className="border-[var(--color-border-primary)] mb-8" />

          {/* Content Editor */}
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="Tell your story..."
            className="w-full min-h-[500px] text-lg sm:text-xl leading-loose text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] bg-transparent border-none outline-none resize-none font-serif"
            rows={20}
            aria-label="Blog post content"
            spellCheck={true}
          />

          {/* Footer Stats */}
          <div className="mt-8 pt-6 border-t border-[var(--color-border-primary)] flex items-center justify-between text-sm text-[var(--color-text-muted)]">
            <div className="flex items-center gap-4">
              <span>{wordCount} words</span>
              <span aria-hidden="true">·</span>
              <span>{readTime} min read</span>
            </div>
            <Button type="submit" variant="primary" isLoading={isPublishing} className="ml-auto">
              Publish
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Publish;