import React, {useState} from "react";

const PhotoListItem = ({src, nameFile, onDelete}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = () => {
        setIsChecked(!isChecked);
    }

      return (
      <div className="app-list-item">
          <div className="app-list-item-wrap">
              <div className="wrapper__item">
                  <img src={src} alt="photo"/>
                  <p style= {{textDecoration: isChecked ? "line-through": "none"}}
                     className="item_title">
                      {nameFile}
                  </p>
              </div>
          <button
              type="button"
              className="btn-trash btn-sm"
              onClick={()=> {
                  onDelete()
                  handleChecked()}
              }>
              <i className="fa fa-trash-o"></i>
          </button>
          </div>
      </div>
      )
}

export default PhotoListItem;
