import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';



const FileList = ({ files }) => {
  return (
    <table className="file-list">
      <tbody>
        {
          files.map((file) =>
            <FileListItem key={file.id} file={file} />
          )}
      </tbody>
    </table>

  )

}


const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName file={file} />
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};




function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder') {
    icon = 'fa-folder';
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

function FileName({ file }) {
  return (
    <>
      <FileIcon file={file} />
      <td className="file-name">{file.name}</td>
    </>
  );
}
FileName.propTypes = {
  file: PropTypes.object.isRequired
};



const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];








ReactDOM.render(
  <React.StrictMode>
    <FileList files={testFiles} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
