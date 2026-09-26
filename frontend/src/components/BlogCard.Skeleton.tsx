const BlogCardSkeleton = () => {
  return (
    <div className="w-full border-b border-slate-200 px-8 py-7 animate-pulse">

      <div className="flex items-center mb-5">
        <div className="w-10 h-10 rounded-full bg-slate-200" />

        <div className="ml-3 h-4 w-24 bg-slate-200 rounded" />

        <div className="ml-3 h-4 w-20 bg-slate-200 rounded" />
      </div>

      <div className="h-7 w-3/4 bg-slate-200 rounded mb-4" />

      <div className="h-4 w-full bg-slate-200 rounded mb-2" />
      <div className="h-4 w-5/6 bg-slate-200 rounded mb-5" />

      <div className="h-3 w-16 bg-slate-200 rounded" />
    </div>
  );
};

export default BlogCardSkeleton;