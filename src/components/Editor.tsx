import { type EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

interface IEditor {
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
}

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const MyEditor: React.FC<IEditor> = ({ editorState, setEditorState }) => {
  
  return (
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="max-w-full max-h-screen"
        editorClassName="bg-light overflow-y-scroll h-[440px] w-[440px] max-h-screen"
        toolbarClassName="w-full grid grid-rows-12"
      />
  );
};

{/*    <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}

export default MyEditor;
