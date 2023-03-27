import React, { useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { type EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";


const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

interface IEditor {
  setEditor:
}

const MyEditor:React.FC = ({ setEditorState, editorState }) => {

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="max-w-full max-h-screen"
        editorClassName="bg-light overflow-y-scroll h-[440px] w-[440px] max-h-screen"
        toolbarClassName="w-full"
      />
      {/*    <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
    </>
  );
};

export default MyEditor;
