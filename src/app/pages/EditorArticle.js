import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditorArticle = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const submitArticle = async () => {
    console.log(stateToHTML(editorState.getCurrentContent()));
  };
  return (
    <div className="editorWrap">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorInput"
        onEditorStateChange={onEditorStateChange}
        placeholder="Write anything..."
      />
      <input type="submit" value="addarticle" onClick={submitArticle} />
    </div>
  );
};

export default EditorArticle;
