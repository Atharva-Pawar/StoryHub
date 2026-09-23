interface BlogCaedProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCaedProps) => {
  return (
    <>
      <div className="border-b border-slate-300 pb-3.5 p-4">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar name={authorName} />
          </div>
          <div className="font-extralight pl-2 flex justify-center flex-col">
            {authorName}
          </div>
          <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-sm font-thin text-slate-400">{`${Math.ceil(content.length / 100)} minutes`}</div>
      </div>
    </>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-400 rounded-full">
        <span className="font-medium text-body">{name[0]}</span>
      </div>
    </>
  );
}

export default BlogCard;
