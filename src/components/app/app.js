import React from "react";
import PhotoList from "../photo-list/photo-list";
import PhotoAddForm from "../photo-add-form/photo-add-form";

import "./app.css";
import "../photo-add-form/photo-add-form.css";
import "../photo-list/photo-list.css";
import "../photo-list-item/photo-list-item.css";
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            localstorageData: null,

        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;

    }
    componentDidMount() {
        this.setState(({localstorageData}) => {
            let newData = JSON.parse(localStorage.getItem("photoList"))
            return {
                localstorageData: newData
            }
        });
    }

    deleteItem(id) {
        setTimeout(()=> {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const before = data.slice(0, index);
                const after = data.slice(index + 1);

                const newArr = [...before, ...after];
                localStorage.removeItem("photoList")
                return {
                    data: newArr
                }
            });
        },1000);

    }

    addItem(newItem) {

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
        localStorage.setItem("photoList", JSON.stringify(this.state.data));
    }

    render() {

        const { data, localstorageData } = this.state;

        return (
            <AppBlock>
                <PhotoAddForm
                    onAdd={this.addItem}/>
                <PhotoList
                    posts={localstorageData ? localstorageData : data}
                    onDelete={this.deleteItem}/>
            </AppBlock>
        )

    }

}

