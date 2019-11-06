import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditorArticle = ({ dataInit }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState('');
  const [artAttr, setArtAttr] = useState('');
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const submitArticle = async () => {
    console.log(stateToHTML(editorState.getCurrentContent()));
    if (title === '' || artAttr === '') {
      return 0;
    }
    const sendData = await fetch('http://localhost:2700/addarticle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description: stateToHTML(editorState.getCurrentContent()),
        category: artAttr,
      }),
    });
    await sendData.json();
    return 1;
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const setCategory = (e) => {
    setArtAttr(e.target.value);
  };

  const openPreview = () => {
    console.log('get preview of current article');
  };
  return (
    <div className="editorWrap">
      <div className="articleAtributes">
        <input type="text" name="title" value={title} onChange={handleTitle} />
        {Object.keys(dataInit).length ? (
          <select name="category" defaultValue="default" onChange={setCategory}>
            <option value="default">Choose category</option>
            {dataInit.map(item => (
              <option value={item.category_name} key={item.id}>{item.category_name}</option>
            ))}
          </select>
        ) : null}
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorInput"
        onEditorStateChange={onEditorStateChange}
        placeholder="Write anything..."
      />
      <div className="submitParams">
        <input type="submit" value="Preview article" title="Preview article" onClick={openPreview} />
        <input type="submit" value="Push article" title="Publish this article" onClick={submitArticle} />
      </div>
    </div>
  );
};

EditorArticle.propTypes = {
  dataInit: PropTypes.arrayOf(PropTypes.object, PropTypes.string).isRequired,
};

const mapDispatchToProps = state => ({
  dataInit: state.monitor.dataInit,
});

export default connect(mapDispatchToProps)(EditorArticle);
