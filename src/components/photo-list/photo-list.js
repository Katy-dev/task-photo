import React from 'react';
import PostListItem from "../photo-list-item/photo-list-item";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PhotoList = ({posts, onDelete}) => {

    const elements = posts.map((item, index) => {
            const {id, ...itemProps} = item;
            return (
                <CSSTransition
                    key={index}
                    classNames={"note"}
                    timeout={1000}>
                    <li key={index} className="list-group-item note">
                        <PostListItem
                            {...itemProps}
                            onDelete={() => onDelete(id)}
                        />
                    </li>
                </CSSTransition>
            )
        }
    )
    return (
        <TransitionGroup component="ul" className="list-group">
            {elements}
        </TransitionGroup>
    )
}
export default PhotoList;
