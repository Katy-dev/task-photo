import React, {useState} from 'react';

const PhotoAddForm = (props) => {
    const [src, setPhoto] = useState(null);
    const [nameFile, setNameFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newItem = {
            src,
            nameFile,
        }
        props.onAdd(newItem);
    }

    const handleImageChange = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                setNameFile(file.name);
                setPhoto(reader.result);
                console.log(nameFile)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <form
            className="bottom-panel d-flex"
            onSubmit={handleSubmit}>
            <label className="btn-input">
                Choose photo...
                <input
                    accept="image/*"
                    type="file"
                    onChange={handleImageChange}
                />
            </label>
            <button type="submit"
                    className="custom-file-upload"
                    onClick={handleSubmit}
            >
                Upload Photo
            </button>
        </form>

    )
}

export default PhotoAddForm;
