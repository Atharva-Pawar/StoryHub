import axios from "axios";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Appbar />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            className="w-full text-5xl font-serif outline-none border-none
                       placeholder:text-slate-400"
          />

          <TextArea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <button
            onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description,
              }, {
                headers: {
                  Authorization: localStorage.getItem("token")
                }
              });
              navigate(`/blog/${response.data.id}`);
            }}
            type="button"
            className="self-start mt-4 bg-green-600 hover:bg-green-700
                   text-white font-medium text-sm
                   px-5 py-2.5 rounded-full cursor-pointer"
          >
            Publish Post
          </button>
        </div>
      </div>
    </>
  );
};

function TextArea({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <textarea
        onChange={onChange}
        placeholder="Tell your story..."
        className="w-full mt-6 min-h-80 resize-none text-xl font-serif
                   outline-none border-none placeholder:text-slate-400
                   leading-relaxed"
      />
    </div>
  );
}

export default Publish;
