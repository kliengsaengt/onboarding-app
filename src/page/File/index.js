import React, { Component } from 'react'
import './index.scss'

class File extends Component {
  render() {
    const files = [
      {
        name: 'code of ethics',
        created: '27/02/2019',
        created_by: 'Hendrik'
      },
      {
        name: 'Personal information',
        created: '27/02/2019',
        created_by: 'Hendrik'
      },
      {
        name: 'Personal information',
        created: '27/02/2019',
        created_by: 'Hendrik'
      }
    ]
    return (
      <div className="file-page-wrapper">
        <div className="left-component">
          files
        </div>

        <div className="file-list-wrapper">
          <div className="all-file-title">

            All files

          </div>
          <div className="file-list">
            {
              files.map((file, index) => {
                return(
                  <div className="file">
                    <input type="checkbox" />
                    <div className="file-content">
                      <div className="file-name">
                        {file.name}
                      </div>
                      <div className="file-create">
                        {file.created}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    )
  }
}


export default File