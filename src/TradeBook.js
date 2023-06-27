import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./TR.css"
function TradeBook() {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [description, setDescription] = useState("");
  const [filepathbook, setFilepathbook] = useState("");
  const [avis, setAvis] = useState("");
  const [bookwishes, setBookwishes] = useState("");
  const navigate = useNavigate();
  async function addProduct() {
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("auteur", auteur);
    formData.append("description", description);
    formData.append("file_path_book", filepathbook);
    formData.append("avis", avis);
    formData.append("book_wishes", bookwishes);

    let result = await fetch("http://127.0.0.1:8000/api/addtrade", {
      method: 'POST',
      body: formData
    });
    console.log(result)
    navigate('/tradeBookList')
  }

  return (
    <>
    <div className='container'>
      <div className="form-group">
        <br />
        <br />
        <br />
        <br />

        <h1>Add Trade Book</h1>
        <br />
        <form encType="multipart/form-data">
          <input type="" className="form-control" placeholder='titre' onChange={(e) => setTitre(e.target.value)} /> <br />
          <input type="" className="form-control" placeholder="auteur" onChange={(e) => setAuteur(e.target.value)} /> <br />
          <div className="form-group">
            <textarea className="form-control" placeholder="description" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <label htmlFor="image">Choisir une image:</label>
          <input type="file" className="form-control" placeholder="file" onChange={(e) => setFilepathbook(e.target.files[0])} /> <br />
          <div className="form-group">
            <textarea className="form-control" placeholder="Avis" id="Avis" rows="3" value={avis} onChange={(e) => setAvis(e.target.value)}></textarea>
          </div>
          <input type="" className="form-control" placeholder="bookwishes" onChange={(e) => setBookwishes(e.target.value)} /> <br />
          <button onClick={addProduct} id='ax' className="btn btn-primary" >Add</button>
        </form>

        <br />
      </div>
    </div>
    </>
  );
}

export default TradeBook;
