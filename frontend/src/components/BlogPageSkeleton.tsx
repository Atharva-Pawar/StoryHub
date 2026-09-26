const BlogPageSkeleton = () => {
  return (
    <div className="animate-pulse">
      
      {/* Appbar space */}
      <div className="h-16 border-b border-slate-200" />

      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
          
          {/* Blog content */}
          <div className="col-span-8 pr-16">
            
            {/* Title */}
            <div className="h-12 w-4/5 bg-slate-200 rounded mb-5" />

            {/* Date */}
            <div className="h-4 w-40 bg-slate-200 rounded mb-10" />

            {/* Content */}
            <div className="h-5 w-full bg-slate-200 rounded mb-4" />
            <div className="h-5 w-full bg-slate-200 rounded mb-4" />
            <div className="h-5 w-11/12 bg-slate-200 rounded mb-4" />
            <div className="h-5 w-4/5 bg-slate-200 rounded mb-4" />
            <div className="h-5 w-full bg-slate-200 rounded mb-4" />
            <div className="h-5 w-3/4 bg-slate-200 rounded" />
          </div>

          {/* Author */}
          <div className="col-span-4 pl-10">
            <div className="h-6 w-24 bg-slate-200 rounded mb-6" />

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-slate-200" />

              <div className="ml-4">
                <div className="h-5 w-28 bg-slate-200 rounded mb-3" />
                <div className="h-4 w-52 bg-slate-200 rounded" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPageSkeleton;