import React from "react";
import "./App.css";

const MarkDownPreviewer = () => {
  const [marked, setMarked] = React.useState({
    editor: "",
    preview: "",
  });

  const submitValue = (e) =>
    setMarked({
      value: e.target.value,
      editor: e.target.value,
      preview: e.target.value,
    });

  return (
    <div>
      Mark Down Previewer
      <textarea id="editor"></textarea>
      <ul id="preview"></ul>
    </div>
  );
};

export default MarkDownPreviewer;
